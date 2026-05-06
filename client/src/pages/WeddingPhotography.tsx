import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageGrid, type PackageItem } from "@/components/PackageGrid";
import { CollageGallery, type CollageItem } from "@/components/CollageGallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import aiBen1 from "@/assets/images/ai-ben.jpg";
import aiBen2 from "@/assets/images/ai-ben-2.jpg";
import benOlivia1 from "@/assets/images/ben-olivia.jpg";
import benOlivia2 from "@/assets/images/ben-olivia-2.jpg";
import chanyaNethmin1 from "@/assets/images/chanya-nethmin.jpg";
import chanyaNethmin2 from "@/assets/images/chanya-nethmin-2.jpg";
import chanyaNethmin3 from "@/assets/images/chanya-nethmin-3.jpg";
import nicoleMariano from "@/assets/images/nicole-mariano.jpg";
import sarahLuke1 from "@/assets/images/sarah-luke-1.jpg";
import sarahLuke2 from "@/assets/images/sarah-luke-2.jpg";
import sarahLuke3 from "@/assets/images/sarah-luke-3.jpg";

const gallery = [
  { src: sarahLuke1, title: "Sarah & Luke - First Look", aspect: "aspect-[3/4]" },
  { src: aiBen1, title: "Ai & Ben - Moment", aspect: "aspect-square" },
  { src: benOlivia1, title: "Ben & Olivia - Reception", aspect: "aspect-square" },
  { src: chanyaNethmin1, title: "Chanya & Nethmin - Vows", aspect: "aspect-[3/4]" },
  { src: sarahLuke2, title: "Sarah & Luke - Details", aspect: "aspect-[4/5]" },
  { src: nicoleMariano, title: "Nicole & Mariano", aspect: "aspect-[4/3]" },
];

const detailShots = [
  { src: chanyaNethmin2, title: "Chanya & Nethmin - Celebration" },
  { src: aiBen2, title: "Ai & Ben - Detail" },
  { src: benOlivia2, title: "Ben & Olivia - Moment" },
  { src: sarahLuke3, title: "Sarah & Luke - Candid" },
  { src: chanyaNethmin3, title: "Chanya & Nethmin - After" },
];

const photographyPackages: PackageItem[] = [
  {
    name: "Prologue",
    slug: "prologue",
    tagline: "Engagement, elopement — the quiet beginning of a story.",
    inclusions: [
      "2-hour shoot",
      "Location of your choice",
      "Edited gallery (~50 images)",
      "Personal print rights",
    ],
  },
  {
    name: "Intimate",
    slug: "intimate",
    tagline: "A smaller gathering, photographed with the same care as the largest day.",
    inclusions: [
      "Half-day coverage",
      "Getting-ready through ceremony",
      "Edited gallery (~250 images)",
      "Online gallery delivery",
    ],
  },
  {
    name: "Wedding",
    slug: "wedding",
    tagline: "The full day, beginning to last dance.",
    inclusions: [
      "Full-day coverage",
      "Second shooter option",
      "Edited gallery (~600 images)",
      "Heirloom album option",
      "Online gallery + USB",
    ],
  },
];

const collageItems: CollageItem[] = [
  { src: sarahLuke1, title: "Sarah & Luke - First Look", type: "image" },
  { src: aiBen1, title: "Ai & Ben - Moment", type: "image" },
  { src: benOlivia1, title: "Ben & Olivia - Reception", type: "image" },
  { src: chanyaNethmin1, title: "Chanya & Nethmin - Vows", type: "image" },
  { src: sarahLuke2, title: "Sarah & Luke - Details", type: "image" },
  { src: nicoleMariano, title: "Nicole & Mariano", type: "image" },
  { src: aiBen2, title: "Ai & Ben - Detail", type: "image" },
  { src: chanyaNethmin2, title: "Chanya & Nethmin - Celebration", type: "image" },
  { src: benOlivia2, title: "Ben & Olivia - Moment", type: "image" },
  { src: chanyaNethmin3, title: "Chanya & Nethmin - After", type: "image" },
  { src: sarahLuke3, title: "Sarah & Luke - Candid", type: "image" },
];

