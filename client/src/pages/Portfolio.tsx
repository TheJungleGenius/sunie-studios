import { Navigation } from "@/components/Navigation";
import reelVideo from "@/assets/videos/portfolio-reel.mp4";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#F4F1ED] text-[#2C2A29]">
      <Navigation />

      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-24">
        {/* Header Section */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl lowercase italic font-light tracking-wide mb-4">
              portfolio
            </h1>
            <p className="text-xs tracking-[0.2em] uppercase max-w-sm text-muted-foreground leading-relaxed">
              Curated visual stories, elegant details, and timeless moments captured with intention.
            </p>
          </div>
          
          <div className="hidden md:flex gap-4 text-[10px] tracking-widest uppercase">
            <button className="border border-[#2C2A29]/20 px-4 py-2 rounded-full hover:bg-[#2C2A29] hover:text-[#F4F1ED] transition-colors">All</button>
            <button className="border border-[#2C2A29]/20 px-4 py-2 rounded-full hover:bg-[#2C2A29] hover:text-[#F4F1ED] transition-colors">Weddings</button>
            <button className="border border-[#2C2A29]/20 px-4 py-2 rounded-full hover:bg-[#2C2A29] hover:text-[#F4F1ED] transition-colors">Editorial</button>
          </div>
        </header>

        {/* Masonry-style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Featured Central Motion Element */}
          <div className="md:col-span-8 md:col-start-3 mb-12">
             <div className="relative aspect-[4/5] md:aspect-video overflow-hidden group">
                <video 
                  src={reelVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 text-white mix-blend-difference">
                  <h3 className="font-serif text-3xl italic">featured motion</h3>
                  <p className="text-[10px] tracking-widest uppercase mt-2">aesthetic reels</p>
                </div>
             </div>
          </div>

          {/* Grid Item 1 */}
          <div className="md:col-span-5 md:col-start-1">
             <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E5E1] group cursor-pointer">
                <img src="/src/assets/images/portfolio-1.jpg" alt="Villa Celebration" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
             </div>
             <div className="mt-4 flex justify-between items-center">
                <h4 className="font-serif text-xl italic">Villa Celebration</h4>
                <span className="text-[9px] tracking-widest uppercase text-muted-foreground">01</span>
             </div>
          </div>

          {/* Grid Item 2 */}
          <div className="md:col-span-5 md:col-start-7 mt-12 md:mt-32">
             <div className="relative aspect-square overflow-hidden bg-[#E8E5E1] group cursor-pointer">
               <img src="/src/assets/images/portfolio-2.jpg" alt="Editorial Details" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
             </div>
             <div className="mt-4 flex justify-between items-center">
                <h4 className="font-serif text-xl italic">Editorial Details</h4>
                <span className="text-[9px] tracking-widest uppercase text-muted-foreground">02</span>
             </div>
          </div>

          {/* Text Break */}
          <div className="md:col-span-8 md:col-start-3 my-16 text-center">
            <p className="font-serif text-2xl md:text-4xl italic leading-relaxed text-muted-foreground">
              "Focusing on the quiet in-between moments, creating a digital archive that feels authentic and deeply personal."
            </p>
          </div>

          {/* Grid Item 3 */}
          <div className="md:col-span-6 md:col-start-4">
             <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E5E1] group cursor-pointer">
               <img src="/src/assets/images/portfolio-3.jpg" alt="Modern Romance" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
             </div>
             <div className="mt-4 flex justify-between items-center">
                <h4 className="font-serif text-xl italic">Modern Romance</h4>
                <span className="text-[9px] tracking-widest uppercase text-muted-foreground">03</span>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}