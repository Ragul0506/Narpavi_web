'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export function PremiumContact() {
  return (
    <section className="relative overflow-hidden bg-parlour-cream-50 py-24 md:py-32">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-parlour-gold-dark"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-4xl font-light leading-tight text-parlour-text-primary md:text-5xl lg:text-6xl"
            >
              Visit Our Sanctuary
            </motion.h2>

            <div className="mt-12 space-y-6">
              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="group rounded-2xl border border-parlour-gold-dark/20 bg-white p-6 transition-all duration-300 hover:border-parlour-gold-dark/40 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-parlour-gold/20 p-3">
                    <MapPin className="h-6 w-6 text-parlour-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-medium text-parlour-text-primary">
                      Our Location
                    </h3>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-parlour-text-secondary">
                      {`Sri Narpavi Beauty Parlour
Swamimalai, Kumbakonam Taluk
Thanjavur District, Tamil Nadu`}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.a
                href="tel:+919786740925"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="group block rounded-2xl border border-parlour-gold/30 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-parlour-gold/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-parlour-gold/20 p-3">
                    <Phone className="h-6 w-6 text-parlour-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-medium text-parlour-text-primary">
                      Call Us
                    </h3>
                    <p className="text-lg text-parlour-text-primary transition-colors group-hover:text-parlour-gold-dark">
                      +91 97867 40925
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group rounded-2xl border border-parlour-gold-dark/20 bg-white p-6 transition-all duration-300 hover:border-parlour-gold-dark/40 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-parlour-gold/20 p-3">
                    <Clock className="h-6 w-6 text-parlour-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-medium text-parlour-text-primary">
                      Opening Hours
                    </h3>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-parlour-text-secondary">
                      {`Mon–Sat: 9:00 AM – 8:00 PM
Sunday: 10:00 AM – 6:00 PM`}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="overflow-hidden rounded-2xl border border-parlour-gold/40 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31301.087766834856!2d79.34!3d10.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89482c3f3f5%3A0x6d54f3cfd05ac8b1!2sSwamimalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-110 saturate-110"
              />
            </div>

            <motion.a
              href="https://www.google.com/maps/search/Swamimalai+Kumbakonam+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-parlour-gold bg-parlour-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-parlour-gold-dark hover:shadow-xl"
            >
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
