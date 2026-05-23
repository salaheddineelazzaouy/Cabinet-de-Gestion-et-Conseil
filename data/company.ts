export interface CompanyValue {
  title: string;
  description: string;
}

export interface CompanyStats {
  clientsServed: number;
  projectsCompleted: number;
  yearsExperience: number;
  teamMembers: number;
}

export interface CompanyContact {
  email: string;
  phone: string;
  address: string;
  city: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface CompanyData {
  name: string;
  mission: string;
  vision: string;
  values: CompanyValue[];
  stats: CompanyStats;
  contact: CompanyContact;
}

export const company: CompanyData = {
  name: 'Cabinet de Gestion et Conseil',
  mission:
    'Accompagner les entreprises marocaines dans leur croissance en leur offrant des services de conseil et de gestion sur mesure, alliant expertise technique et proximité relationnelle. Nous nous engageons à fournir des solutions fiables et conformes aux exigences réglementaires pour garantir la pérennité de nos clients.',
  vision:
    'Devenir le cabinet de référence au Maroc en matière de conseil comptable, juridique, fiscal, financier et RH, reconnu pour son excellence opérationnelle et son engagement envers la réussite de chaque client.',
  values: [
    {
      title: 'Confiance',
      description:
        'Nous bâtissons des relations durables fondées sur la transparence et l\'intégrité. Chaque client bénéficie d\'un accompagnement personnalisé dans un cadre de confidentialité absolue.',
    },
    {
      title: 'Précision',
      description:
        'Nous accordons une attention rigoureuse à chaque détail pour garantir l\'exactitude de nos prestations. Notre méthodologie structurée assure des résultats fiables et vérifiables.',
    },
    {
      title: 'Conformité',
      description:
        'Nous veillons au strict respect des normes légales et réglementaires en vigueur au Maroc. Notre veille juridique permanente protège nos clients contre tout risque de non-conformité.',
    },
    {
      title: 'Excellence',
      description:
        'Nous visons l\'excellence dans chaque mission en mobilisant les compétences les plus pointues du secteur. Notre engagement qualité se traduit par une amélioration continue de nos processus et de nos services.',
    },
  ],
  stats: {
    clientsServed: 500,
    projectsCompleted: 1200,
    yearsExperience: 15,
    teamMembers: 25,
  },
  contact: {
    email: 'contact@cabinetgc.ma',
    phone: '+212 522-000000',
    address: '123 Boulevard Mohammed V',
    city: 'Casablanca',
    socialLinks: {
      facebook: 'https://facebook.com/cabinetgc',
      linkedin: 'https://linkedin.com/company/cabinetgc',
    },
  },
};
