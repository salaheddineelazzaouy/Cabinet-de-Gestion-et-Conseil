interface SectionTitleProps {
  label: string;
  heading: string;
  accentWord?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  label,
  heading,
  accentWord,
  description,
  centered = false,
  className,
}: SectionTitleProps) {
  const renderHeading = () => {
    if (!accentWord || !heading.includes(accentWord)) {
      return heading;
    }

    const index = heading.indexOf(accentWord);
    const before = heading.slice(0, index);
    const after = heading.slice(index + accentWord.length);

    return (
      <>
        {before}
        <span className="text-gold italic font-serif">{accentWord}</span>
        {after}
      </>
    );
  };

  return (
    <div className={`${centered ? 'text-center' : ''} ${className ?? ''}`}>
      <span className="text-sm uppercase tracking-widest text-gold-text font-medium">
        {label}
      </span>
      <h2 className="font-serif text-heading-lg font-bold text-dark mt-2">
        {renderHeading()}
      </h2>
      <div
        className={`w-10 h-[3px] bg-dark mt-4 ${centered ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      {description && (
        <p className="text-body-lg text-dark/70 max-w-3xl mt-4">
          {description}
        </p>
      )}
    </div>
  );
}
