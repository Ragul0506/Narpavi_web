'use client';

import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

type GalleryProps = {
  images?: GalleryImage[];
};

export function Gallery({ images = [] }: GalleryProps) {
  const hasImages = images.length > 0;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-parlour-champagne/30 via-parlour-pearl/50 to-parlour-champagne/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-parlour-gold-dark">
            Our Work
          </p>
          <h2 className="font-display text-4xl font-light text-parlour-night md:text-5xl lg:text-6xl">
            Portfolio Gallery
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-parlour-gold to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-parlour-ink/70">
            Real bridal transformations and beauty services
          </p>
        </motion.div>

        {/* Gallery Grid or Empty State */}
        {hasImages ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-lg border border-parlour-gold/20 bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-parlour-gold/20"
              >
                {/* Image will go here */}
                <div className="absolute inset-0 bg-gradient-to-br from-parlour-blush to-parlour-cream-200" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-parlour-night/80 via-parlour-night/40 to-transparent p-4">
                  <p className="text-sm font-medium text-white">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl"
          >
            <div className="rounded-2xl border border-parlour-gold/30 bg-gradient-to-br from-white via-parlour-pearl-white to-parlour-blush p-8 text-center shadow-lg md:p-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-4 inline-flex items-center justify-center rounded-full border-2 border-parlour-gold/30 bg-parlour-gold/10 p-5"
              >
                <Camera className="h-10 w-10 text-parlour-gold-dark" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-3 font-display text-2xl font-light text-parlour-night md:text-3xl"
              >
                Portfolio Coming Soon
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mx-auto max-w-md text-base leading-relaxed text-parlour-text-secondary"
              >
                Real client transformations will be showcased here.
              </motion.p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
