export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'accounting',
    title: 'Comptabilité',
    description:
      'Nous assurons la gestion comptable complète de votre entreprise, de la saisie des écritures à l\'établissement des états financiers. Notre équipe veille à la conformité de vos comptes avec les normes en vigueur et vous accompagne dans toutes vos obligations déclaratives.',
    benefits: [
      'Tenue de comptabilité générale et analytique',
      'Établissement des déclarations fiscales',
      'Élaboration des bilans et comptes de résultat',
      'Suivi de trésorerie et tableaux de bord',
      'Conseil en optimisation fiscale',
    ],
    icon: 'calculator',
  },
  {
    id: 'advisory',
    title: 'Conseil Juridique, Fiscal, Financier et RH',
    description:
      'Notre cabinet vous offre un accompagnement pluridisciplinaire couvrant les dimensions juridique, fiscale, financière et ressources humaines. Nous vous aidons à prendre les meilleures décisions stratégiques en vous apportant une expertise pointue adaptée à votre secteur d\'activité.',
    benefits: [
      'Conseil juridique et rédaction d\'actes',
      'Optimisation et planification fiscale',
      'Analyse financière et business plan',
      'Gestion des ressources humaines et paie',
      'Accompagnement dans les opérations exceptionnelles',
    ],
    icon: 'scale',
  },
  {
    id: 'audit',
    title: 'Audit, Contrôle et Gestion',
    description:
      'Nous réalisons des missions d\'audit légal et contractuel pour évaluer la fiabilité de vos informations financières et l\'efficacité de vos processus internes. Nos interventions vous permettent d\'identifier les axes d\'amélioration et de renforcer votre gouvernance.',
    benefits: [
      'Audit légal et commissariat aux comptes',
      'Audit contractuel et due diligence',
      'Contrôle interne et évaluation des risques',
      'Mise en place de tableaux de bord de gestion',
    ],
    icon: 'clipboard-check',
  },
  {
    id: 'company-creation',
    title: 'Création et Domiciliation d\'Entreprises',
    description:
      'Nous vous accompagnons dans toutes les étapes de la création de votre entreprise, du choix de la forme juridique à l\'immatriculation définitive. Notre service de domiciliation vous offre une adresse professionnelle prestigieuse pour le siège social de votre société.',
    benefits: [
      'Choix de la forme juridique adaptée',
      'Rédaction des statuts et formalités légales',
      'Immatriculation au registre du commerce',
      'Domiciliation commerciale et siège social',
      'Accompagnement post-création',
    ],
    icon: 'building',
  },
  {
    id: 'training',
    title: 'Formation',
    description:
      'Nous proposons des programmes de formation professionnelle adaptés aux besoins de votre entreprise et de vos collaborateurs. Nos formations couvrent les domaines de la comptabilité, de la fiscalité, du droit des affaires et du management pour renforcer les compétences de vos équipes.',
    benefits: [
      'Formations en comptabilité et fiscalité',
      'Formations en droit des affaires',
      'Formations en management et leadership',
      'Programmes sur mesure adaptés à votre entreprise',
      'Certification et attestations de formation',
    ],
    icon: 'graduation-cap',
  },
  {
    id: 'organization',
    title: 'Organisation et Procédures',
    description:
      'Nous vous aidons à structurer votre organisation interne et à formaliser vos procédures opérationnelles pour gagner en efficacité. Notre approche méthodique permet d\'optimiser vos flux de travail et d\'assurer une meilleure coordination entre vos équipes.',
    benefits: [
      'Diagnostic organisationnel',
      'Élaboration de manuels de procédures',
      'Optimisation des processus métier',
      'Mise en place de systèmes de contrôle interne',
      'Accompagnement au changement organisationnel',
    ],
    icon: 'settings',
  },
];
