'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarCheck, Sparkles } from 'lucide-react';
import type { ServiceDetail } from '@/lib/serviceData';

const titleWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18
    }
  }
};

const titleLine = {
  hidden: { opacity: 0, y: 36, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 112, damping: 18 }
  }
};

export function ServiceDetailShowcase({ service }: { service: ServiceDetail }) {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-parlour-plum to-fuchsia-950 text-parlour-pearl">
      <section className="relative min-h-screen px-4 py-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(244,213,141,0.22),transparent_28%),radial-gradient(circle_at_78%_30%,rgba(247,183,201,0.18),transparent_34%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -38 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="relative z-20"
          >
            <Link
              href="/"
              className="mb-10 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-parlour-pearl/78 outline-none backdrop-blur-xl transition-colors hover:text-parlour-champagne focus-visible:ring-2 focus-visible:ring-parlour-champagne/80"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Home
            </Link>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 130, damping: 18, delay: 0.08 }}
              className="inline-flex items-center gap-3 rounded-full border border-parlour-champagne/24 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-parlour-champagne backdrop-blur-xl"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              {service.eyebrow}
            </motion.p>

            <motion.h1
              variants={titleWrap}
              initial="hidden"
              animate="visible"
              className="mt-8 font-display text-5xl font-light leading-[0.95] text-parlour-pearl sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              {service.title.split('\n').map((line) => (
                <motion.span key={line} variants={titleLine} className="block">
                  {line}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 115, damping: 18, delay: 0.36 }}
              className="mt-8 max-w-xl text-base font-light leading-8 text-parlour-pearl/74 sm:text-lg"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.48 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              {service.buttons.map((button) => (
                <a
                  key={button}
                  href="tel:+919786740925"
                  className="group relative inline-flex min-h-[44px] items-center justify-center overflow-hidden rounded-full border border-parlour-champagne/55 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-parlour-champagne outline-none transition-colors duration-500 hover:text-parlour-night focus-visible:ring-2 focus-visible:ring-parlour-champagne/80"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-parlour-champagne transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="relative inline-flex items-center gap-2">
                    <CalendarCheck className="size-4" aria-hidden="true" />
                    {button}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 82, damping: 20, delay: 0.16 }}
            className="relative z-10 mx-auto min-h-[34rem] w-full max-w-2xl overflow-hidden rounded-t-full rounded-b-[36px] border border-white/12 bg-parlour-night/30 shadow-[0_44px_140px_rgba(18,8,21,0.48)] lg:min-h-[46rem]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-parlour-plum/40 via-parlour-velvet/60 to-parlour-night" />
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-parlour-night/62 via-transparent to-white/8" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <linearGradient id="detail-line" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#fff7f1" stopOpacity="0.18" />
                  <stop offset="48%" stopColor="#f4d58d" stopOpacity="0.96" />
                  <stop offset="100%" stopColor="#fff7f1" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {service.subServices.map((item, index) => (
                <motion.line
                  key={item.name}
                  x1={item.lineTo.x1}
                  y1={item.lineTo.y1}
                  x2={item.lineTo.x2}
                  y2={item.lineTo.y2}
                  stroke="url(#detail-line)"
                  strokeWidth="0.42"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.35 + index * 0.12 }}
                />
              ))}
            </svg>

            {service.subServices.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.88, y: 14 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 150, damping: 17, delay: 0.62 + index * 0.12 }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-parlour-champagne/36 bg-parlour-night/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-parlour-pearl shadow-glass backdrop-blur-xl sm:px-5 sm:text-sm"
                style={{ top: item.top, left: item.left }}
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
