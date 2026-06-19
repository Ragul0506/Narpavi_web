'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, IndianRupee, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getAllDetailedServices } from '@/lib/servicesData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function ServicesShowcase() {
  const services = getAllDetailedServices();

  return (
    <section
      id="services"
      className="relative overflow-hidden scroll-mt-20 bg-gradient-to-b from-parlour-champagne/30 via-parlour-pearl/50 to-parlour-champagne/30 py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-parlour-gold-dark">
            Our Expertise
          </p>
          <h2 className="font-display text-4xl font-light text-parlour-night md:text-5xl lg:text-6xl">
            Premium Beauty Services
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-parlour-gold to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-parlour-ink/70">
            Experience luxury beauty treatments crafted for your most special moments
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const whatsappUrl = `https://wa.me/919786740925?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;
            const isBridal = service.slug === 'bridal-makeover';

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-lg border ${
                  isBridal ? 'border-parlour-gold/40 shadow-xl shadow-parlour-gold/10' : 'border-parlour-gold/20'
                } bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-parlour-gold/20`}
              >
                {/* Signature Service Badge */}
                {isBridal && (
                  <div className="absolute left-4 top-4 z-10 rounded-full border border-parlour-gold bg-parlour-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-parlour-night shadow-lg">
                    Signature Service
                  </div>
                )}

                {/* Hero Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title.en}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-parlour-night/60 via-parlour-night/20 to-transparent" />

                  {/* Floating Price Badge */}
                  <div className="absolute right-4 top-4 rounded-full border border-parlour-gold/30 bg-parlour-night/80 px-4 py-2 backdrop-blur-sm">
                    <div className="flex items-center gap-1 text-sm font-semibold text-parlour-champagne">
                      <IndianRupee className="h-4 w-4" />
                      <span>{service.pricing.en.replace('Starting from ', '').trim()}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Title with Theme Accent */}
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className={`font-display text-2xl font-medium text-parlour-night ${service.theme.primary}`}>
                      {service.title.en}
                    </h3>
                  </div>

                  {/* Duration */}
                  <div className="mb-4 flex items-center gap-2 text-sm text-parlour-ink/60">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration.en}</span>
                  </div>

                  {/* Description */}
                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-parlour-ink/70">
                    {service.shortDescription.en}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3">
                    {/* View Details Button */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="group/btn flex items-center justify-center gap-2 rounded-md border border-parlour-gold bg-gradient-to-r from-parlour-gold to-parlour-bronze px-6 py-3 text-sm font-semibold uppercase tracking-wider text-parlour-night transition-all duration-300 hover:shadow-lg hover:shadow-parlour-gold/30"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>

                    {/* WhatsApp Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Theme Accent Border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${service.theme.gradient} to-transparent opacity-60`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 rounded-xl border border-parlour-gold/20 bg-gradient-to-br from-white via-parlour-pearl-white to-parlour-blush px-6 py-6 shadow-lg md:px-8 md:py-8"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-1 font-display text-3xl font-light text-parlour-gold-dark md:text-4xl"
              >
                500+
              </motion.div>
              <p className="text-xs font-medium text-parlour-text-secondary md:text-sm">
                Happy Clients
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-1 font-display text-3xl font-light text-parlour-gold-dark md:text-4xl"
              >
                5+
              </motion.div>
              <p className="text-xs font-medium text-parlour-text-secondary md:text-sm">
                Years Experience
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-1 font-display text-3xl font-light text-parlour-gold-dark md:text-4xl"
              >
                ★
              </motion.div>
              <p className="text-xs font-medium text-parlour-text-secondary md:text-sm">
                Bridal Specialists
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-1 font-display text-3xl font-light text-parlour-gold-dark md:text-4xl"
              >
                ✓
              </motion.div>
              <p className="text-xs font-medium text-parlour-text-secondary md:text-sm">
                Premium Services
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto h-px w-48 bg-gradient-to-r from-transparent via-parlour-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
