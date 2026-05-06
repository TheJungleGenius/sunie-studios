import { Link } from "wouter";

// TODO: replace placeholder email with the studio's real public address before launch.
const STUDIO_EMAIL = "hello@thesuniestudio.com";

export function Footer() {
  return (
    <footer className="bg-[#F4F1ED] text-[#2C2A29] border-t border-[#2C2A29]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <h2
              className="text-4xl md:text-5xl font-light tracking-wide mb-4"
              style={{ fontFamily: "WhisperingSignature, cursive" }}
            >
              the sunie studio
            </h2>
            <p className="font-serif text-lg md:text-xl italic font-light leading-relaxed text-[#2C2A29]/70 max-w-sm">
              An archive of quiet light, slow looks, and the small unrepeatable details of a day.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[10px] tracking-widest uppercase mb-5 text-[#2C2A29]/50">
              (Explore)
            </p>
            <ul className="space-y-3 font-serif text-lg italic font-light">
              <li>
                <Link href="/portfolio" className="hover:opacity-50 transition-opacity">
                  content creation
                </Link>
              </li>
              <li>
                <Link href="/weddings" className="hover:opacity-50 transition-opacity">
                  photography
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-50 transition-opacity">
                  enquire
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] tracking-widest uppercase mb-5 text-[#2C2A29]/50">
              (Connect)
            </p>
            <ul className="space-y-3 font-serif text-lg italic font-light">
              <li>
                <a
                  href="https://www.instagram.com/thesuniestudio/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-50 transition-opacity"
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@thesuniestudio"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-50 transition-opacity"
                >
                  tiktok
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-widest uppercase mb-5 text-[#2C2A29]/50">
              (Studio)
            </p>
            <p className="font-serif text-lg italic font-light leading-relaxed mb-2">
              Melbourne, Australia
            </p>
            <a
              href={`mailto:${STUDIO_EMAIL}`}
              className="font-serif text-lg italic font-light leading-relaxed hover:opacity-50 transition-opacity break-all"
            >
              {STUDIO_EMAIL}
            </a>

            <a
              href="/contact"
              className="mt-8 inline-block border border-[#2C2A29] px-6 py-2.5 text-[11px] tracking-widest uppercase hover:bg-[#2C2A29] hover:text-[#F4F1ED] transition-colors duration-300"
            >
              Enquire Now
            </a>
          </div>
        </div>

        <div className="border-t border-[#2C2A29]/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[10px] tracking-widest uppercase text-[#2C2A29]/50">
          <p>&copy; {new Date().getFullYear()} The Sunie Studio</p>
          <p className="font-serif text-sm normal-case tracking-normal italic">
            Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
