export interface Person {
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

export const abteilungsleiter: Person[] = [
  {
    initials: 'TW',
    gradientFrom: 'from-red-600',
    gradientTo: 'to-red-800',
    name: 'Tobias Wiggers',
    role: '⚽ Fußball Jugend',
    email: 'jugendabteilung@westfalia-osterwick.de',
  },
  {
    initials: 'MP',
    gradientFrom: 'from-pink-600',
    gradientTo: 'to-pink-800',
    name: 'Mona Paschert',
    role: '⚽ Fußball Damen',
    email: 'Damenabteilung@westfalia-osterwick.de',
  },
  {
    initials: 'HK',
    gradientFrom: 'from-fuchsia-500',
    gradientTo: 'to-fuchsia-700',
    name: 'Hannah Knipper',
    role: '⚽ Fußball Juniorinnen',
    email: 'Maedchenabteilung@westfalia-osterwick.de',
  },
  {
    initials: 'AU',
    gradientFrom: 'from-amber-600',
    gradientTo: 'to-amber-800',
    name: 'Andreas Ueding',
    role: '⚽ Fußball Alte Herren',
    email: 'Alte-Herren@westfalia-osterwick.de',
  },
  {
    initials: 'MK',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-emerald-700',
    name: 'Monique Kramer',
    role: '💪 Breitensport',
    email: 'm.kramer@westfalia-osterwick.de',
  },
  {
    initials: 'DM',
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-yellow-700',
    name: 'Daniel Mört',
    role: '🎾 Tennis',
    phone: '0151 17619011',
  },
  {
    initials: 'TM',
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-purple-800',
    name: 'Thorsten Merschf.',
    role: '🏸 Badminton',
    phone: '0173 66637529',
  },
];

export const sonderfunktionen: Person[] = [
  {
    initials: 'BS',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-orange-700',
    name: 'Birgit Scharf',
    role: '📋 Mitgliederverwaltung',
    email: 'b.scharf@westfalia-osterwick.de',
  },
  {
    initials: 'AP',
    gradientFrom: 'from-cyan-600',
    gradientTo: 'to-cyan-800',
    name: 'Andrea Patte',
    role: '📋 Passwesen',
    email: 'patte@westfalia-osterwick.de',
  },
  {
    initials: 'AF',
    gradientFrom: 'from-teal-600',
    gradientTo: 'to-teal-800',
    name: 'Alexandra Fehmer',
    role: '📋 Jugendschutz',
    // kein Direktkontakt
  },
  {
    initials: 'MG',
    gradientFrom: 'from-indigo-600',
    gradientTo: 'to-indigo-800',
    name: 'Mike Graute',
    role: '📋 Facility Management',
    email: 'graute@westfalia-osterwick.de',
  },
];