export default function WeddingPhotography() {
  const [collageOpen, setCollageOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F1ED] text-[#2C2A29]">
      <Navigation />
      <CollageGallery
        isOpen={collageOpen}
        onClose={() => setCollageOpen(false)}
        title="wedding photography"
        subtitle="The full collection — quiet observations, unrepeated moments, and the small details that hold a day together."
        items={collageItems}
      />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={sarahLuke1}
          alt="Wedding Photography"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-5 opacity-80">
            (Stillness, Remembered)
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lowercase italic font-light tracking-wide leading-tight">
            wedding photography
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase max-w-md opacity-80 leading-relaxed mt-6">
            Timeless frames of the quiet details and unrepeatable moments of your day.
          </p>
          <button
            onClick={() => setCollageOpen(true)}
            className="mt-10 text-[10px] tracking-[0.3em] uppercase text-white border border-white/50 px-6 py-3 rounded-full hover:bg-white hover:text-[#2C2A29] transition-colors backdrop-blur-sm"
          >
            View Full Gallery
          </button>
        </div>
      </section>

      <main className="px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32">
        {/* Intro — style + emotion */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-24 md:mb-32">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C2A29]/50">
              (Approach)
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8">
            <p className="font-serif text-2xl md:text-4xl italic font-light leading-relaxed">
              A quiet, observational eye — capturing the texture of the day as it unfolds. Nothing posed, nothing performed.
            </p>
            <p className="font-serif text-xl md:text-2xl italic font-light leading-relaxed text-[#2C2A29]/70">
              The work leans soft, editorial, and emotionally honest. I photograph the held breath before the kiss, the laugh that breaks a quiet room, the way light falls on a sleeve. Authentic emotion is the only thing worth preserving — and these images are made to keep, the kind your children will press their fingers against decades from now.
            </p>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-24">
          {gallery.map((item, index) => {
            const placement = [
              "md:col-span-5 md:col-start-1",
              "md:col-span-4 md:col-start-8 md:mt-24",
              "md:col-span-6 md:col-start-2 md:mt-12",
              "md:col-span-5 md:col-start-8",
              "md:col-span-7 md:col-start-1 md:mt-20",
              "md:col-span-4 md:col-start-9 md:mt-12",
            ][index];

            return (
              <div key={item.title} className={placement}>
                <div
                  onClick={() => setCollageOpen(true)}
                  className={`relative ${item.aspect} overflow-hidden bg-[#E8E5E1] group cursor-pointer`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white border border-white/60 px-5 py-2 rounded-full backdrop-blur-sm">
                      View Collection
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h4 className="font-serif text-xl italic">{item.title}</h4>
                  <span className="text-[9px] tracking-widest uppercase text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            );
          })}
        </section>

        {/* Pull Quote */}
        <section className="my-24 md:my-32 text-center max-w-4xl mx-auto">
          <p className="font-serif text-3xl md:text-5xl italic font-light leading-relaxed text-[#2C2A29]/80">
            "She captured things we didn't even notice were happening — the photographs feel like memories, not poses."
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase mt-8 text-[#2C2A29]/50">
            (A Recent Bride)
          </p>
        </section>

        {/* Detail Carousel */}
        <section className="my-24">
          <div className="flex justify-between items-end mb-8 px-2 md:px-0">
            <h3 className="font-serif text-4xl md:text-5xl italic">Selected Details</h3>
            <span className="text-[9px] tracking-widest uppercase text-muted-foreground hidden md:block">
              Swipe to view
            </span>
          </div>

          <Carousel
            opts={{ align: "start", loop: true, dragFree: true }}
            plugins={[WheelGesturesPlugin()]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {detailShots.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E5E1] mb-4">
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      />
                    </div>
                    <div className="flex justify-between items-center px-1">
                      <h4 className="font-serif text-lg italic">{item.title}</h4>
                      <span className="text-[9px] tracking-widest uppercase text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block text-[#2C2A29]">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>

        {/* Packages */}
        <PackageGrid
          eyebrow="Packages"
          heading="ways to work together"
          packages={photographyPackages}
        />

        {/* Closing CTA */}
        <section className="mt-32 md:mt-48 border-t border-[#2C2A29]/10 pt-20 md:pt-28 text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase mb-6 text-[#2C2A29]/50">
            (Enquire)
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lowercase italic font-light tracking-wide mb-10">
            begin your story
          </h2>
          <a
            href="/contact"
            className="inline-block border border-[#2C2A29] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#2C2A29] hover:text-[#F4F1ED] transition-colors duration-300"
          >
            Enquire Now
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
