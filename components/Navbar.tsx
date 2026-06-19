'use client';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  ChevronDown,
  Crown,
  Droplet,
  Gem,
  Home,
  MapPin,
  Phone,
  Scissors,
  Sparkles,
  Star,
  WandSparkles,
  Wind,
  type LucideIcon
} from 'lucide-react';
import Link from 'next/link';
import type { FocusEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getAllDetailedServices } from '@/lib/servicesData';

const navLinks = [
  { key: 'home', href: '#home', icon: Home, hasDropdown: false },
  { key: 'services', href: '#services', icon: WandSparkles, hasDropdown: true },
  { key: 'reviews', href: '#reviews', icon: Star, hasDropdown: false },
  { key: 'location', href: '#location', icon: MapPin, hasDropdown: false }
] as const;

type NavKey = (typeof navLinks)[number]['key'];

const navIconTilt: Record<NavKey, number> = {
  home: 9,
  services: 9,
  reviews: 9,
  location: -9
};

const serviceIcons: Record<string, LucideIcon> = {
  'bridal-makeover': Crown,
  'baby-shower-glow': Sparkles,
  'saree-draping': Wind,
  'jewellery-rent': Gem,
  'hydra-facial': Droplet,
  'hair-styling-spa': Scissors
};

function ServicesDropdown() {
  const services = getAllDetailedServices();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 top-full mt-2 w-[580px] -translate-x-1/2 overflow-hidden rounded-xl border border-parlour-gold-dark/20 bg-white/95 shadow-xl backdrop-blur-xl"
    >
      <div className="grid grid-cols-2 gap-3 p-4">
        {services.map((service) => {
          const Icon = serviceIcons[service.slug] || WandSparkles;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col gap-2 rounded-xl border border-transparent px-4 py-3 text-left transition-all hover:border-parlour-gold-dark/20 hover:bg-parlour-cream-50"
            >
              <div className="flex items-start gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-parlour-gold-dark/30 bg-parlour-gold/10 text-parlour-gold-dark transition-colors group-hover:border-parlour-gold group-hover:bg-parlour-gold/20 group-hover:text-parlour-gold"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-base font-semibold leading-tight text-parlour-text-primary transition-colors group-hover:text-parlour-gold-dark">
                    {service.title.en}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-parlour-text-tertiary line-clamp-2">
                    {service.shortDescription.en}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="border-t border-parlour-gold-dark/10 bg-parlour-cream-50 px-4 py-3">
        <a
          href="#services"
          className="inline-flex items-center gap-2 text-sm font-medium text-parlour-gold-dark transition-colors hover:text-parlour-gold-darker"
        >
          <span>View All Services</span>
          <Sparkles className="size-4" aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
}

function MagneticLink({
  label,
  href,
  icon: Icon,
  navKey,
  isActive,
  onActiveChange,
  hasDropdown
}: {
  label: string;
  href: string;
  icon: LucideIcon;
  navKey: NavKey;
  isActive: boolean;
  onActiveChange: (key: NavKey | null) => void;
  hasDropdown: boolean;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.35 });
  const glowOpacity = useTransform(springX, [-18, 0, 18], [0.45, 0, 0.45]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.28);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    if (hasDropdown) {
      setShowDropdown(false);
    }
  }

  function handleFocus() {
    onActiveChange(navKey);
  }

  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      onActiveChange(null);
      if (hasDropdown) {
        setShowDropdown(false);
      }
    }
  }

  function handleMouseEnter() {
    handleFocus();
    if (hasDropdown) {
      setShowDropdown(true);
    }
  }

  const LinkContent = (
    <>
      <motion.span
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 rounded-full bg-parlour-gold/20 blur-md"
      />
      <motion.span
        variants={{
          hover: { rotate: navIconTilt[navKey], scale: 1.16, y: -1 }
        }}
        transition={{ type: 'spring', stiffness: 430, damping: 16 }}
        className="relative grid size-6 place-items-center rounded-full bg-parlour-cream-100 text-parlour-gold-dark"
      >
        <Icon className="size-3.5" aria-hidden="true" />
      </motion.span>
      <motion.span
        variants={{
          hover: {
            scale: 1.04,
            x: 1,
            rotateY: 15,
            color: '#B8860B'
          }
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 18 }}
        className="relative origin-left"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {label}
      </motion.span>
      {hasDropdown && (
        <ChevronDown
          className={`size-3.5 text-parlour-gold-dark transition-transform ${showDropdown ? 'rotate-180' : ''}`}
        />
      )}
      <AnimatePresence>
        {isActive ? (
          <motion.span
            layoutId="nav-link-underline"
            className="absolute inset-x-3 -bottom-0.5 h-px overflow-hidden rounded-full bg-gradient-to-r from-transparent via-parlour-gold-dark to-transparent shadow-md"
            transition={{ type: 'spring', stiffness: 520, damping: 34 }}
          />
        ) : null}
      </AnimatePresence>
    </>
  );

  if (hasDropdown) {
    return (
      <motion.div
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
      >
        <motion.button
          type="button"
          style={{ x: springX, y: springY }}
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-parlour-gold-dark/70 ${
            isActive || showDropdown ? 'text-parlour-text-primary' : 'text-parlour-text-secondary hover:text-parlour-gold-dark'
          }`}
        >
          {LinkContent}
        </motion.button>
        <AnimatePresence>
          {showDropdown && <ServicesDropdown />}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      style={{ x: springX, y: springY }}
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 380, damping: 22 }}
      className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-parlour-gold-dark/70 ${
        isActive ? 'text-parlour-text-primary' : 'text-parlour-text-secondary hover:text-parlour-gold-dark'
      }`}
    >
      {LinkContent}
    </motion.a>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<NavKey | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const nextIsScrolled = latest > 50;
    setIsScrolled((current) => (current === nextIsScrolled ? current : nextIsScrolled));
  });

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{
        y: isScrolled ? -8 : 0,
        opacity: isScrolled ? 0.98 : 1
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.12 }}
      className="fixed left-0 right-0 top-4 z-50 px-3 sm:top-6 sm:px-4"
    >
      <motion.nav
        layout
        animate={
          isScrolled
            ? {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: 'rgba(184, 134, 11, 0.25)',
                boxShadow: '0 8px 32px rgba(26, 26, 26, 0.12), 0 2px 8px rgba(184, 134, 11, 0.15)',
                backdropFilter: 'blur(24px)'
              }
            : {
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                borderColor: 'rgba(184, 134, 11, 0.20)',
                boxShadow: '0 4px 24px rgba(26, 26, 26, 0.08), 0 1px 4px rgba(184, 134, 11, 0.10)',
                backdropFilter: 'blur(24px)'
              }
        }
        transition={{ type: 'spring', stiffness: 220, damping: 30, mass: 0.9 }}
        className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-2 rounded-full border px-3 py-2 sm:px-5"
      >
        <a
          href="#home"
          className="group flex min-w-0 items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-parlour-champagne/70 sm:gap-3"
          aria-label="Sri Narpavi Beauty Parlour home"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-parlour-gold-dark/40 bg-parlour-gold/20 text-parlour-gold-dark sm:size-10">
            <Sparkles className="size-4 sm:size-5" aria-hidden="true" />
          </span>
          <span className="truncate font-display text-lg font-semibold tracking-normal text-parlour-text-primary sm:text-2xl">
            Sri Narpavi
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <MagneticLink
              key={link.href}
              href={link.href}
              icon={link.icon}
              label={t.nav[link.key]}
              navKey={link.key}
              isActive={activeNav === link.key}
              onActiveChange={setActiveNav}
              hasDropdown={link.hasDropdown}
            />
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <motion.a
            href="tel:+919786740925"
            whileHover={{
              scale: 1.05,
              y: -2,
              skewY: -0.5,
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.35), 0 0 60px rgba(212, 175, 55, 0.20)'
            }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(212, 175, 55, 0.26)',
                '0 0 36px rgba(212, 175, 55, 0.32)',
                '0 0 30px rgba(212, 175, 55, 0.26)'
              ]
            }}
            transition={{
              type: 'spring',
              stiffness: 360,
              damping: 20,
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
            className="group relative hidden min-h-[44px] overflow-hidden rounded-full border border-parlour-gold bg-parlour-gold px-4 py-2 text-sm font-semibold text-white outline-none transition-colors hover:bg-parlour-gold-dark focus-visible:ring-2 focus-visible:ring-parlour-gold-dark/80 sm:inline-flex sm:px-5"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative inline-flex items-center gap-2">
              <Phone className="size-4" aria-hidden="true" />
              {t.nav.callNow}
            </span>
          </motion.a>
        </div>
      </motion.nav>
    </motion.header>
  );
}
