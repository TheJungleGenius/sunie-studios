import { useEffect } from "react";
import { X } from "lucide-react";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
};

export function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[95] bg-black flex flex-col animate-[videoModalFade_200ms_ease-out_both]">
      <video
        src={videoSrc}
        autoPlay
        controls
        playsInline
        className="flex-1 w-full h-full object-contain min-h-0"
      />
      <div className="flex items-center justify-between px-6 py-4 bg-[#1a1918] shrink-0">
        <h3 className="font-serif text-lg italic text-[#F4F1ED]">{title}</h3>
        <button
          onClick={onClose}
          className="text-[#F4F1ED]/70 hover:text-[#F4F1ED] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <style>{`
        @keyframes videoModalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
