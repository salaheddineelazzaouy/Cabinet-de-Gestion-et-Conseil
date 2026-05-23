import { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import SectionWrapper from '@/components/ui/SectionWrapper';
import InfoBox from '@/components/ui/InfoBox';
import Button from '@/components/ui/Button';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Contact | Cabinet de Gestion et Conseil',
  description:
    'Contactez Cabinet de Gestion et Conseil à Casablanca. Formulaire de contact, adresse, téléphone et email pour vos besoins en conseil.',
  openGraph: {
    title: 'Contact | Cabinet de Gestion et Conseil',
    description:
      'Contactez Cabinet de Gestion et Conseil à Casablanca. Formulaire de contact, adresse, téléphone et email pour vos besoins en conseil.',
    type: 'website',
    url: 'https://cabinetgc.ma/contact',
    images: ['/images/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://cabinetgc.ma/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-subheading text-dark font-semibold mb-6">
              Envoyez-nous un message
            </h2>
            <form className="space-y-6" noValidate={false}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-body font-semibold text-dark mb-2"
                >
                  Nom <span className="text-gold-text">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  className="w-full border border-gray-300 rounded-button px-4 py-3 text-body text-dark focus-visible:border-gold-dark focus-visible:outline-2 focus-visible:outline-gold-dark focus-visible:outline-offset-0 transition-colors duration-250"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-body font-semibold text-dark mb-2"
                >
                  Email <span className="text-gold-text">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  className="w-full border border-gray-300 rounded-button px-4 py-3 text-body text-dark focus-visible:border-gold-dark focus-visible:outline-2 focus-visible:outline-gold-dark focus-visible:outline-offset-0 transition-colors duration-250"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-body font-semibold text-dark mb-2"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border border-gray-300 rounded-button px-4 py-3 text-body text-dark focus-visible:border-gold-dark focus-visible:outline-2 focus-visible:outline-gold-dark focus-visible:outline-offset-0 transition-colors duration-250"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-body font-semibold text-dark mb-2"
                >
                  Message <span className="text-gold-text">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  rows={5}
                  className="w-full border border-gray-300 rounded-button px-4 py-3 text-body text-dark focus-visible:border-gold-dark focus-visible:outline-2 focus-visible:outline-gold-dark focus-visible:outline-offset-0 transition-colors duration-250 resize-vertical"
                  placeholder="Votre message"
                />
              </div>

              <Button variant="primary" type="submit">
                Envoyer
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-subheading text-dark font-semibold mb-6">
              Nos coordonnées
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoBox
                icon="location"
                title="Adresse"
                content={[company.contact.address, company.contact.city]}
              />
              <InfoBox
                icon="email"
                title="Email"
                content={company.contact.email}
                href={`mailto:${company.contact.email}`}
              />
              <InfoBox
                icon="phone"
                title="Téléphone"
                content={company.contact.phone}
                href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
              />
              <InfoBox
                icon="clock"
                title="Horaires"
                content="Lun - Ven: 9h00 - 18h00"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
