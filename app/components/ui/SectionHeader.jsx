/**
 * SectionHeader — h2 title with an optional right-aligned link.
 * Used in search page "Trending This Week" and similar sections.
 */
export default function SectionHeader({ title, linkLabel, linkHref = '#' }) {
  return (
    <div className="flex items-center justify-between mb-4 md:mb-6">
      <h2 className="text-lg md:text-2xl font-bold text-gray-900">{title}</h2>
      {linkLabel && (
        <a
          href={linkHref}
          className="text-primary text-[10px] md:text-sm font-bold tracking-wider hover:underline uppercase"
        >
          {linkLabel}
        </a>
      )}
    </div>
  );
}
