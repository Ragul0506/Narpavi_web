'use client';

import { motion, useAnimation } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Karthick G',
    text: 'Excellent makeup for baby shower. They adhere to small details and I am fully satisfied with the service.'
  },
  {
    name: 'Prithisha M',
    text: 'Engagement makeup was fantastic. Flawless application and long-lasting results throughout the event.'
  },
  {
    name: 'Rindiya AV',
    text: 'Complete A to Z bridal services all under one roof. Professional team and beautiful results.'
  },
  {
    name: 'Sarwan Ragul',
    text: 'Outstanding service quality. Highly recommend for any special occasion.'
  },
  {
    name: 'Lakshmi S',
    text: 'Best bridal makeup in Swamimalai. They understood exactly what I wanted for my wedding.'
  },
  {
    name: 'Divya R',
    text: 'Amazing hair styling and saree draping. The team is very skilled and attentive.'
  }
];

function RatingStars() {
  return (
    <div className="flex items-center gap-1 text-parlour-champagne" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Reviews() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          duration: 35,
          ease: 'linear',
          repeat: Infinity
        }
      });
    }
  }, [isHovered, controls]);

  return (
    <section id="reviews" className="overflow-hidden scroll-mt-20 bg-parlour-cream-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-parlour-gold-dark">
              Loved Locally
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-none text-parlour-text-primary sm:text-6xl">
              Real words from real occasions.
            </h2>
          </div>
          <div className="rounded-full border border-parlour-gold-dark/30 bg-white px-5 py-3 text-sm font-semibold text-parlour-text-primary shadow-md">
            4.8 average · 45 reviews
          </div>
        </motion.div>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-parlour-cream-100 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-parlour-cream-100 to-transparent sm:w-32" />
        <motion.div
          animate={controls}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="flex w-max gap-5 sm:gap-6"
        >
          {[...reviews, ...reviews].map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="group flex h-56 w-[min(85vw,360px)] flex-col justify-between rounded-2xl border border-parlour-gold-dark/15 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] sm:h-60 sm:w-[380px] sm:p-7"
            >
              <RatingStars />
              <p className="text-lg leading-7 text-parlour-text-secondary sm:text-xl sm:leading-8">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-parlour-gold-dark">{review.name}</div>
                <div className="text-xs font-medium uppercase tracking-wider text-parlour-gold-dark/60">
                  Verified
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
