import { Navigation } from "@/components/Navigation";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative flex flex-col md:flex-row">
      <Navigation />

      {/* Creative Half */}
      <Link href="/creative" className="group relative flex-1 h-[50vh] md:h-screen overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/40 transition-colors duration-500" />
        <img 
          src="/src/assets/images/creative.jpg" 
          alt="Creative Agency" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl lowercase italic mb-4 font-light tracking-wide">creative</h2>
          <span className="text-[10px] tracking-[0.2em] uppercase border border-white/30 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">enter</span>
        </div>
      </Link>

      {/* Weddings & Events Half */}
      <Link href="/weddings" className="group relative flex-1 h-[50vh] md:h-screen overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/40 transition-colors duration-500" />
        <img 
          src="/src/assets/images/weddings.jpg" 
          alt="Weddings and Events" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl lowercase italic mb-4 font-light tracking-wide text-center px-4">weddings & events</h2>
          <span className="text-[10px] tracking-[0.2em] uppercase border border-white/30 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">enter</span>
        </div>
      </Link>

      {/* Central Divider Line (Desktop only) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 z-30 pointer-events-none" />
    </div>
  );
}