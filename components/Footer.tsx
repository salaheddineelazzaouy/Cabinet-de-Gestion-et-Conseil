import Link from 'next/link';
import { footerColumns } from '@/data/navigation';
import { company } from '@/data/company';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Pied de page"
      className="bg-dark text-white py-16"
    >
      <div className="max-w-container mx-auto px-container-padding">
        {/* Multi-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company name + description */}
          <div>
            <p className="font-serif text-xl font-bold text-gold mb-4">
              {company.name}
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Accompagner les entreprises marocaines dans leur croissance en leur offrant des services de conseil et de gestion sur mesure.
            </p>
          </div>

          {/* Column 2: Service links */}
          {footerColumns[0] && (
            <div>
              <h3 className="text-gold font-semibold text-base mb-4">
                {footerColumns[0].title}
              </h3>
              <nav aria-label={`Liens ${footerColumns[0].title}`}>
                <ul className="space-y-1">
                  {footerColumns[0].links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-gold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light rounded-sm min-h-[44px] inline-flex items-center"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Column 3: Cabinet links */}
          {footerColumns[1] && (
            <div>
              <h3 className="text-gold font-semibold text-base mb-4">
                {footerColumns[1].title}
              </h3>
              <nav aria-label={`Liens ${footerColumns[1].title}`}>
                <ul className="space-y-1">
                  {footerColumns[1].links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-gold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light rounded-sm min-h-[44px] inline-flex items-center"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Column 4: Contact info */}
          <div>
            <h3 className="text-gold font-semibold text-base mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-gold mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{company.contact.address}, {company.contact.city}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-gold mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                  aria-label={`Appeler le ${company.contact.phone}`}
                  className="hover:text-gold transition-colors duration-200 min-h-[44px] inline-flex items-center"
                >
                  {company.contact.phone}
                </a>
              </li>
              {company.contact.phone2 && (
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-gold mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${company.contact.phone2.replace(/\s/g, '')}`}
                    aria-label={`Appeler le ${company.contact.phone2}`}
                    className="hover:text-gold transition-colors duration-200 min-h-[44px] inline-flex items-center"
                  >
                    {company.contact.phone2}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-gold mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${company.contact.email}`}
                  aria-label={`Envoyer un email à ${company.contact.email}`}
                  className="hover:text-gold transition-colors duration-200 min-h-[44px] inline-flex items-center"
                >
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {year} {company.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
