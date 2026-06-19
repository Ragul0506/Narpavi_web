'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Clock, DollarSign, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import type { DetailedService } from '@/lib/servicesData';

type PremiumServiceDetailProps = {
  service: DetailedService;
};

export function PremiumServiceDetail({ service }: PremiumServiceDetailProps) {
  const language = 'en';
  const heroRef = useRef<HTMLDivElement>(null);

  // Hero parallax effect
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);

  // WhatsApp link
  const whatsappNumber = '919786740925';
  const whatsappMessage = encodeURIComponent(service.whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-parlour-night via-[#0b0410] to-parlour-night">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[70vh] overflow-hidden lg:h-[85vh]">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 will-change-transform">
          {/* Fallback gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-parlour-plum via-parlour-velvet to-parlour-night" />

          <Image
            src={service.heroImage}
            alt={service.title[language]}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.opacity = '0';
            }}
          />

          {/* Dark overlay with theme gradient for text readability */}
          <div className={`absolute inset-0 bg-gradient-to-b ${service.theme.gradient} via-black/20 to-parlour-night`} />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-end">
          <div className="w-full px-6 pb-12 sm:px-10 lg:px-16 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-7xl"
            >
              {/* Back button */}
              <Link
                href="/#services"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-lg transition-colors hover:bg-white/20"
              >
                <ArrowLeft className="size-4" />
                <span>Back to Services</span>
              </Link>

              {/* Service number */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-parlour-champagne drop-shadow-lg"
              >
                Service {service.id} · Sri Narpavi
              </motion.p>

              {/* Title with theme color */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`max-w-4xl font-display text-4xl font-light leading-tight tracking-[0.04em] ${service.theme.primary} drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-7xl`}
              >
                {service.title[language]}
              </motion.h1>

              {/* Meta info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 flex flex-wrap gap-6"
              >
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="size-5 text-parlour-champagne" />
                  <span className="text-sm font-light">{service.duration[language]}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <DollarSign className="size-5 text-parlour-champagne" />
                  <span className="text-sm font-light">{service.pricing[language]}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="relative px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-parlour-champagne to-transparent" />
            <p className="text-lg font-light leading-relaxed tracking-wide text-parlour-pearl/90 sm:text-xl lg:text-2xl">
              {service.shortDescription[language]}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Detailed Steps - Alternating Zig-Zag Layout */}
      <div className="relative">
        {service.detailedSteps.map((step, index) => (
          <StepSection
            key={step.stepNumber}
            step={step}
            index={index}
            isReversed={index % 2 === 1}
            language={language}
            theme={service.theme}
          />
        ))}
      </div>

      {/* Elegant Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(37,211,102,0.4),0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_12px_48px_rgba(37,211,102,0.6),0_0_0_1px_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-parlour-night sm:px-6 sm:py-4"
        aria-label="Book via WhatsApp"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline-block">
          Book Now
        </span>
      </motion.a>
    </div>
  );
}

function StepSection({
  step,
  index,
  isReversed,
  language,
  theme
}: {
  step: DetailedService['detailedSteps'][0];
  index: number;
  isReversed: boolean;
  language: 'en' | 'ta';
  theme: DetailedService['theme'];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax effect for each step
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], isReversed ? [80, -80] : [-80, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.1]);

  return (
    <div
      ref={sectionRef}
      className={`relative flex min-h-[80vh] flex-col overflow-hidden ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      {/* Image Side - Editorial Magazine Style with Rounded Corners */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-150px' }}
        transition={{ type: 'spring', stiffness: 70, damping: 25, delay: 0.1 }}
        className="relative h-[45vh] p-6 lg:h-auto lg:w-1/2 lg:p-12"
      >
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative h-full overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] will-change-transform lg:rounded-[2.5rem]"
        >
          {/* Fallback gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-parlour-plum/40 via-parlour-velvet/60 to-parlour-night" />

          <Image
            src={step.image}
            alt={`${step.title[language]} - Step ${step.stepNumber}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.opacity = '0';
            }}
          />

          {/* Subtle gradient overlay for depth */}
          <div
            className={`absolute inset-0 bg-gradient-to-${isReversed ? 'l' : 'r'} from-transparent via-transparent to-parlour-night/30`}
          />
        </motion.div>
      </motion.div>

      {/* Content Side */}
      <div className="relative flex min-h-[35vh] items-center lg:min-h-0 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-150px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 25, delay: 0.2 }}
          className="w-full px-6 py-12 sm:px-10 lg:px-16 lg:py-20 xl:px-24"
        >
          {/* Step number badge with theme accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`mb-6 inline-flex items-center justify-center rounded-full border-2 ${theme.accent} bg-parlour-champagne/10 px-4 py-2 backdrop-blur-sm`}
          >
            <span className={`text-sm font-bold uppercase tracking-[0.3em] ${theme.primary}`}>
              Step {step.stepNumber}
            </span>
          </motion.div>

          {/* Step title with theme color */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`mb-6 font-display text-3xl font-light leading-tight tracking-wide ${theme.primary} drop-shadow-lg sm:text-4xl lg:text-5xl`}
          >
            {step.title[language]}
          </motion.h3>

          {/* Decorative divider with theme color */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className={`mb-6 h-0.5 w-20 border-t-2 ${theme.accent}`}
            style={{ transformOrigin: 'left' }}
          />

          {/* Step description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="max-w-xl text-base font-light leading-relaxed tracking-wide text-parlour-pearl/85 sm:text-lg lg:text-xl"
          >
            {step.description[language]}
          </motion.p>
        </motion.div>
      </div>

      {/* Section divider with theme accent */}
      {index < 4 && (
        <div className={`absolute bottom-0 left-0 right-0 h-px border-t ${theme.accent}`} />
      )}
    </div>
  );
}
