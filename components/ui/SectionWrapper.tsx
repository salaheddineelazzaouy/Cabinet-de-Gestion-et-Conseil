interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`max-w-container mx-auto py-section px-4 md:px-container-padding ${className ?? ''}`}
    >
      {children}
    </section>
  );
}
