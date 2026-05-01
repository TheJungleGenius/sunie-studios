import { useEffect, useState } from "react";

<<<<<<< HEAD
type LoaderProps = {
  /** When true, uses the shorter inter-page timing instead of the initial-load timing. */
  short?: boolean;
};

export function Loader({ short = false }: LoaderProps) {
=======
export function Loader() {
>>>>>>> a90ad3d886d01b67b74572b8e44c09a605613558
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    const fadeDelay = short ? 700 : 1700;
    const removeDelay = short ? 1200 : 2500;
    const fadeTimer = setTimeout(() => setFadeOut(true), fadeDelay);
    const removeTimer = setTimeout(() => setVisible(false), removeDelay);
=======
    const fadeTimer = setTimeout(() => setFadeOut(true), 1700);
    const removeTimer = setTimeout(() => setVisible(false), 2500);
>>>>>>> a90ad3d886d01b67b74572b8e44c09a605613558
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
<<<<<<< HEAD
  }, [short]);
=======
  }, []);
>>>>>>> a90ad3d886d01b67b74572b8e44c09a605613558

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#F4F1ED] transition-opacity duration-700 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#2C2A29_1px,transparent_1px)] [background-size:6px_6px]" />

      <div className="relative flex flex-col items-center text-[#2C2A29]">
        <span className="text-[10px] tracking-[0.4em] uppercase font-light mb-6 opacity-70 animate-[fadeIn_900ms_ease-out_both]">
          The Sunie Studio
        </span>

        <h1 className="font-serif text-6xl md:text-8xl lowercase italic font-light tracking-wide animate-[fadeUp_1100ms_cubic-bezier(0.25,1,0.5,1)_both]">
          sunie
        </h1>

        <div className="mt-10 flex items-center gap-4 animate-[fadeIn_1400ms_ease-out_both]">
          <span className="block h-px w-10 bg-[#2C2A29]/30" />
          <svg
            width="34"
            height="22"
            viewBox="0 0 34 22"
            fill="none"
            className="text-[#2C2A29]/70"
          >
            <circle
              cx="11"
              cy="11"
              r="9"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="56.5"
              strokeDashoffset="56.5"
              className="animate-[ringDraw_1600ms_ease-out_forwards]"
            />
            <circle
              cx="23"
              cy="11"
              r="9"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="56.5"
              strokeDashoffset="56.5"
              style={{ animationDelay: "300ms" }}
              className="animate-[ringDraw_1600ms_ease-out_forwards]"
            />
          </svg>
          <span className="block h-px w-10 bg-[#2C2A29]/30" />
        </div>

        <span className="mt-8 text-[9px] tracking-[0.5em] uppercase font-light opacity-50 animate-[fadeIn_1800ms_ease-out_both]">
          loading
        </span>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.7; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringDraw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
