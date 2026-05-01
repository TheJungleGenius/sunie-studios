<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Link } from "wouter";

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 hidden md:flex items-center gap-8 mix-blend-difference text-white uppercase text-xs tracking-widest font-medium">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          The Sunie Studio
        </Link>
        <a
          href="https://www.tiktok.com/thesuniestudio"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          TIKTOK.
        </a>
        <Link href="/contact" className="hover:opacity-70 transition-opacity">
          Enquire Now
        </Link>
        <a
          href="https://www.instagram.com/thesuniestudio/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          IG.
        </a>
      </nav>

      {/* Mobile bar */}
      <div className="fixed top-0 left-0 right-0 z-50 p-5 flex md:hidden items-center justify-between mix-blend-difference text-white uppercase text-xs tracking-widest font-medium">
        <Link href="/" className="hover:opacity-70 transition-opacity" onClick={closeMenu}>
          The Sunie Studio
        </Link>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative h-6 w-7 flex flex-col justify-center items-end gap-[5px]"
        >
          <span
            className={`block h-px bg-white transition-all duration-300 ${
              open ? "w-6 translate-y-[6px] rotate-45" : "w-6"
            }`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 ${
              open ? "opacity-0 w-6" : "w-4"
            }`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 ${
              open ? "w-6 -translate-y-[6px] -rotate-45" : "w-5"
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-[#F4F1ED] text-[#2C2A29] transition-opacity duration-500 ease-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#2C2A29_1px,transparent_1px)] [background-size:6px_6px]" />
        <div className="relative h-full w-full flex flex-col items-center justify-center gap-10 px-6">
          <Link
            href="/portfolio"
            onClick={closeMenu}
            className="font-serif text-4xl italic lowercase font-light tracking-wide"
          >
            content creation
          </Link>
          <Link
            href="/weddings"
            onClick={closeMenu}
            className="font-serif text-4xl italic lowercase font-light tracking-wide"
          >
            photography
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="font-serif text-4xl italic lowercase font-light tracking-wide"
          >
            enquire
          </Link>
          <div className="mt-6 flex items-center gap-8 text-[10px] tracking-[0.3em] uppercase opacity-70">
            <a
              href="https://www.tiktok.com/thesuniestudio"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              TikTok
            </a>
            <a
              href="https://www.instagram.com/thesuniestudio/?hl=en"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
=======
import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex items-center gap-8 mix-blend-difference text-white uppercase text-xs tracking-widest font-medium">
      <Link href="/" className="hover:opacity-70 transition-opacity">
        The Sunie Studio
      </Link>

      <a
        href="https://www.tiktok.com/thesuniestudio"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-70 transition-opacity"
      >
        TIKTOK.
      </a>

      <Link href="/contact" className="hover:opacity-70 transition-opacity">
        Enquire Now
      </Link>

      <a
        href="https://www.instagram.com/thesuniestudio/?hl=en"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-70 transition-opacity"
      >
        IG.
      </a>
    </nav>
>>>>>>> a90ad3d886d01b67b74572b8e44c09a605613558
  );
}
