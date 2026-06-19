import { Clock, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="location" className="scroll-mt-20 bg-parlour-cream-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[8px] border border-parlour-gold-dark/10 bg-white p-6 shadow-lg md:grid-cols-[1.2fr_0.8fr_0.8fr] md:p-8">
        <div>
          <h2 className="font-display text-4xl font-semibold text-parlour-text-primary">Sri Narpavi Beauty Parlour</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-parlour-text-secondary">
            Bridal makeup, engagement makeup, baby shower styling, saree draping, and jewellery rental in Swamimalai.
          </p>
        </div>

        <address className="not-italic">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-parlour-champagne" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-parlour-gold-dark">Address</p>
              <p className="mt-2 text-sm leading-7 text-parlour-text-secondary">
                Main road, Swamimalai, Kumbakonam, Tamil Nadu 612302
              </p>
            </div>
          </div>
        </address>

        <div className="space-y-5">
          <a
            href="tel:+919786740925"
            className="flex items-start gap-3 rounded-[8px] outline-none focus-visible:ring-2 focus-visible:ring-parlour-champagne/70"
          >
            <Phone className="mt-1 size-5 shrink-0 text-parlour-champagne" aria-hidden="true" />
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-parlour-champagne">
                Phone
              </span>
              <span className="mt-2 block text-sm text-parlour-pearl/76">097867 40925</span>
            </span>
          </a>
          <div className="flex items-start gap-3">
            <Clock className="mt-1 size-5 shrink-0 text-parlour-champagne" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-parlour-gold-dark">
                Working Hours
              </p>
              <p className="mt-2 text-sm text-parlour-pearl/76">Closes 10 PM</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-parlour-text-tertiary">
        © 2026 Sri Narpavi Beauty Parlour. All rights reserved.
      </p>
    </footer>
  );
}
