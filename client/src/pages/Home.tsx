import { Navigation } from "@/components/Navigation";
import { Link } from "wouter";
import canvasBg from "@/assets/images/canvas.jpg";
import creativeVideo from "@/assets/videos/creative-loop.mp4";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative flex flex-col md:flex-row">
      <Navigation />

      {/* Portfolio Half */}
      <Link href="/portfolio" className="group relative flex-1 h-[50vh] md:h-screen overflow-hidden cursor-pointer flex items-center justify-center">
        {/* Textured Canvas Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          style={{ backgroundImage: `url(${canvasBg})` }}
        />
        <div className="absolute inset-0 bg-[#F4F1ED]/80 mix-blend-multiply z-10" />

        {/* Centered Looping Video/GIF Replacement */}
        <div className="relative z-20 w-48 h-64 md:w-64 md:h-80 overflow-hidden shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105">
           <video 
            src={creativeVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay to dim video slightly on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        </div>

        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-[#2C2A29]">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl lowercase italic mb-4 font-light tracking-wide group-hover:text-white transition-colors duration-500">portfolio</h2>
          <span className="text-[10px] tracking-[0.2em] uppercase border border-[#2C2A29]/30 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:border-white/50 group-hover:text-white transition-all duration-500 backdrop-blur-sm">enter</span>
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