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
  );
}
