import { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ServiceCard';
import Counter from '@/components/ui/Counter';
import TestimonialSlider from '@/components/TestimonialSlider';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    'Cabinet de Gestion et Conseil : expertise comptable, conseil juridique, fiscal et financier pour les entreprises au Maroc.',
  openGraph: {
    title: 'Accueil | Cabinet de Gestion et Conseil',
    description:
      'Cabinet de Gestion et Conseil : expertise comptable, conseil juridique, fiscal et financier pour les entreprises au Maroc.',
    type: 'website',
    url: 'https://www.cabinetgestionconseil.ma',
    images: ['/images/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://www.cabinetgestionconseil.ma',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section - Full-width with gradient overlay */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-dark overflow-hidden">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/80 to-dark/70"
          aria-hidden="true"
        />
        {/* Subtle gold accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gold"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-container mx-auto px-4 md:px-container-padding text-center">
          <ScrollReveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Votre partenaire de confiance
              <br />
              en <span className="text-gold italic">gestion</span> et{' '}
              <span className="text-gold italic">conseil</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Accompagnement stratégique et expertise pluridisciplinaire pour la
              réussite de votre entreprise au Maroc.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button variant="primary" href="/contact">
              Demander un rendez-vous
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview Section */}
      <SectionWrapper>
        <ScrollReveal>
          <SectionTitle
            label="Nos Services"
            heading="Des solutions adaptées à vos besoins"
            accentWord="solutions"
            description="Nous offrons un accompagnement complet couvrant tous les aspects de la gestion d'entreprise."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <ServiceCard
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                icon={service.icon}
                href="/services"
                compact
              />
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* About Preview Section */}
      <SectionWrapper className="bg-gray-50">
        <ScrollReveal>
          <SectionTitle
            label="À propos"
            heading="Un cabinet dédié à votre réussite"
            accentWord="réussite"
            centered
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-body-lg text-dark/80 max-w-4xl mx-auto text-center mt-8 mb-12">
            Fort de plus de {company.stats.yearsExperience} années
            d&apos;expérience, le Cabinet de Gestion et Conseil offre un
            accompagnement complet aux entreprises marocaines et
            internationales. Notre équipe pluridisciplinaire réunit des experts
            en comptabilité, fiscalité, droit des affaires, audit et ressources
            humaines.
          </p>
        </ScrollReveal>

        {/* Counter row - company stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
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
              suffix="+"
              label="Années d'expérience"
            />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Counter
              target={company.stats.teamMembers}
              label="Membres d'équipe"
            />
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper>
        <ScrollReveal>
          <SectionTitle
            label="Témoignages"
            heading="Ce que disent nos clients"
            accentWord="clients"
            centered
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-12">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA Section - Full-width dark variant */}
      <CTASection
        heading="Prêt à développer votre entreprise ?"
        description="Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner."
        buttonText="Contactez-nous"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
