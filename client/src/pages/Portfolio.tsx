import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageGrid, type PackageItem } from "@/components/PackageGrid";
import { VideoModal } from "@/components/VideoModal";
import { CollageGallery, type CollageItem } from "@/components/CollageGallery";
import reelVideo from "@/assets/videos/portfolio-reel.mp4";
import creativeLoop from "@/assets/videos/creative-loop.mp4";
import benGroomsmen from "@/assets/videos/Ben and groomsmen .mp4";
import oliviaParents from "@/assets/videos/Olivia and parents .mp4";
import xenaVideo from "@/assets/videos/Xena no text.mp4";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

type LoopingClipProps = {
  src: string;
  className?: string;
};

function LoopingClip({ src, className }: LoopingClipProps) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

type VideoItem = {
  src: string;
  title: string;
};

const contentPackages: PackageItem[] = [
  {
    name: "Short Story",
    slug: "short-story",
    tagline: "A tighter cut — the highlights of the day in motion.",
    inclusions: [
      "Half-day coverage",
      "One teaser reel (≤ 60 seconds)",
      "One highlight reel (≤ 2 minutes)",
      "Social-ready vertical exports",
    ],
  },
  {
    name: "Full Story",
    slug: "full-story",
    tagline: "The day told in full, edited to be returned to in years.",
    inclusions: [
      "Full-day coverage",
      "Multiple short-form reels",
      "A long-form film of the day",
      "Behind-the-scenes b-roll",
      "Vertical + horizontal exports",
    ],
  },
];

