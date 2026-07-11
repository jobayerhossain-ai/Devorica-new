export default function Marquee({ items, reverse = false, className = '' }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-wrapper ${className}`} aria-hidden="true">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-brand-lightGray">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange inline-block flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
