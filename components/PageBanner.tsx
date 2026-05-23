import Link from 'next/link';

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  className?: string;
}

export default function PageBanner({ title, breadcrumbs, className }: PageBannerProps) {
  return (
    <section
      aria-label={`Bannière de page : ${title}`}
      className={`relative w-full min-h-[150px] md:min-h-[200px] bg-gradient-to-b from-dark to-dark-light flex items-center justify-center ${className ?? ''}`}
    >
      <div className="text-center px-4">
        <h1 className="font-serif text-heading-lg md:text-heading-xl text-white">
          {title}
        </h1>
        <nav aria-label="Fil d'Ariane" className="mt-3">
          <ol className="flex items-center justify-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-white/50" aria-hidden="true">
                      /
                    </span>
                  )}
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="text-gold hover:text-gold-light transition-colors duration-250 min-h-[44px] inline-flex items-center"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-white/70' : 'text-gold'}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gold" aria-hidden="true" />
    </section>
  );
}
