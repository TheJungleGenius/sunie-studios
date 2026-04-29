import { useEffect, useRef, useState } from "react";

export type CollageItem = {
  src: string;
  title: string;
  type: "image" | "video";
};

type CollageGalleryProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  items: CollageItem[];
};

const placements = [
  "md:col-span-5 md:col-start-1 aspect-[3/4]",
  "md:col-span-4 md:col-start-7 md:mt-16 aspect-square",
  "md:col-span-3 md:col-start-11 md:mt-32 aspect-[3/4]",
  "md:col-span-6 md:col-start-2 md:mt-12 aspect-[4/3]",
  "md:col-span-4 md:col-start-9 aspect-[3/4]",
  "md:col-span-5 md:col-start-1 md:mt-16 aspect-[4/5]",
  "md:col-span-4 md:col-start-7 md:mt-24 aspect-square",
  "md:col-span-7 md:col-start-3 md:mt-12 aspect-[16/10]",
  "md:col-span-4 md:col-start-1 md:mt-20 aspect-[3/4]",
  "md:col-span-5 md:col-start-6 md:mt-12 aspect-[4/5]",
  "md:col-span-3 md:col-start-2 md:mt-16 aspect-square",
  "md:col-span-5 md:col-start-7 md:mt-24 aspect-[4/3]",
];

export function CollageGallery({
  isOpen,
  onClose,
  title,
  subtitle,
  items,
}: CollageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else onClose();
        return;
      }
      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") setLightboxIndex((i) => ((i ?? 0) + 1) % items.length);
        if (e.key === "ArrowLeft") setLightboxIndex((i) => ((i ?? 0) - 1 + items.length) % items.length);
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, lightboxIndex, items.length]);

  if (!isOpen) return null;

  const lightboxItem = lightboxIndex !== null ? items[lightboxIndex] : null;

  const goPrev = () =>
    setLightboxIndex((i) => ((i ?? 0) - 1 + items.length) % items.length);
  const goNext = () =>
    setLightboxIndex((i) => ((i ?? 0) + 1) % items.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      dx < 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="fixed inset-0 z-[90] bg-[#F4F1ED] text-[#2C2A29] overflow-y-auto animate-[collageFade_500ms_ease-out_both]">

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-[collageFade_200ms_ease-out_both]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {lightboxItem.type === "video" ? (
            <video
              key={lightboxIndex}
              src={lightboxItem.src}
              autoPlay
              loop
              playsInline
              controls
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              key={lightboxIndex}
              src={lightboxItem.src}
              alt={lightboxItem.title}
              className="w-full h-full object-contain"
            />
          )}

          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-[10px] tracking-[0.3em] uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
          >
            Close
          </button>

          {/* Prev */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white border border-white/20 rounded-full backdrop-blur-sm transition-colors text-lg"
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white border border-white/20 rounded-full backdrop-blur-sm transition-colors text-lg"
          >
            →
          </button>

          {/* Caption */}
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-1 pointer-events-none px-16">
            <span className="font-serif italic text-white/80 text-base text-center">
              {lightboxItem.title}
            </span>
            <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">
              {(lightboxIndex ?? 0) + 1} / {items.length}
            </span>
          </div>
        </div>
      )}

      {/* Gallery header */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-[#F4F1ED]/85 border-b border-[#2C2A29]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">
              (Full Collection)
            </p>
            <h2 className="font-serif text-2xl md:text-3xl italic font-light lowercase mt-1">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[10px] tracking-[0.3em] uppercase border border-[#2C2A29]/30 px-5 py-2 rounded-full hover:bg-[#2C2A29] hover:text-[#F4F1ED] transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      <main className="px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-24">
        {subtitle && (
          <p className="font-serif text-2xl md:text-3xl italic font-light leading-relaxed text-[#2C2A29]/70 max-w-2xl mb-16 md:mb-24">
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {items.map((item, index) => {
            const placement =
              placements[index % placements.length] ??
              "md:col-span-4 aspect-[4/5]";
            return (
              <figure
                key={`${item.title}-${index}`}
                className={`${placement} group relative overflow-hidden bg-[#E8E5E1] cursor-pointer`}
                onClick={() => setLightboxIndex(index)}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white border border-white/60 px-4 py-2 rounded-full backdrop-blur-sm">
                    View
                  </span>
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/40 to-transparent">
                  <span className="font-serif italic text-sm md:text-base">
                    {item.title}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-24 md:mt-32 text-center border-t border-[#2C2A29]/10 pt-16">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">
            (End of Collection)
          </p>
          <button
            onClick={onClose}
            className="font-serif text-3xl md:text-4xl italic lowercase font-light hover:opacity-60 transition-opacity"
          >
            return
          </button>
        </div>
      </main>

      <style>{`
        @keyframes collageFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
