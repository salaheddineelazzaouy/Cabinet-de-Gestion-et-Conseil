import { company } from '@/data/company';

interface TopBarProps {
  className?: string;
}

export default function TopBar({ className }: TopBarProps) {
  const { contact } = company;

  return (
    <div
      className={`hidden md:block bg-dark text-white text-sm ${className ?? ''}`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-container-padding py-2">
        {/* Contact info - left side */}
        <div className="flex items-center gap-6">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Envoyer un email à ${contact.email}`}
              className="flex items-center gap-2 hover:text-gold transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{contact.email}</span>
            </a>
          )}
          {contact.phone && (
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              aria-label={`Appeler le ${contact.phone}`}
              className="flex items-center gap-2 hover:text-gold transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{contact.phone}</span>
            </a>
          )}
          {contact.address && (
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              <span>
                {contact.address}, {contact.city}
              </span>
            </span>
          )}
        </div>

        {/* Social links - right side */}
        {contact.socialLinks && (
          <div className="flex items-center gap-1">
            {contact.socialLinks.facebook && (
              <a
                href={contact.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (ouvre dans un nouvel onglet)"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:text-gold transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            )}
            {contact.socialLinks.linkedin && (
              <a
                href={contact.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (ouvre dans un nouvel onglet)"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:text-gold transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            )}
            {contact.socialLinks.twitter && (
              <a
                href={contact.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter (ouvre dans un nouvel onglet)"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:text-gold transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
