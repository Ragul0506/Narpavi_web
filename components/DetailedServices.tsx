'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const serviceVisuals = [
  {
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    align: 'object-center'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    align: 'object-center'
  },
  {
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    align: 'object-center'
  },
  {
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    align: 'object-center'
  }
];

const textWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const textItem = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 115, damping: 18, mass: 0.75 }
  }
};

export function DetailedServices() {
  const { language, t } = useLanguage();

  return (
    <section
      id="detailed-services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#0b0410_0%,#16071d_42%,#251033_72%,#09030d_100%)]"
    >
      {t.services.items.map((service, index) => {
        const visual = serviceVisuals[index % serviceVisuals.length];
        const isReversed = index % 2 === 1;
        const imageInitialX = isReversed ? 72 : -72;
        const textInitialX = isReversed ? -56 : 56;

        return (
          <article
            key={`${service.title}-${index}`}
            className={`relative flex min-h-screen flex-col items-stretch gap-10 px-4 py-20 sm:px-6 md:gap-0 md:px-0 md:py-0 ${
              isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: imageInitialX, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 82, damping: 20, mass: 0.9 }}
              className="relative min-h-[30rem] overflow-hidden sm:min-h-[36rem] md:min-h-screen md:w-1/2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-parlour-plum/30 via-parlour-velvet/50 to-parlour-night" />
              <Image
                src={visual.image}
                alt={`${service.title} at Sri Narpavi Beauty Parlour`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover ${visual.align}`}
                priority={index === 0}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09030d]/64 via-transparent to-black/10" />
              <div
                className={`absolute inset-y-0 hidden w-32 md:block ${
                  isReversed
                    ? 'left-0 bg-gradient-to-r from-[#0b0410] to-transparent'
                    : 'right-0 bg-gradient-to-l from-[#0b0410] to-transparent'
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: textInitialX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 88, damping: 19, delay: 0.08 }}
              className="relative flex items-center md:w-1/2"
            >
              <div
                className={`absolute top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-parlour-champagne/30 to-transparent md:block ${
                  isReversed ? 'right-0' : 'left-0'
                }`}
              />
              <motion.div
                variants={textWrap}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="mx-auto w-full max-w-xl px-2 pb-4 sm:px-6 md:px-10 md:pb-0 lg:px-14 xl:px-20"
              >
                <motion.p
                  variants={textItem}
                  className="text-xs font-semibold uppercase tracking-[0.34em] text-parlour-champagne"
                >
                  Sri Narpavi
                </motion.p>

                <motion.h2
                  variants={textItem}
                  className="mt-7 font-display text-4xl font-light uppercase leading-tight tracking-[0.15em] text-parlour-pearl sm:text-5xl lg:text-6xl"
                >
                  {service.title}
                </motion.h2>

                <motion.div
                  variants={textItem}
                  className="my-8 h-px w-24 bg-parlour-champagne/60"
                />

                <motion.p
                  variants={textItem}
                  className="max-w-lg text-base font-light leading-loose tracking-[0.05em] text-parlour-pearl/74 sm:text-lg"
                >
                  {service.desc}
                </motion.p>

                <motion.a
                  variants={textItem}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 20 }}
                  href="tel:+919786740925"
                  className={`mt-10 inline-flex min-h-[44px] items-center border border-parlour-champagne/70 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-parlour-champagne outline-none transition-colors duration-300 hover:bg-parlour-champagne hover:text-parlour-night focus-visible:ring-2 focus-visible:ring-parlour-champagne/80 ${
                    language === 'ta' ? 'tracking-normal' : ''
                  }`}
                >
                  {t.services.bookNow}
                </motion.a>
              </motion.div>
            </motion.div>
          </article>
        );
      })}
    </section>
  );
}
