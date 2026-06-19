'use client';

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from 'react';

export const dictionary = {
  en: {
    nav: { home: 'Home', services: 'Services', reviews: 'Reviews', location: 'Location', callNow: 'Call Now' },
    hero: { title: 'Bridal beauty with a royal Swamimalai vibe', subtitle: 'Your Perfect Look, Tailored for You', cta: 'Book an Appointment' },
    services: {
      bookNow: 'Book Now!',
      items: [
        {
          title: 'Signature Bridal Makeover',
          desc: 'Indulge in a luxurious bridal transformation with HD makeup, intricate hair styling, and flawless finishing. We ensure your big day is picture-perfect with our premium, long-lasting artistry.',
          whatsappService: 'Bridal Makeover'
        },
        {
          title: 'Baby Shower Glow',
          desc: 'Celebrate your motherhood journey with our natural, radiant makeovers. Gentle, skin-friendly products paired with soft glam finishes for a luminous, comfortable look.',
          whatsappService: 'Baby Shower Makeover'
        },
        {
          title: 'Professional Saree Draping',
          desc: 'Perfect pleats, secure pinning, and graceful silhouettes. Our expert draping ensures a flawless, comfortable fit that stays intact throughout your ceremony.',
          whatsappService: 'Saree Draping'
        },
        {
          title: 'Premium Jewellery Collection',
          desc: 'Complete your look with our curated, high-quality jewellery sets. Handpicked pieces available for rent to match your saree, makeup, and occasion perfectly.',
          whatsappService: 'Jewellery Rental'
        },
        {
          title: 'Hydra Facial Treatment',
          desc: 'Deep cleansing, exfoliation, extraction, and hydration in one luxurious treatment. Experience radiant, glowing skin with our advanced hydra facial technology for all skin types.',
          whatsappService: 'Hydra Facial'
        }
      ]
    }
  },
  ta: {
    nav: { home: 'முகப்பு', services: 'சேவைகள்', reviews: 'விமர்சனங்கள்', location: 'இருப்பிடம்', callNow: 'அழைக்கவும்' },
    hero: { title: 'சுவாமிமலையின் பாரம்பரியமிக்க மணப்பெண் அலங்காரம்', subtitle: 'உங்களுக்கான கச்சிதமான அழகு', cta: 'முன்பதிவு செய்க' },
    services: {
      bookNow: 'இப்போதே முன்பதிவு செய்க!',
      items: [
        {
          title: 'சிறப்பு மணப்பெண் அலங்காரம்',
          desc: 'HD மேக்கப், சிக்கலான முடி அலங்காரம் மற்றும் குறைபாடற்ற பூரணத்துடன் ஆடம்பரமான மணப்பெண் மாற்றம். உங்கள் முக்கிய நாளை படம்-சரியாக உறுதிசெய்கிறோம்.',
          whatsappService: 'Bridal Makeover'
        },
        {
          title: 'வளைகாப்பு அலங்காரம்',
          desc: 'உங்கள் தாய்மைப் பயணத்தை இயற்கையான, ஒளிரும் மேக்கப்புடன் கொண்டாடுங்கள். மென்மையான, தோல்-நட்பு தயாரிப்புகள் மற்றும் மென்மையான கவர்ச்சி முடிவுகள்.',
          whatsappService: 'Baby Shower Makeover'
        },
        {
          title: 'நேர்த்தியான புடவை கட்டும் சேவை',
          desc: 'சரியான மடிப்புகள், பாதுகாப்பான பின்னிங் மற்றும் அழகான தோற்றங்கள். எங்கள் நிபுணர் சேவை உங்கள் விழா முழுவதும் குறைபாடற்ற, வசதியான பொருத்தத்தை உறுதிசெய்கிறது.',
          whatsappService: 'Saree Draping'
        },
        {
          title: 'பிரீமியம் நகை சேகரிப்பு',
          desc: 'எங்கள் தேர்ந்தெடுக்கப்பட்ட, உயர்தர நகை செட்களுடன் உங்கள் தோற்றத்தை நிறைவு செய்யுங்கள். உங்கள் புடவை, மேக்கப் மற்றும் நிகழ்வுக்கு பொருந்த கையால் தேர்ந்தெடுக்கப்பட்ட துண்டுகள் வாடகைக்கு கிடைக்கின்றன.',
          whatsappService: 'Jewellery Rental'
        },
        {
          title: 'ஹைட்ரா ஃபேஷியல் சிகிச்சை',
          desc: 'ஆழ்ந்த சுத்தம், எக்ஸ்ஃபோலியேஷன், பிரித்தெடுத்தல் மற்றும் நீரேற்றம் ஒரே ஆடம்பர சிகிச்சையில். அனைத்து சருமத்திற்கான எங்கள் மேம்பட்ட ஹைட்ரா ஃபேஷியல் தொழில்நுட்பத்துடன் ஒளிரும், பிரகாசமான சருமத்தை அனுபவிக்கவும்.',
          whatsappService: 'Hydra Facial'
        }
      ]
    }
  }
} as const;

export type Language = keyof typeof dictionary;

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: (typeof dictionary)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'ta' : 'en')),
      t: dictionary[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
