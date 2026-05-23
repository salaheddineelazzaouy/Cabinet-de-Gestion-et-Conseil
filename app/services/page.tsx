import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Découvrez nos services : comptabilité, conseil juridique et fiscal, audit, création d\'entreprises, formation et organisation.',
  openGraph: {
    title: 'Services | Cabinet de Gestion et Conseil',
    description:
      'Découvrez nos services : comptabilité, conseil juridique et fiscal, audit, création d\'entreprises, formation et organisation.',
    type: 'website',
    url: 'https://example.com/services',
    images: ['/images/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://example.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Nos Services"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Nos Services' },
        ]}
      />

      <SectionWrapper id="services">
        <ScrollReveal>
          <SectionTitle
            label="Ce que nous offrons"
            heading="Nos Domaines d'Expertise"
            accentWord="Expertise"
            description="Le Cabinet de Gestion et Conseil vous accompagne avec une gamme complète de prestations adaptées aux besoins des entreprises marocaines."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <ServiceCard
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                icon={service.icon}
              />
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
