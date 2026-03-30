import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white uppercase text-xs tracking-widest font-medium">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          The Sunie Studio
        </Link>
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/thesuniestudio/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            IG.
          </a>
          <a
            href="https://www.tiktok.com/@onthedaysocials"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            TIKTOK.
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:opacity-70 transition-opacity uppercase"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center mix-blend-difference text-white md:hidden">
        <Link
          href="/"
          className="uppercase text-xs tracking-widest font-medium"
        >
          onthedaysocials
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="uppercase text-xs tracking-widest font-medium"
        >
          Menu
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#F4F1ED] z-[100] flex flex-col p-6 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center text-xs tracking-widest uppercase mb-16">
          <span>Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:opacity-70 transition-opacity"
          >
            <X size={20} strokeWidth={1} />
          </button>
        </div>

        <div className="flex flex-col h-full overflow-y-auto pb-20">
          <div className="mb-12">
            <p className="text-[10px] tracking-widest uppercase mb-6 text-muted-foreground">
              (HEART OF THE STUDIO)
            </p>
            <div className="flex flex-col gap-4 font-serif text-5xl md:text-7xl lowercase">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:italic transition-all"
              >
                home
              </Link>
              <Link
                href="/offerings"
                onClick={() => setIsOpen(false)}
                className="hover:italic transition-all"
              >
                offerings
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:italic transition-all"
              >
                about
              </Link>
              <Link
                href="/careers"
                onClick={() => setIsOpen(false)}
                className="hover:italic transition-all"
              >
                careers
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsOpen(false)}
                className="hover:italic transition-all"
              >
                faq
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-[10px] tracking-widest uppercase mb-6 text-muted-foreground">
              (LEARN)
            </p>
            <div className="flex flex-col gap-4 font-serif text-5xl md:text-7xl lowercase">
              <Link
                href="/education"
                onClick={() => setIsOpen(false)}
                className="hover:italic transition-all"
              >
                education
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-[10px] tracking-widest uppercase mb-6 text-muted-foreground">
              (PORTFOLIO)
            </p>
            <div className="flex flex-col gap-4 font-serif text-5xl md:text-7xl lowercase">
              <Link
                href="/archive"
                onClick={() => setIsOpen(false)}
                className="hover:italic transition-all"
              >
                otds archive
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-[10px] tracking-widest uppercase mb-6 text-muted-foreground">
              (GET IN TOUCH)
            </p>
            <div className="flex flex-col gap-4 font-serif text-5xl md:text-7xl lowercase">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:italic transition-all"
              >
                contact form
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-widest uppercase mb-6 text-muted-foreground">
              (CONNECT WITH US)
            </p>
            <div className="flex flex-col gap-4 font-serif text-5xl md:text-7xl lowercase">
              <a
                href="https://www.instagram.com/onthedaysocials/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="hover:italic transition-all"
              >
                ig
              </a>
              <a
                href="https://www.tiktok.com/@onthedaysocials"
                target="_blank"
                rel="noreferrer"
                className="hover:italic transition-all"
              >
                tiktok
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
