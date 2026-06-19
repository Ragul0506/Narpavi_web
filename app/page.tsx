import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Founder } from '@/components/Founder';
import { Gallery } from '@/components/Gallery';
import { Heritage } from '@/components/Heritage';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { PremiumContact } from '@/components/PremiumContact';
import { Reviews } from '@/components/Reviews';
import { ServicesShowcase } from '@/components/ServicesShowcase';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ErrorBoundary>
        <main className="min-h-screen">
          <ErrorBoundary
            fallback={
              <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-parlour-plum via-parlour-velvet to-parlour-night px-4">
                <div className="max-w-2xl text-center">
                  <h1 className="font-display text-5xl font-light text-parlour-pearl">
                    Sri Narpavi Beauty Parlour
                  </h1>
                  <p className="mt-6 text-lg text-parlour-pearl/80">
                    Bridal beauty with a royal Swamimalai vibe
                  </p>
                  <a
                    href="tel:+919786740925"
                    className="mt-8 inline-flex items-center border border-parlour-champagne bg-parlour-champagne px-8 py-4 text-sm font-bold uppercase tracking-wider text-parlour-night transition-colors hover:bg-parlour-champagne/90"
                  >
                    Book Now: +91 97867 40925
                  </a>
                </div>
              </section>
            }
          >
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary>
            <ServicesShowcase />
          </ErrorBoundary>
          <ErrorBoundary>
            <Gallery />
          </ErrorBoundary>
          <ErrorBoundary>
            <Founder />
          </ErrorBoundary>
          <ErrorBoundary>
            <Heritage />
          </ErrorBoundary>
          <ErrorBoundary>
            <Reviews />
          </ErrorBoundary>
          <ErrorBoundary>
            <PremiumContact />
          </ErrorBoundary>
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
