import { load } from 'cheerio';
import trainerExportHtml from '../content/trainer-export.html?raw';

export interface TeamMember {
  name: string;
  role: string;
  phone?: string;
  email?: string;
}

export interface TeamData {
  section: string;
  name: string;
  slug: string;
  members: TeamMember[];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function toUniqueSlug(base: string, used: Set<string>): string {
  if (!used.has(base)) {
    used.add(base);
    return base;
  }

  let index = 2;
  while (used.has(`${base}-${index}`)) {
    index += 1;
  }

  const unique = `${base}-${index}`;
  used.add(unique);
  return unique;
}

export function getAllTeams(): TeamData[] {
  const $ = load(trainerExportHtml);
  const container = $('#westfalia-trainer-container');

  if (!container.length) {
    return [];
  }

  const teams: TeamData[] = [];
  const usedSlugs = new Set<string>();

  container.children('h2.wo-section-title').each((_, sectionTitle) => {
    const section = $(sectionTitle).text().trim();
    const grid = $(sectionTitle).next('.wo-grid');

    grid.children('.wo-card').each((__, card) => {
      const teamName = $(card).find('.wo-title').first().text().trim();
      if (!teamName) {
        return;
      }

      const members: TeamMember[] = [];

      $(card)
        .find('.wo-item')
        .each((___, item) => {
          const name = $(item).find('.wo-name').first().text().trim();
          const role = $(item).find('.wo-role').first().text().trim();
          const phoneHref = $(item).find('.wo-contact a[href^="tel:"]').first().attr('href') || '';
          const emailHref = $(item).find('.wo-contact a[href^="mailto:"]').first().attr('href') || '';

          if (!name) {
            return;
          }

          members.push({
            name,
            role,
            phone: phoneHref.replace(/^tel:/, '').trim() || undefined,
            email: emailHref.replace(/^mailto:/, '').trim() || undefined,
          });
        });

      const slugBase = slugify(teamName) || 'team';
      const slug = toUniqueSlug(slugBase, usedSlugs);

      teams.push({
        section,
        name: teamName,
        slug,
        members,
      });
    });
  });

  return teams;
}

export function getTeamsBySection(): { section: string; teams: TeamData[] }[] {
  const sectionOrder = ['Senioren', 'Junioren', 'Juniorinnen'];
  const teams = getAllTeams();
  const sectionMap = new Map<string, TeamData[]>();

  for (const team of teams) {
    if (!sectionMap.has(team.section)) {
      sectionMap.set(team.section, []);
    }

    sectionMap.get(team.section)?.push(team);
  }

  const orderedSections = sectionOrder
    .filter((section) => sectionMap.has(section))
    .map((section) => ({ section, teams: sectionMap.get(section) || [] }));

  for (const [section, sectionTeams] of sectionMap.entries()) {
    if (!sectionOrder.includes(section)) {
      orderedSections.push({ section, teams: sectionTeams });
    }
  }

  return orderedSections;
}