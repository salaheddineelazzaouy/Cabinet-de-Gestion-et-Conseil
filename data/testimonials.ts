export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Le Cabinet de Gestion et Conseil nous accompagne depuis plus de 5 ans. Leur expertise comptable et fiscale nous a permis d\'optimiser notre gestion et de nous concentrer sur notre cœur de métier en toute sérénité.',
    name: 'Youssef El Amrani',
    role: 'Directeur Général',
    company: 'Groupe Amrani Import-Export',
  },
  {
    id: 'testimonial-2',
    quote:
      'Grâce à leur accompagnement lors de la création de notre entreprise, nous avons pu démarrer notre activité dans les meilleures conditions. Un service professionnel et une équipe toujours disponible.',
    name: 'Fatima Zahra Bennani',
    role: 'Fondatrice',
    company: 'FZB Consulting',
  },
  {
    id: 'testimonial-3',
    quote:
      'Leur rigueur et leur réactivité font la différence. Les conseils juridiques et fiscaux que nous recevons sont toujours pertinents et adaptés à notre secteur d\'activité.',
    name: 'Karim Tazi',
    role: 'Gérant',
    company: 'Tazi & Fils SARL',
  },
];
