'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const textSlideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const imageFadeIn = {
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

export function Founder() {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-parlour-cream-100 py-24 lg:py-32">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left Side: Text Content */}
          <motion.div variants={textSlideIn} className="space-y-8 lg:pr-8">
            {/* Small Eyebrow Label - "Our Inspiration" */}
            <motion.p
              variants={textSlideIn}
              className="text-xs font-semibold uppercase tracking-[0.4em] text-parlour-gold-dark"
            >
              {language === 'en' ? 'Our Inspiration' : 'எங்கள் உத்வேகம்'}
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={textSlideIn}
              className="font-display text-5xl font-light leading-[1.1] tracking-wide text-parlour-text-primary md:text-6xl lg:text-7xl"
            >
              {language === 'en' ? 'Meet Our Founder' : 'எங்கள் நிறுவனரை சந்திக்கவும்'}
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
                  ? 'With over a decade of experience in bridal artistry, our founder has dedicated her career to celebrating the natural beauty of every woman. Her passion lies in creating looks that don\'t just enhance — they reveal the confidence and radiance that already exist within.'
                  : 'ஒரு தசாப்தத்திற்கும் மேலான மணப்பெண் கலை அனுபவத்துடன், எங்கள் நிறுவனர் ஒவ்வொரு பெண்ணின் இயற்கையான அழகைக் கொண்டாடுவதற்கு தனது வாழ்க்கையை அர்ப்பணித்துள்ளார். மேம்படுத்துவது மட்டுமல்லாமல், ஏற்கனவே உள்ளே இருக்கும் நம்பிக்கையையும் பிரகாசத்தையும் வெளிப்படுத்தும் தோற்றங்களை உருவாக்குவதில் அவரது ஆர்வம் உள்ளது.'}
              </p>

              <p className="text-lg leading-relaxed text-parlour-text-tertiary">
                {language === 'en'
                  ? 'At Sri Narpavi Beauty Parlour, we believe every bride deserves to feel like royalty on her special day. With meticulous attention to detail, premium products, and a warm, personalized approach, we transform your bridal dreams into timeless reality.'
                  : 'ஸ்ரீ நார்பவி பியூட்டி பார்லரில், ஒவ்வொரு மணப்பெண்ணும் தனது சிறப்பு நாளில் ராயல்டியைப் போல உணர தகுதியானவர் என்று நாங்கள் நம்புகிறோம். விவரங்களில் கவனமாக, பிரீமியம் தயாரிப்புகள் மற்றும் ஒரு வெப்பமான, தனிப்பயனாக்கப்பட்ட அணுகுமுறையுடன், உங்கள் மணப்பெண் கனவுகளை காலத்தை மீறிய யதார்த்தமாக மாற்றுகிறோம்.'}
              </p>

              <p className="font-display text-2xl italic leading-relaxed text-parlour-gold-dark">
                {language === 'en'
                  ? '"True beauty is not created — it is unveiled."'
                  : '"உண்மையான அழகு உருவாக்கப்படவில்லை — அது வெளிப்படுத்தப்படுகிறது."'}
              </p>
            </motion.div>

            {/* Signature Section */}
            <motion.div variants={textSlideIn} className="flex items-center gap-4 pt-4">
              <div className="h-px w-16 bg-gradient-to-r from-parlour-gold-dark to-transparent" />
              <span className="font-display text-sm uppercase tracking-[0.3em] text-parlour-text-tertiary">
                {language === 'en' ? 'Founder' : 'நிறுவனர்'}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side: Founder Image with Arched Frame */}
          <motion.div variants={imageFadeIn} className="relative">
            {/* Main Arched Frame Container */}
            <div className="relative mx-auto aspect-[3/4] max-w-md">
              {/* Arched Image Frame */}
              <div className="relative h-full w-full overflow-hidden rounded-t-full border border-parlour-gold-dark shadow-xl">
                {/* Image */}
                <Image
                  src="/images/founder.jpg"
                  alt={language === 'en' ? 'Founder of Sri Narpavi Beauty Parlour' : 'ஸ்ரீ நார்பவி பியூட்டி பார்லர் நிறுவனர்'}
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
              <div className="absolute -bottom-8 -right-8 -z-10 h-full w-full rounded-t-full bg-gradient-to-br from-parlour-gold/20 via-parlour-gold-light/15 to-parlour-gold-dark/15 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-t-full bg-gradient-to-br from-parlour-gold/15 to-parlour-gold-light/10 blur-xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
