'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const imageSlideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const textSlideIn = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export function Heritage() {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-parlour-cream-50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left Side: Temple Image with Arched Frame */}
          <motion.div variants={imageSlideIn} className="relative">
            {/* Main Arched Frame Container */}
            <div className="relative mx-auto aspect-[3/4] max-w-md">
              {/* Arched Image Frame */}
              <div className="relative h-full w-full overflow-hidden rounded-t-full border border-parlour-gold-dark shadow-xl">
                {/* Image */}
                <Image
                  src="/images/temple.jpg"
                  alt={language === 'en' ? 'Swamimalai Temple Heritage' : 'சுவாமிமலை கோவில் பாரம்பரியம்'}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '0.3';
                  }}
                />

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-parlour-text-primary/10 via-transparent to-transparent" />
              </div>

              {/* Floating Glow Effect Behind Arch */}
              <div className="absolute -bottom-8 -left-8 -z-10 h-full w-full rounded-t-full bg-gradient-to-bl from-parlour-gold/20 via-parlour-gold-light/15 to-parlour-gold-dark/15 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-t-full bg-gradient-to-bl from-parlour-gold/15 to-parlour-gold-light/10 blur-xl" />
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div variants={textSlideIn} className="space-y-8 lg:pl-8">
            {/* Small Eyebrow Label - "Our Roots" */}
            <motion.p
              variants={textSlideIn}
              className="text-xs font-semibold uppercase tracking-[0.4em] text-parlour-gold-dark"
            >
              {language === 'en' ? 'OUR ROOTS' : 'எங்கள் வேர்கள்'}
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={textSlideIn}
              className="font-display text-5xl font-light leading-[1.1] tracking-wide text-parlour-text-primary md:text-6xl lg:text-7xl"
            >
              {language === 'en' ? 'The Spirit of Swamimalai' : 'சுவாமிமலையின் ஆன்மா'}
            </motion.h2>

            {/* Decorative Gradient Line */}
            <motion.div
              variants={textSlideIn}
              className="h-px w-24 bg-gradient-to-r from-parlour-gold via-parlour-gold-dark to-transparent"
            />

            {/* Body Text */}
            <motion.div variants={textSlideIn} className="space-y-6">
              <p className="text-lg leading-relaxed text-parlour-text-secondary">
                {language === 'en'
                  ? 'Nestled in the sacred town of Swamimalai, our artistry is deeply rooted in tradition. We blend time-honored beauty rituals with modern elegance to create looks that resonate with cultural richness and contemporary grace.'
                  : 'புனித நகரமான சுவாமிமலையில் அமைந்துள்ள எங்கள் கலை பாரம்பரியத்தில் ஆழமாக வேரூன்றியுள்ளது. கலாச்சார செழுமை மற்றும் சமகால கருணையுடன் எதிரொலிக்கும் தோற்றங்களை உருவாக்க, காலப்போக்கில் மதிக்கப்படும் அழகு சடங்குகளை நவீன நேர்த்தியுடன் கலக்கிறோம்.'}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
