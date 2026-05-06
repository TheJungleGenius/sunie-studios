export type PackageItem = {
  name: string;
  slug: string;
  tagline: string;
  inclusions: string[];
};

type PackageGridProps = {
  eyebrow: string;
  heading: string;
  packages: PackageItem[];
};

export function PackageGrid({ eyebrow, heading, packages }: PackageGridProps) {
  const columnsClass =
    packages.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section className="my-24 md:my-32">
      <div className="mb-12 md:mb-16 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase mb-5 text-[#2C2A29]/50">
          ({eyebrow})
        </p>
        <h2 className="font-serif text-4xl md:text-6xl lowercase italic font-light tracking-wide">
          {heading}
        </h2>
      </div>

      <div className={`grid grid-cols-1 ${columnsClass} gap-6 md:gap-8`}>
        {packages.map((pkg, index) => (
          <article
            key={pkg.slug}
            className="group relative flex flex-col bg-[#F4F1ED] border border-[#2C2A29]/15 p-8 md:p-10 transition-colors duration-500 hover:bg-[#E8E5E1]"
          >
            <div className="flex items-start justify-between mb-8">
              <h3 className="font-serif text-3xl md:text-4xl italic font-light lowercase">
                {pkg.name}
              </h3>
              <span className="text-[9px] tracking-widest uppercase text-[#2C2A29]/40 mt-2">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="font-serif text-lg md:text-xl italic font-light text-[#2C2A29]/75 leading-relaxed mb-10">
              {pkg.tagline}
            </p>

            <p className="text-[10px] tracking-[0.3em] uppercase text-[#2C2A29]/50 mb-4">
              (Includes)
            </p>
            <ul className="space-y-3 mb-12 flex-1">
              {pkg.inclusions.map((line) => (
                <li
                  key={line}
                  className="text-sm leading-relaxed text-[#2C2A29]/80 pl-5 relative before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-[#2C2A29]/40"
                >
                  {line}
                </li>
              ))}
            </ul>

            <a
              href={`/contact?package=${pkg.slug}`}
              className="self-start inline-block border border-[#2C2A29] px-7 py-3 text-[11px] tracking-widest uppercase hover:bg-[#2C2A29] hover:text-[#F4F1ED] transition-colors duration-300"
            >
              Enquire
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
