import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import Counter from '@/components/ui/Counter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Découvrez la mission, la vision et les valeurs du Cabinet de Gestion et Conseil, votre partenaire de confiance au Maroc.',
  openGraph: {
    title: 'À propos | Cabinet de Gestion et Conseil',
    description:
      'Découvrez la mission, la vision et les valeurs du Cabinet de Gestion et Conseil, votre partenaire de confiance au Maroc.',
    type: 'website',
    url: 'https://cabinetgestionconseil.ma/about',
    images: ['/images/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://cabinetgestionconseil.ma/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="À propos"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'À propos' },
        ]}
      />

      {/* Mission Section */}
      <SectionWrapper id="mission">
        <ScrollReveal>
          <SectionTitle
            label="Notre Mission"
            heading="Ce qui nous anime"
            accentWord="anime"
          />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg text-dark/70 leading-relaxed max-w-3xl mt-6">
            {company.mission}
          </p>
        </ScrollReveal>
      </SectionWrapper>

      {/* Vision Section */}
      <SectionWrapper id="vision">
        <ScrollReveal>
          <SectionTitle
            label="Notre Vision"
            heading="Là où nous allons"
            accentWord="allons"
          />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg text-dark/70 leading-relaxed max-w-3xl mt-6">
            {company.vision}
          </p>
        </ScrollReveal>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper id="valeurs">
        <ScrollReveal>
          <SectionTitle
            label="Nos Valeurs"
            heading="Les principes qui nous guident"
            accentWord="guident"
            centered
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {company.values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 100}>
              <div className="bg-gray-50 rounded-lg p-6 h-full hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gold-text mb-3 font-serif">
                  {value.title}
                </h3>
                <p className="text-dark/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Statistics Section */}
      <SectionWrapper className="bg-gray-50">
        <ScrollReveal>
          <SectionTitle
            label="Nos Chiffres"
            heading="Notre expérience en chiffres"
            accentWord="chiffres"
            centered
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          <ScrollReveal delay={0}>
            <Counter
              target={company.stats.clientsServed}
              suffix="+"
              label="Clients accompagnés"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Counter
              target={company.stats.projectsCompleted}
              suffix="+"
              label="Projets réalisés"
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Counter
              target={company.stats.yearsExperience}
              label="Années d'expérience"
            />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Counter
              target={company.stats.teamMembers}
              label="Membres de l'équipe"
            />
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  );
}
