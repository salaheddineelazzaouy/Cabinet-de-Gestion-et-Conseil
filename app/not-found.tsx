import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center text-center min-h-[60vh]">
      <p className="text-gold-text font-semibold text-body-lg tracking-wide uppercase mb-4">
        Erreur 404
      </p>
      <h1 className="text-heading-lg md:text-heading-xl text-dark mb-6">
        Page non trouvée
      </h1>
      <p className="text-body-lg text-dark-light max-w-md mb-10">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Button variant="primary" href="/" ariaLabel="Retour à la page d'accueil">
        Retour à l&apos;accueil
      </Button>
    </SectionWrapper>
  );
}
