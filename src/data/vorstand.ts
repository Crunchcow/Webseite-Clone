export interface Person {
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

export const vorstand: Person[] = [
  {
    initials: 'DK',
    gradientFrom: 'from-westfalia-red',
    gradientTo: 'to-red-700',
    name: 'Daniel Kramer',
    role: '1. Vorsitzender',
    email: 'd.kramer@westfalia-osterwick.de',
  },
  {
    initials: 'PF',
    gradientFrom: 'from-gray-700',
    gradientTo: 'to-slate-900',
    name: 'Peter Fedders',
    role: 'Geschäftsführer',
    email: 'fedders@westfalia-osterwick.de',
  },
  {
    initials: 'MS',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-rose-600',
    name: 'Marie Schräder',
    role: '2. Vorsitzende',
    email: 'schraeder@westfalia-osterwick.de',
  },
  {
    initials: 'IR',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-indigo-700',
    name: 'Ingo Röschenkemper',
    role: '2. Vorsitzender',
    email: 'roeschenkemper@westfalia-osterwick.de',
  },
  {
    initials: 'EN',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-green-700',
    name: 'Eike Nonhoff',
    role: 'Kassierer',
    email: 'nonhoff@westfalia-osterwick.de',
  },
  {
    initials: 'KL',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-amber-600',
    name: 'Kai Lemke',
    role: 'Schriftführer',
    email: 'lemke@westfalia-osterwick.de',
    phone: '0151 15717088',
  },
  {
    initials: 'DW',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-600',
    name: 'Dieter Wilger',
    role: 'Geschäftsführer ZfFG',
    email: 'wilger@westfalia-osterwick.de',
  },
  {
    initials: 'AH',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-600',
    name: 'Andrea Hagen',
    role: 'Beisitzerin',
    email: 'hagen@westfalia-osterwick.de',
  },
  {
    initials: 'MB',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-emerald-600',
    name: 'Mette Büning',
    role: 'Beisitzerin · Social Media',
    email: 'buening@westfalia-osterwick.de',
  },
  {
    initials: 'CB',
    gradientFrom: 'from-red-600',
    gradientTo: 'to-rose-700',
    name: 'Carlo Börnhorst',
    role: 'Beisitzer · Sponsoring',
    email: 'boernhorst@westfalia-osterwick.de',
  },
  {
    initials: 'DvD',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-purple-700',
    name: 'Dennis van Deenen',
    role: 'Beisitzer · Sponsoring',
    email: 'van-deenen@westfalia-osterwick.de',
  },
];
