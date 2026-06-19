'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { CalendarCheck, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const staggeredReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] }
  }
};

const followUpGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.5
    }
  }
};

// Split into words for premium 3D reveal
const headingText = 'Bridal beauty with a royal Swamimalai vibe';
const words = headingText.split(' ');

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { language, t } = useLanguage();

  // Parallax scroll transformations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  // Naturals aesthetic parallax: image moves slower than content
  const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.05]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-parlour-cream-50 to-parlour-cream-100"
    >
      <section className="relative flex min-h-screen w-full items-center px-4 pt-24 sm:px-6 lg:px-8">
        {/* Parallax Background Image Layer */}
        <motion.div
          aria-hidden="true"
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          {/* Fallback gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-parlour-cream-100 via-parlour-blush to-parlour-cream-200" />

          {/* Bridal Image */}
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </motion.div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-parlour-cream-50/50 to-parlour-cream-100/80" />

        {/* Content Layer with Parallax */}
        <motion.div
          style={{ y: contentY }}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-6xl will-change-transform"
        >
          <div className="max-w-4xl">
            {/* Gold Sub-header */}
            <motion.p
              variants={staggeredReveal}
              className="mb-8 w-fit border-b-2 border-parlour-gold-dark/60 pb-2 text-xs font-semibold uppercase tracking-[0.35em] text-parlour-gold-dark"
            >
              Sri Narpavi Beauty Parlour
            </motion.p>

            {/* Hero Heading - Simplified Animation */}
            <div className="relative mb-4 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2
                }}
                className="max-w-4xl font-display text-5xl font-light leading-[1.15] tracking-[0.02em] text-parlour-text-primary md:text-6xl lg:text-7xl xl:text-8xl"
              >
                {language === 'en' ? t.hero.title : t.hero.title}
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.div variants={followUpGroup} className="mt-4">
              <motion.p
                variants={staggeredReveal}
                className="mt-7 max-w-2xl text-lg font-light leading-8 tracking-wide text-parlour-text-secondary md:text-xl"
              >
                {t.hero.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={staggeredReveal} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <motion.a
                  href="tel:+919786740925"
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="group relative inline-flex min-h-[52px] items-center justify-center gap-3 overflow-hidden border-2 border-parlour-gold bg-parlour-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg outline-none transition-all duration-300 hover:bg-parlour-gold-dark hover:shadow-xl focus-visible:ring-2 focus-visible:ring-parlour-gold/90"
                >
                  <CalendarCheck className="size-5" aria-hidden="true" />
                  <span className={language === 'ta' ? 'tracking-normal' : ''}>
                    {t.hero.cta}
                  </span>
                </motion.a>

                <motion.a
                  href="#location"
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="inline-flex min-h-[52px] items-center justify-center gap-3 border-2 border-parlour-gold-dark bg-white px-8 py-4 text-sm font-semibold text-parlour-gold-darker shadow-md outline-none transition-all duration-300 hover:bg-parlour-cream-100 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-parlour-gold/70"
                >
                  <MapPin className="size-5 text-parlour-gold-dark" aria-hidden="true" />
                  Swamimalai, Kumbakonam
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
