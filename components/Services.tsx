'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// Premium real model images - high-resolution Indian models for luxury aesthetic
const premiumServiceImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3', // Bridal - Indian bride
  'https://images.unsplash.com/photo-1583241800698-d7d8d4873fcb?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3', // Baby shower - pregnant woman
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3', // Saree draping - Indian saree
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3', // Jewellery - gold jewelry
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3'  // Hydra facial - skincare treatment
];

export function Services() {
  const { language, t } = useLanguage();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-parlour-night via-[#0b0410] to-parlour-night"
    >
      {/* Elegant Top Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-parlour-champagne/50 to-transparent" />

      {/* Header Section */}
      <div className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block border-b-2 border-parlour-champagne/50 pb-2 text-xs font-bold uppercase tracking-[0.4em] text-parlour-champagne drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
          >
            {language === 'en' ? 'Signature Services' : 'சிறப்பு சேவைகள்'}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 font-display text-4xl font-light leading-tight tracking-[0.12em] text-parlour-pearl drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {language === 'en'
              ? 'Luxury Bridal Artistry & Skincare Excellence'
              : 'ஆடம்பர மணப்பெண் கலை மற்றும் சரும சிறப்பு'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-base font-light leading-8 tracking-[0.02em] text-parlour-pearl/80 sm:text-lg lg:text-xl"
          >
            {language === 'en'
              ? 'From signature bridal makeovers to advanced hydra facials, experience the perfect blend of tradition and modern beauty innovation at Sri Narpavi.'
              : 'சிறப்பு மணப்பெண் அலங்காரம் முதல் மேம்பட்ட ஹைட்ரா ஃபேஷியல் வரை, ஸ்ரீ நர்பவியில் பாரம்பரியம் மற்றும் நவீன அழகு புதுமையின் சரியான கலவையை அனுபவிக்கவும்.'}
          </motion.p>
        </motion.div>
      </div>

      {/* Full-Width Alternating Service Sections */}
      <div className="relative">
        {t.services.items.map((service, index) => (
          <LuxuryServiceSection
            key={index}
            service={service}
            image={premiumServiceImages[index]}
            index={index}
            isReversed={index % 2 === 1}
            bookNowText={t.services.bookNow}
            language={language}
          />
        ))}
      </div>
    </section>
  );
}

function LuxuryServiceSection({
  service,
  image,
  index,
  isReversed,
  bookNowText,
  language
}: {
  service: { title: string; desc: string; whatsappService: string };
  image: string;
  index: number;
  isReversed: boolean;
  bookNowText: string;
  language: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // WhatsApp integration with pre-filled message
  const whatsappNumber = '919786740925';
  const whatsappMessage = encodeURIComponent(
    `Hello Sri Narpavi Beauty Parlour, I would like to book a ${service.whatsappService} appointment.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Animatic parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Sophisticated parallax transforms - alternating direction
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isReversed ? [120, 0, -120] : [-120, 0, 120]
  );
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.15]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], isReversed ? [1, 0, -1] : [-1, 0, 1]);

  return (
    <div
      ref={sectionRef}
      className={`relative flex min-h-screen w-full flex-col overflow-hidden ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      {/* Image Side - Parallax with Scale & Rotate */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: 'spring', stiffness: 80, damping: 25, delay: 0.1 }}
        className="relative h-[55vh] overflow-hidden lg:h-screen lg:w-1/2"
      >
        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
            rotate: imageRotate
          }}
          className="absolute inset-0 will-change-transform"
        >
          {/* Luxury gradient fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-parlour-plum/50 via-parlour-velvet/70 to-parlour-night" />

          <Image
            src={image}
            alt={`${service.title} at Sri Narpavi Beauty Parlour`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
            priority={index === 0}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.opacity = '0';
            }}
          />

          {/* Dramatic gradient overlay for depth */}
          <div
            className={`absolute inset-0 bg-gradient-to-${isReversed ? 'l' : 'r'} from-transparent via-transparent to-parlour-night/60`}
          />
        </motion.div>

        {/* Elegant shine effect */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: '100%', opacity: [0, 0.3, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </motion.div>

      {/* Content Side */}
      <div className="relative flex min-h-[45vh] items-center lg:min-h-screen lg:w-1/2">
        {/* Naturals Signature SVG Connector - Desktop Horizontal */}
        <svg
          className={`pointer-events-none absolute top-1/2 z-0 hidden h-px w-32 -translate-y-1/2 lg:block ${
            isReversed ? '-right-32' : '-left-32'
          }`}
          preserveAspectRatio="none"
          viewBox="0 0 128 1"
        >
          <motion.line
            x1="0"
            y1="0.5"
            x2="128"
            y2="0.5"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeOpacity="0.7"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.circle
            cx={isReversed ? '0' : '128'}
            cy="0.5"
            r="3"
            fill="#D4AF37"
            fillOpacity="0.95"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.95 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 1 }}
          />
        </svg>

        {/* Mobile Vertical Connector */}
        <div className="absolute left-10 top-0 z-0 h-20 w-px lg:hidden">
          <motion.div
            className="h-full w-full bg-gradient-to-b from-parlour-champagne/70 to-transparent"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />
          <motion.div
            className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-parlour-champagne shadow-[0_0_12px_rgba(212,175,55,0.8)]"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.8 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: isReversed ? -70 : 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 85, damping: 25, delay: 0.25 }}
          className="relative z-10 w-full px-6 py-12 sm:px-10 lg:px-16 lg:py-16 xl:px-24"
        >
          {/* Eyebrow Label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-parlour-champagne/85 drop-shadow-md"
          >
            Sri Narpavi · {language === 'en' ? 'Service' : 'சேவை'} {String(index + 1).padStart(2, '0')}
          </motion.p>

          {/* Service Title */}
          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-5 font-display text-3xl font-light leading-tight tracking-[0.06em] text-parlour-pearl drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            {service.title}
          </motion.h3>

          {/* Decorative Line Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="my-6 h-0.5 w-24 bg-gradient-to-r from-parlour-champagne/80 via-parlour-champagne/40 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)]"
            style={{ transformOrigin: 'left' }}
          />

          {/* Service Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="max-w-xl text-base font-light leading-relaxed tracking-[0.02em] text-parlour-pearl/85 sm:text-lg lg:text-xl"
          >
            {service.desc}
          </motion.p>

          {/* WhatsApp Book Now Button */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 0.7 }}
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`mt-10 inline-flex items-center gap-3 border-2 border-parlour-champagne/80 bg-parlour-champagne/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-parlour-champagne shadow-[0_0_24px_rgba(212,175,55,0.25),0_8px_32px_rgba(0,0,0,0.3)] outline-none backdrop-blur-sm transition-all duration-300 hover:border-parlour-champagne hover:bg-parlour-champagne hover:text-parlour-night hover:shadow-[0_0_36px_rgba(212,175,55,0.5),0_12px_40px_rgba(0,0,0,0.4)] focus-visible:ring-2 focus-visible:ring-parlour-champagne/90 ${
              language === 'ta' ? 'tracking-wide' : ''
            }`}
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            <span>{bookNowText}</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Section Divider */}
      {index < 4 && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-parlour-champagne/25 to-transparent" />
      )}
    </div>
  );
}
