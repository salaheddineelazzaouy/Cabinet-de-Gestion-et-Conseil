export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Comptabilité', href: '/services#accounting' },
      { label: 'Conseil', href: '/services#advisory' },
      { label: 'Audit', href: '/services#audit' },
      { label: 'Création d\'entreprises', href: '/services#company-creation' },
    ],
  },
  {
    title: 'Cabinet',
    links: [
      { label: 'À propos', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