const collageItems: CollageItem[] = [
  { src: reelVideo, title: "Portfolio Reel", type: "video" },
  { src: aiBen1, title: "Ai & Ben - Moment", type: "image" },
  { src: xenaVideo, title: "Xena - Cinematic", type: "video" },
  { src: sarahLuke1, title: "Sarah & Luke - First Look", type: "image" },
  { src: benGroomsmen, title: "Ben & Groomsmen", type: "video" },
  { src: benOlivia1, title: "Ben & Olivia - Reception", type: "image" },
  { src: oliviaParents, title: "Olivia & Parents", type: "video" },
  { src: chanyaNethmin1, title: "Chanya & Nethmin - Vows", type: "image" },
  { src: sarahLuke2, title: "Sarah & Luke - Details", type: "image" },
  { src: nicoleMariano, title: "Nicole & Mariano", type: "image" },
  { src: chanyaNethmin2, title: "Chanya & Nethmin - Celebration", type: "image" },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [collageOpen, setCollageOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F1ED] text-[#2C2A29]">
      <Navigation />
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoSrc={selectedVideo?.src || ""}
        title={selectedVideo?.title || ""}
      />
      <CollageGallery
        isOpen={collageOpen}
        onClose={() => setCollageOpen(false)}
        title="wedding content creation"
        subtitle="A living archive of motion — frames lifted from the day's quiet weather, edited to hold the feeling rather than the pose."
        items={collageItems}
      />

      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <header className="mb-16 md:mb-24 flex flex-col items-center text-center gap-4">
          <h1 className="font-serif text-3xl md:text-5xl lowercase italic font-light tracking-wide">
            wedding content creation
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase max-w-sm text-muted-foreground leading-relaxed">
            Motion-first storytelling — aesthetic reels, quiet in-betweens, and cinematic moments in looping form.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* Featured Central Motion Element */}
          <div className="md:col-span-8 md:col-start-3 mb-12">
             <div
               className="relative aspect-[4/5] md:aspect-video overflow-hidden group cursor-pointer"
               onClick={() => setCollageOpen(true)}
             >
                <LoopingClip
                  src={reelVideo}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 text-white mix-blend-difference">
                  <h3 className="font-serif text-3xl italic">featured motion</h3>
                  <p className="text-[10px] tracking-widest uppercase mt-2">aesthetic reels</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white border border-white/60 px-6 py-3 rounded-full backdrop-blur-sm">
                    View Full Collection
                  </span>
                </div>
             </div>
             <button
               onClick={() => setCollageOpen(true)}
               className="mt-4 text-[10px] tracking-[0.3em] uppercase text-[#2C2A29]/60 hover:text-[#2C2A29] transition-colors"
             >
               → explore the archive
             </button>
          </div>

          {/* Grid Item 1 */}
          <div className="md:col-span-5 md:col-start-1">
             <div
               className="relative aspect-[3/4] overflow-hidden bg-[#E8E5E1] group cursor-pointer"
               onClick={() => setSelectedVideo({ src: benGroomsmen, title: "Ben & Groomsmen" })}
             >
                <LoopingClip
                  src={benGroomsmen}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
             </div>
             <div className="mt-4 flex justify-between items-center">
                <h4 className="font-serif text-xl italic">Ben & Groomsmen</h4>
                <span className="text-[9px] tracking-widest uppercase text-muted-foreground">01</span>
             </div>
          </div>

          {/* Grid Item 2 */}
          <div className="md:col-span-5 md:col-start-7 mt-12 md:mt-32">
             <div
               className="relative aspect-square overflow-hidden bg-[#E8E5E1] group cursor-pointer"
               onClick={() => setSelectedVideo({ src: oliviaParents, title: "Olivia & Parents" })}
             >
                <LoopingClip
                  src={oliviaParents}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
             </div>
             <div className="mt-4 flex justify-between items-center">
                <h4 className="font-serif text-xl italic">Olivia & Parents</h4>
                <span className="text-[9px] tracking-widest uppercase text-muted-foreground">02</span>
             </div>
          </div>

          {/* Style + emotion excerpt */}
          <div className="md:col-span-10 md:col-start-2 my-20 md:my-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#2C2A29]/50">
                (On Style)
              </p>
            </div>
            <div className="md:col-span-9">
              <p className="font-serif text-2xl md:text-4xl italic font-light leading-relaxed">
                Unposed, slow-watching, lit by whatever weather the day brings — my motion work leans editorial but is built around feeling. The aim is an authentic archive of emotion: laughter caught mid-breath, the small glances between vows, the weight of a hand held a second longer.
              </p>
              <p className="font-serif text-xl md:text-2xl italic font-light leading-relaxed text-[#2C2A29]/70 mt-6">
                Edited to last — pieces meant to be returned to in ten, twenty, fifty years and still feel exactly like the day did.
              </p>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div className="md:col-span-6 md:col-start-4 mb-24">
             <div
               className="relative aspect-[4/5] overflow-hidden bg-[#E8E5E1] group cursor-pointer"
               onClick={() => setSelectedVideo({ src: creativeLoop, title: "Creative Loop" })}
             >
                <LoopingClip
                  src={creativeLoop}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
             </div>
             <div className="mt-4 flex justify-between items-center">
                <h4 className="font-serif text-xl italic">Creative Loop</h4>
                <span className="text-[9px] tracking-widest uppercase text-muted-foreground">03</span>
             </div>
          </div>

          {/* Motion Carousel Section */}
          <div className="md:col-span-12 my-12">
            <div className="flex justify-between items-end mb-8 px-2 md:px-0">
              <h3 className="font-serif text-4xl italic">Selected Motion</h3>
              <span className="text-[9px] tracking-widest uppercase text-muted-foreground hidden md:block">Swipe to view</span>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              plugins={[WheelGesturesPlugin()]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { src: reelVideo, title: "Portfolio Reel" },
                  { src: xenaVideo, title: "Xena - Cinematic" },
                  { src: benGroomsmen, title: "Ben & Groomsmen" },
                  { src: oliviaParents, title: "Olivia & Parents" },
                ].map((item, index) => (
                  <CarouselItem key={index} className="pl-4 basis-2/3 md:basis-1/3 lg:basis-1/4">
                    <div
                      className="group cursor-pointer"
                      onClick={() => setSelectedVideo(item)}
                    >
                      <div className="relative aspect-[9/16] overflow-hidden bg-[#E8E5E1] mb-4">
                        <LoopingClip
                          src={item.src}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                      </div>
                      <div className="flex justify-between items-center px-1">
                        <h4 className="font-serif text-lg italic">{item.title}</h4>
                        <span className="text-[9px] tracking-widest uppercase text-muted-foreground">
                          {String(index + 4).padStart(2, '0')}
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
          </div>

          {/* Packages */}
          <div className="md:col-span-12">
            <PackageGrid
              eyebrow="Packages"
              heading="ways to work together"
              packages={contentPackages}
            />
          </div>

          {/* Closing CTA */}
          <div className="md:col-span-12 mt-16 md:mt-24 border-t border-[#2C2A29]/10 pt-20 md:pt-28 text-center">
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
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
