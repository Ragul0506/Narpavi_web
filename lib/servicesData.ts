export type ServiceSlug =
  | 'bridal-makeover'
  | 'baby-shower-glow'
  | 'saree-draping'
  | 'jewellery-rent'
  | 'hydra-facial'
  | 'hair-styling-spa';

export type DetailedServiceStep = {
  stepNumber: number;
  title: {
    en: string;
    ta: string;
  };
  description: {
    en: string;
    ta: string;
  };
  image: string;
};

export type DetailedService = {
  id: string;
  slug: ServiceSlug;
  title: {
    en: string;
    ta: string;
  };
  shortDescription: {
    en: string;
    ta: string;
  };
  heroImage: string;
  images: string[]; // Step images
  detailedSteps: DetailedServiceStep[];
  whatsappMessage: string;
  duration: {
    en: string;
    ta: string;
  };
  pricing: {
    en: string;
    ta: string;
  };
  theme: {
    primary: string;
    gradient: string;
    accent: string;
  };
};

export const detailedServices: Record<ServiceSlug, DetailedService> = {
  'bridal-makeover': {
    id: '1',
    slug: 'bridal-makeover',
    title: {
      en: 'Signature Bridal Makeover',
      ta: 'சிறப்பு மணப்பெண் அலங்காரம்'
    },
    shortDescription: {
      en: 'A complete camera-ready bridal transformation with HD makeup, intricate hair styling, saree draping, and jewellery coordination for your special day.',
      ta: 'உங்கள் சிறப்பு நாளுக்கான HD மேக்கப், சிக்கலான முடி அலங்காரம், புடவை அலங்காரம் மற்றும் நகை ஒருங்கிணைப்புடன் முழுமையான மணப்பெண் மாற்றம்.'
    },
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2400&auto=format&fit=crop',
    images: [],
    theme: {
      primary: 'text-rose-400',
      gradient: 'from-rose-900/40',
      accent: 'border-rose-400/30'
    },
    detailedSteps: [
      {
        stepNumber: 1,
        title: {
          en: 'Skin Prep & Priming',
          ta: 'தோல் தயாரிப்பு மற்றும் பிரைமிங்'
        },
        description: {
          en: 'We begin with a thorough cleansing, toning, and moisturizing routine. A hydrating primer is applied to create a smooth, flawless base that ensures your makeup stays perfect throughout the ceremony and reception.',
          ta: 'நாங்கள் முழுமையான சுத்தம், டோனிங் மற்றும் ஈரப்பதமூட்டும் வழக்கத்துடன் தொடங்குகிறோம். விழா மற்றும் வரவேற்பு முழுவதும் உங்கள் மேக்கப் சரியாக இருப்பதை உறுதிசெய்ய மென்மையான, குறைபாடற்ற அடிப்படையை உருவாக்க ஹைட்ரேட்டிங் பிரைமர் பயன்படுத்தப்படுகிறது.'
        },
        image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 2,
        title: {
          en: 'HD Makeup Application',
          ta: 'HD மேக்கப் பயன்பாடு'
        },
        description: {
          en: 'Using premium HD makeup products, we create a camera-ready look with flawless foundation, contouring, highlighting, and setting. Your features are enhanced while maintaining a natural, radiant glow that photographs beautifully.',
          ta: 'பிரீமியம் HD மேக்கப் பொருட்களைப் பயன்படுத்தி, குறைபாடற்ற அடித்தளம், விளிம்பு வரைதல், சிறப்பு வெளிச்சம் மற்றும் அமைப்புடன் கேமரா-தயார் தோற்றத்தை உருவாக்குகிறோம். அழகாக புகைப்படம் எடுக்கும் இயற்கையான, ஒளிரும் பிரகாசத்தை பராமரிக்கும் போது உங்கள் அம்சங்கள் மேம்படுத்தப்படுகின்றன.'
        },
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Eye & Lip Artistry',
          ta: 'கண் மற்றும் உதடு கலை'
        },
        description: {
          en: 'Intricate eye makeup with perfectly blended shadows, winged liner, and volumizing lashes creates mesmerizing eyes. Lips are shaped and colored to complement your overall look and outfit, with long-lasting formulas.',
          ta: 'சரியாக கலந்த நிழல்கள், இறக்கை லைனர் மற்றும் அளவு அதிகரிக்கும் இமைகளுடன் சிக்கலான கண் மேக்கப் மயக்கும் கண்களை உருவாக்குகிறது. உதடுகள் உங்கள் ஒட்டுமொத்த தோற்றத்தையும் ஆடையையும் பூர்த்தி செய்ய வடிவமைக்கப்பட்டு வண்ணமயமாக்கப்படுகின்றன.'
        },
        image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Hair Styling & Setting',
          ta: 'முடி ஸ்டைலிங் & அமைத்தல்'
        },
        description: {
          en: 'Your hair is styled into an elegant bun, soft curls, or traditional braids based on your preference. Floral accessories and jewellery are perfectly placed and secured for a stunning, long-lasting hairstyle.',
          ta: 'உங்கள் விருப்பத்தின் அடிப்படையில் உங்கள் முடி நேர்த்தியான பன், மென்மையான சுருட்டைகள் அல்லது பாரம்பரிய பின்னல்களாக வடிவமைக்கப்பட்டுள்ளது. மலர் அலங்காரங்கள் மற்றும் நகைகள் அழகான, நீண்ட கால சிகை அலங்காரத்திற்காக சரியாக வைக்கப்பட்டு பாதுகாக்கப்படுகின்றன.'
        },
        image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 5,
        title: {
          en: 'Final Touches & Draping',
          ta: 'இறுதி தொடுதல்கள் மற்றும் அலங்காரம்'
        },
        description: {
          en: 'We complete your transformation with professional saree draping, ensuring perfect pleats and secure pinning. A final setting spray locks everything in place, and we do touch-ups to ensure you look absolutely flawless.',
          ta: 'சரியான மடிப்புகள் மற்றும் பாதுகாப்பான பின்னிங் உறுதி செய்து, தொழில்முறை புடவை அலங்காரத்துடன் உங்கள் மாற்றத்தை நிறைவு செய்கிறோம். ஒரு இறுதி அமைப்பு ஸ்ப்ரே எல்லாவற்றையும் இடத்தில் பூட்டுகிறது, மேலும் நீங்கள் முற்றிலும் குறைபாடற்றதாக இருப்பதை உறுதிசெய்ய தொடுதல்களைச் செய்கிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2400&auto=format&fit=crop'
      }
    ],
    whatsappMessage: 'Hello Sri Narpavi Beauty Parlour, I would like to book a Signature Bridal Makeover appointment. Please share the package details and available dates.',
    duration: {
      en: '3-4 hours',
      ta: '3-4 மணி நேரம்'
    },
    pricing: {
      en: 'Starting from ₹15,000',
      ta: '₹15,000 முதல்'
    }
  },

  'baby-shower-glow': {
    id: '2',
    slug: 'baby-shower-glow',
    title: {
      en: 'Baby Shower Glow',
      ta: 'வளைகாப்பு அலங்காரம்'
    },
    shortDescription: {
      en: 'Celebrate your motherhood journey with our gentle, radiant makeovers. Natural look with skin-friendly products for a luminous, comfortable glow.',
      ta: 'எங்கள் மென்மையான, ஒளிரும் மேக்கப்புடன் உங்கள் தாய்மைப் பயணத்தைக் கொண்டாடுங்கள். ஒளிரும், வசதியான பிரகாசத்திற்கான இயற்கையான தோற்றத்துடன் தோல்-நட்பு தயாரிப்புகள்.'
    },
    heroImage: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=2400&auto=format&fit=crop',
    images: [],
    theme: {
      primary: 'text-pink-300',
      gradient: 'from-pink-900/30',
      accent: 'border-pink-300/30'
    },
    detailedSteps: [
      {
        stepNumber: 1,
        title: {
          en: 'Gentle Cleansing & Hydration',
          ta: 'மென்மையான சுத்தம் & நீரேற்றம்'
        },
        description: {
          en: 'We use pregnancy-safe, hypoallergenic products to gently cleanse and deeply hydrate your skin. A soothing moisturizer prepares your skin for a natural, dewy finish that enhances your natural pregnancy glow.',
          ta: 'உங்கள் தோலை மெதுவாக சுத்தம் செய்யவும் ஆழமாக நீரேற்றம் செய்யவும் கர்ப்பகால-பாதுகாப்பான, ஹைபோஅலர்ஜெனிக் தயாரிப்புகளைப் பயன்படுத்துகிறோம். உங்கள் இயற்கையான கர்ப்பகால பிரகாசத்தை மேம்படுத்தும் இயற்கையான, பனி போன்ற முடிவுக்கு உங்கள் தோலை ஒரு ஆறுதல் மாய்ஸ்சரைசர் தயார் செய்கிறது.'
        },
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Soft Glow Foundation',
          ta: 'மென்மையான பிரகாச அடித்தளம்'
        },
        description: {
          en: 'Light, breathable foundation is applied to even out skin tone while maintaining a natural look. We focus on enhancing your natural radiance rather than heavy coverage, perfect for a comfortable day-long wear.',
          ta: 'இயற்கையான தோற்றத்தை பராமரிக்கும் போது தோல் டோனை சமமாக்க லேசான, சுவாசிக்கக்கூடிய அடித்தளம் பயன்படுத்தப்படுகிறது. வசதியான நாள் முழுவதும் அணிவதற்கு ஏற்றதாக, கனமான கவரேஜை விட உங்கள் இயற்கையான பிரகாசத்தை மேம்படுத்துவதில் கவனம் செலுத்துகிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Natural Eye Enhancement',
          ta: 'இயற்கையான கண் மேம்பாடு'
        },
        description: {
          en: 'Soft, neutral eyeshadows and a gentle mascara application brighten your eyes without overwhelming them. We create a fresh, awake look that highlights your natural beauty and complements the celebratory occasion.',
          ta: 'மென்மையான, நடுநிலை கண் நிழல்கள் மற்றும் மென்மையான மஸ்காரா பயன்பாடு உங்கள் கண்களை அதிகமாக்காமல் பிரகாசமாக்குகிறது. உங்கள் இயற்கை அழகை சிறப்பிக்கும் மற்றும் கொண்டாட்ட நிகழ்வுக்கு பூர்த்தி செய்யும் புதிய, விழித்திருக்கும் தோற்றத்தை உருவாக்குகிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Luminous Finishing',
          ta: 'ஒளிரும் முடித்தல்'
        },
        description: {
          en: 'A touch of highlighter on your cheekbones and a natural lip color complete the look. Soft blush adds warmth and dimension, giving you that pregnancy glow everyone will admire. Everything feels light and breathable.',
          ta: 'உங்கள் கன்னத்தின் எலும்புகளில் ஒரு ஹைலைட்டர் தொடுதல் மற்றும் இயற்கையான உதடு நிறம் தோற்றத்தை நிறைவு செய்கிறது. மென்மையான ப்ளஷ் வெப்பம் மற்றும் பரிமாணத்தை சேர்க்கிறது, எல்லோரும் பாராட்டும் அந்த கர்ப்பகால பிரகாசத்தை உங்களுக்கு வழங்குகிறது.'
        },
        image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2400&auto=format&fit=crop'
      }
    ],
    whatsappMessage: 'Hello Sri Narpavi Beauty Parlour, I would like to book a Baby Shower Glow makeover appointment. Please share the details and available slots.',
    duration: {
      en: '1.5-2 hours',
      ta: '1.5-2 மணி நேரம்'
    },
    pricing: {
      en: 'Starting from ₹5,000',
      ta: '₹5,000 முதல்'
    }
  },

  'saree-draping': {
    id: '3',
    slug: 'saree-draping',
    title: {
      en: 'Professional Saree Draping',
      ta: 'நேர்த்தியான புடவை கட்டும் சேவை'
    },
    shortDescription: {
      en: 'Perfect pleats, secure pinning, and graceful silhouettes. Expert draping ensures a flawless, comfortable fit that stays intact throughout your ceremony.',
      ta: 'சரியான மடிப்புகள், பாதுகாப்பான பின்னிங் மற்றும் அழகான தோற்றங்கள். நிபுணர் அலங்காரம் உங்கள் விழா முழுவதும் குறைபாடற்ற, வசதியான பொருத்தத்தை உறுதிசெய்கிறது.'
    },
    heroImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2400&auto=format&fit=crop',
    images: [],
    theme: {
      primary: 'text-amber-500',
      gradient: 'from-amber-900/40',
      accent: 'border-amber-500/30'
    },
    detailedSteps: [
      {
        stepNumber: 1,
        title: {
          en: 'Saree Selection & Preparation',
          ta: 'புடவை தேர்வு மற்றும் தயாரிப்பு'
        },
        description: {
          en: 'We assess your saree fabric, style, and the occasion to determine the best draping technique. The saree is carefully ironed and prepared, and we discuss your preferred pallu style and pleat count for a customized look.',
          ta: 'சிறந்த அலங்கார நுட்பத்தைத் தீர்மானிக்க உங்கள் புடவை துணி, பாணி மற்றும் நிகழ்வை மதிப்பிடுகிறோம். புடவை கவனமாக இஸ்திரி செய்யப்பட்டு தயாரிக்கப்படுகிறது, மற்றும் தனிப்பயனாக்கப்பட்ட தோற்றத்திற்காக உங்கள் விருப்பமான பல்லு பாணி மற்றும் மடிப்பு எண்ணிக்கையை விவாதிக்கிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Foundation & Pleating',
          ta: 'அடித்தளம் மற்றும் மடித்தல்'
        },
        description: {
          en: 'Starting with proper petticoat positioning and securing, we create perfectly aligned pleats of uniform width. Each pleat is meticulously crafted to ensure they fall gracefully and maintain their shape throughout the day.',
          ta: 'சரியான உள்ளாடை நிலைப்படுத்துதல் மற்றும் பாதுகாப்புடன் தொடங்கி, சீரான அகலத்தின் சரியாக சீரமைக்கப்பட்ட மடிப்புகளை உருவாக்குகிறோம். ஒவ்வொரு மடிப்பும் அழகாக விழுவதையும் நாள் முழுவதும் அவற்றின் வடிவத்தை பராமரிப்பதையும் உறுதிசெய்ய கவனமாக வடிவமைக்கப்பட்டுள்ளது.'
        },
        image: 'https://images.unsplash.com/photo-1594735782149-935512d3b0df?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Pallu Setting & Styling',
          ta: 'பல்லு அமைத்தல் & ஸ்டைலிங்'
        },
        description: {
          en: 'The pallu is draped according to your chosen style - whether traditional Nivi, modern butterfly, or regional variations like Bengali or Maharashtrian. We ensure elegant shoulder draping with secure pinning that allows freedom of movement.',
          ta: 'பாரம்பரிய நிவி, நவீன பட்டாம்பூச்சி அல்லது வங்காளி அல்லது மகாராஷ்டிரியன் போன்ற பிராந்திய மாறுபாடுகள் போன்ற உங்கள் தேர்ந்தெடுக்கப்பட்ட பாணியின்படி பல்லு அலங்கரிக்கப்படுகிறது. இயக்க சுதந்திரத்தை அனுமதிக்கும் பாதுகாப்பான பின்னிங்குடன் நேர்த்தியான தோள்பட்டை அலங்காரத்தை உறுதிசெய்கிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Final Adjustments & Securing',
          ta: 'இறுதி சரிசெய்தல் & பாதுகாப்பு'
        },
        description: {
          en: 'Every pin is strategically placed for maximum security without damaging the fabric. We make final adjustments to ensure perfect symmetry, comfortable fit, and a stunning silhouette. Touch-ups are done to guarantee everything stays perfect.',
          ta: 'துணியை சேதப்படுத்தாமல் அதிகபட்ச பாதுகாப்பிற்காக ஒவ்வொரு பின்னும் மூலோபாயமாக வைக்கப்படுகிறது. சரியான சமச்சீர், வசதியான பொருத்தம் மற்றும் அதிர்ச்சியூட்டும் தோற்றத்தை உறுதிசெய்ய இறுதி சரிசெய்தல்களைச் செய்கிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1588870372448-ee4e4c04e4fc?q=80&w=2400&auto=format&fit=crop'
      }
    ],
    whatsappMessage: 'Hello Sri Narpavi Beauty Parlour, I would like to book a Professional Saree Draping service. Please share the details and pricing.',
    duration: {
      en: '30-45 minutes',
      ta: '30-45 நிமிடங்கள்'
    },
    pricing: {
      en: 'Starting from ₹1,500',
      ta: '₹1,500 முதல்'
    }
  },

  'jewellery-rent': {
    id: '4',
    slug: 'jewellery-rent',
    title: {
      en: 'Premium Jewellery Collection',
      ta: 'பிரீமியம் நகை சேகரிப்பு'
    },
    shortDescription: {
      en: 'Complete your look with our curated, high-quality jewellery sets. Handpicked pieces available for rent to match your saree, makeup, and occasion perfectly.',
      ta: 'எங்கள் தேர்ந்தெடுக்கப்பட்ட, உயர்தர நகை செட்களுடன் உங்கள் தோற்றத்தை நிறைவு செய்யுங்கள். உங்கள் புடவை, மேக்கப் மற்றும் நிகழ்வுக்கு சரியாகப் பொருந்த கையால் தேர்ந்தெடுக்கப்பட்ட துண்டுகள் வாடகைக்கு கிடைக்கின்றன.'
    },
    heroImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2400&auto=format&fit=crop',
    images: [],
    theme: {
      primary: 'text-yellow-400',
      gradient: 'from-yellow-900/40',
      accent: 'border-yellow-400/30'
    },
    detailedSteps: [
      {
        stepNumber: 1,
        title: {
          en: 'Consultation & Style Matching',
          ta: 'ஆலோசனை & பாணி பொருத்தம்'
        },
        description: {
          en: 'We discuss your outfit details, makeup look, and the occasion to understand your jewellery needs. Our experts help you visualize which pieces will best complement your overall aesthetic and create a cohesive, stunning appearance.',
          ta: 'உங்கள் நகை தேவைகளைப் புரிந்துகொள்ள உங்கள் ஆடை விவரங்கள், மேக்கப் தோற்றம் மற்றும் நிகழ்வை விவாதிக்கிறோம். எந்த துண்டுகள் உங்கள் ஒட்டுமொத்த அழகியலுக்கு சிறந்ததாகப் பூர்த்தி செய்யும் மற்றும் ஒத்திசைவான, அதிர்ச்சியூட்டும் தோற்றத்தை உருவாக்கும் என்பதை காட்சிப்படுத்த எங்கள் நிபுணர்கள் உதவுகிறார்கள்.'
        },
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Collection Viewing & Selection',
          ta: 'சேகரிப்பு பார்வை & தேர்வு'
        },
        description: {
          en: 'Browse through our curated collection of necklaces, earrings, maang tikkas, bangles, and waist belts. Each piece is premium quality, well-maintained, and available in traditional gold-toned, antique, and contemporary designs.',
          ta: 'எங்கள் தேர்ந்தெடுக்கப்பட்ட நெக்லேஸ்கள், காதணிகள், மாங்க டிக்காக்கள், வளையல்கள் மற்றும் இடுப்பு பெல்ட்கள் சேகரிப்பை உலாவவும். ஒவ்வொரு துண்டும் பிரீமியம் தரம், நன்கு பராமரிக்கப்பட்டு, பாரம்பரிய தங்க-டோன், பழமையான மற்றும் சமகால வடிவமைப்புகளில் கிடைக்கிறது.'
        },
        image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Trial & Coordination',
          ta: 'சோதனை & ஒருங்கிணைப்பு'
        },
        description: {
          en: 'Try on different combinations to see what works best with your outfit and face shape. We help coordinate pieces to ensure they work together harmoniously - balancing statement pieces with delicate accents for the perfect ensemble.',
          ta: 'உங்கள் ஆடை மற்றும் முக வடிவத்துடன் எது சிறந்ததாக வேலை செய்கிறது என்பதைக் காண வெவ்வேறு சேர்க்கைகளை முயற்சிக்கவும். சரியான குழுமத்திற்காக நுட்பமான உச்சரிப்புகளுடன் அறிக்கை துண்டுகளை சமநிலைப்படுத்தி, அவை ஒன்றாக இணக்கமாக செயல்படுவதை உறுதிசெய்ய துண்டுகளை ஒருங்கிணைக்க உதவுகிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Rental Process & Care',
          ta: 'வாடகை செயல்முறை & பராமரிப்பு'
        },
        description: {
          en: 'Simple documentation and security deposit process. We provide care instructions and a secure carrying case. After your event, return the jewellery in good condition, and we process your security deposit refund immediately.',
          ta: 'எளிய ஆவணங்கள் மற்றும் பாதுகாப்பு வைப்பு செயல்முறை. நாங்கள் பராமரிப்பு வழிமுறைகள் மற்றும் பாதுகாப்பான சுமந்து செல்லும் கேஸை வழங்குகிறோம். உங்கள் நிகழ்வுக்குப் பிறகு, நகைகளை நல்ல நிலையில் திருப்பித் தாருங்கள், உடனடியாக உங்கள் பாதுகாப்பு வைப்பு திரும்பப் பெறுவதை செயலாக்குகிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?q=80&w=2400&auto=format&fit=crop'
      }
    ],
    whatsappMessage: 'Hello Sri Narpavi Beauty Parlour, I would like to inquire about renting jewellery for my upcoming event. Please share the collection details and pricing.',
    duration: {
      en: 'Rental period: 1-3 days',
      ta: 'வாடகை காலம்: 1-3 நாட்கள்'
    },
    pricing: {
      en: 'Starting from ₹2,000 per set',
      ta: 'ஒரு செட்டிற்கு ₹2,000 முதல்'
    }
  },

  'hydra-facial': {
    id: '5',
    slug: 'hydra-facial',
    title: {
      en: 'Hydra Facial Treatment',
      ta: 'ஹைட்ரா ஃபேஷியல் சிகிச்சை'
    },
    shortDescription: {
      en: 'Deep cleansing, exfoliation, extraction, and hydration in one luxurious treatment. Experience radiant, glowing skin with our advanced hydra facial technology for all skin types.',
      ta: 'ஒரு ஆடம்பர சிகிச்சையில் ஆழ்ந்த சுத்தம், எக்ஸ்ஃபோலியேஷன், பிரித்தெடுத்தல் மற்றும் நீரேற்றம். அனைத்து சருமத்திற்கான எங்கள் மேம்பட்ட ஹைட்ரா ஃபேஷியல் தொழில்நுட்பத்துடன் ஒளிரும், பிரகாசமான சருமத்தை அனுபவிக்கவும்.'
    },
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2400&auto=format&fit=crop',
    images: [],
    theme: {
      primary: 'text-cyan-400',
      gradient: 'from-cyan-900/40',
      accent: 'border-cyan-400/30'
    },
    detailedSteps: [
      {
        stepNumber: 1,
        title: {
          en: 'Deep Cleansing & Analysis',
          ta: 'ஆழ்ந்த சுத்தம் & பகுப்பாய்வு'
        },
        description: {
          en: 'We begin with a thorough skin analysis to identify your skin type and concerns. Advanced cleansing removes surface impurities, makeup residue, and environmental pollutants, preparing your skin for the hydra facial treatment.',
          ta: 'உங்கள் சரும வகை மற்றும் கவலைகளை அடையாளம் காண முழுமையான சரும பகுப்பாய்வுடன் தொடங்குகிறோம். மேம்பட்ட சுத்தம் மேற்பரப்பு அசுத்தங்கள், மேக்கப் எச்சம் மற்றும் சுற்றுச்சூழல் மாசுபடுத்திகளை நீக்குகிறது, ஹைட்ரா ஃபேஷியல் சிகிச்சைக்கு உங்கள் சருமத்தை தயார் செய்கிறது.'
        },
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Exfoliation & Peel',
          ta: 'எக்ஸ்ஃபோலியேஷன் & தோல் உரித்தல்'
        },
        description: {
          en: 'A gentle chemical peel containing glycolic and salicylic acids loosens dead skin cells and debris. This painless exfoliation reveals fresher, brighter skin underneath while clearing pores and improving texture without irritation.',
          ta: 'கிளைகோலிக் மற்றும் சாலிசிலிக் அமிலங்களைக் கொண்ட மென்மையான இரசாயன தோல் உரித்தல் இறந்த சரும செல்கள் மற்றும் குப்பைகளை தளர்த்துகிறது. இந்த வலியற்ற எக்ஸ்ஃபோலியேஷன் எரிச்சல் இல்லாமல் துளைகளை சுத்தம் செய்து அமைப்பை மேம்படுத்தும் போது புதிய, பிரகாசமான சருமத்தை வெளிப்படுத்துகிறது.'
        },
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Extraction & Hydration',
          ta: 'பிரித்தெடுத்தல் & நீரேற்றம்'
        },
        description: {
          en: 'Using vortex suction technology, blackheads and impurities are painlessly extracted from pores. Simultaneously, hydrating serums rich in antioxidants, peptides, and hyaluronic acid are infused deep into the skin for maximum absorption.',
          ta: 'சுழல் உறிஞ்சுதல் தொழில்நுட்பத்தைப் பயன்படுத்தி, கருப்பு தலைகள் மற்றும் அசுத்தங்கள் துளைகளிலிருந்து வலியின்றி பிரித்தெடுக்கப்படுகின்றன. அதே நேரத்தில், ஆக்ஸிஜனேற்றிகள், பெப்டைடுகள் மற்றும் ஹைலூரோனிக் அமிலம் நிறைந்த நீரேற்ற சீரம்கள் அதிகபட்ச உறிஞ்சுதலுக்காக சருமத்தில் ஆழமாக ஊட்டப்படுகின்றன.'
        },
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 4,
        title: {
          en: 'LED Therapy & Protection',
          ta: 'LED சிகிச்சை & பாதுகாப்பு'
        },
        description: {
          en: 'LED light therapy reduces inflammation and stimulates collagen production for anti-aging benefits. We conclude with a protective moisturizer and SPF to lock in hydration and shield your newly rejuvenated skin from environmental damage.',
          ta: 'LED ஒளி சிகிச்சை அழற்சியைக் குறைக்கிறது மற்றும் வயதான எதிர்ப்பு நன்மைகளுக்காக கொலாஜன் உற்பத்தியைத் தூண்டுகிறது. நீரேற்றத்தைப் பூட்டவும் உங்கள் புதிதாக புத்துயிர் பெற்ற சருமத்தை சுற்றுச்சூழல் சேதத்திலிருந்து பாதுகாக்கவும் ஒரு பாதுகாப்பு மாய்ஸ்சரைசர் மற்றும் SPF உடன் முடிக்கிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 5,
        title: {
          en: 'Post-Treatment Care',
          ta: 'சிகிச்சைக்குப் பிந்தைய பராமரிப்பு'
        },
        description: {
          en: 'We provide personalized skincare recommendations and a take-home serum sample. Your skin continues to improve over the next 72 hours as the serums work their magic. Results last 4-6 weeks with proper maintenance.',
          ta: 'தனிப்பயனாக்கப்பட்ட சருமப் பராமரிப்பு பரிந்துரைகள் மற்றும் வீட்டிற்கு எடுத்துச் செல்லும் சீரம் மாதிரியை வழங்குகிறோம். சீரம்கள் அவற்றின் மந்திரத்தை செயல்படுத்தும் போது அடுத்த 72 மணி நேரத்தில் உங்கள் சருமம் தொடர்ந்து மேம்படுகிறது. சரியான பராமரிப்புடன் முடிவுகள் 4-6 வாரங்கள் நீடிக்கும்.'
        },
        image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2400&auto=format&fit=crop'
      }
    ],
    whatsappMessage: 'Hello Sri Narpavi Beauty Parlour, I would like to book a Hydra Facial Treatment. Please share the pricing and available appointment slots.',
    duration: {
      en: '60-75 minutes',
      ta: '60-75 நிமிடங்கள்'
    },
    pricing: {
      en: 'Starting from ₹3,500',
      ta: '₹3,500 முதல்'
    }
  },

  'hair-styling-spa': {
    id: '6',
    slug: 'hair-styling-spa',
    title: {
      en: 'Premium Hair Styling & Spa',
      ta: 'பிரீமியம் முடி ஸ்டைலிங் & ஸ்பா'
    },
    shortDescription: {
      en: 'Luxurious hair treatments, elegant styling, and relaxing spa services. From traditional bridal buns to modern cuts, keratin treatments, and deep conditioning for healthy, gorgeous hair.',
      ta: 'ஆடம்பரமான முடி சிகிச்சைகள், நேர்த்தியான ஸ்டைலிங் மற்றும் ஓய்வெடுக்கும் ஸ்பா சேவைகள். பாரம்பரிய மணப்பெண் பன்கள் முதல் நவீன வெட்டுக்கள், கெரட்டின் சிகிச்சைகள் மற்றும் ஆரோக்கியமான, அழகான முடிக்கான ஆழமான கண்டிஷனிங் வரை.'
    },
    heroImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2400&auto=format&fit=crop',
    images: [],
    theme: {
      primary: 'text-purple-400',
      gradient: 'from-purple-900/40',
      accent: 'border-purple-400/30'
    },
    detailedSteps: [
      {
        stepNumber: 1,
        title: {
          en: 'Hair Analysis & Consultation',
          ta: 'முடி பகுப்பாய்வு & ஆலோசனை'
        },
        description: {
          en: 'Our experts analyze your hair type, texture, and health condition. We discuss your desired style, face shape, occasion needs, and any hair concerns to create a personalized treatment and styling plan tailored just for you.',
          ta: 'எங்கள் நிபுணர்கள் உங்கள் முடி வகை, அமைப்பு மற்றும் ஆரோக்கிய நிலையை பகுப்பாய்வு செய்கிறார்கள். உங்களுக்காக மட்டுமே தனிப்பயனாக்கப்பட்ட சிகிச்சை மற்றும் ஸ்டைலிங் திட்டத்தை உருவாக்க உங்கள் விரும்பிய பாணி, முக வடிவம், சந்தர்ப்ப தேவைகள் மற்றும் ஏதேனும் முடி கவலைகளை விவாதிக்கிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 2,
        title: {
          en: 'Deep Cleansing & Treatment',
          ta: 'ஆழ்ந்த சுத்தம் & சிகிச்சை'
        },
        description: {
          en: 'Premium shampoo and scalp massage remove buildup and stimulate blood circulation. Deep conditioning treatments with keratin, argan oil, or protein masks are applied based on your hair needs, restoring shine and strength.',
          ta: 'பிரீமியம் ஷாம்பூ மற்றும் உச்சந்தலை மசாஜ் குவிப்பை அகற்றி இரத்த ஓட்டத்தை தூண்டுகிறது. உங்கள் முடி தேவைகளின் அடிப்படையில் கெரட்டின், ஆர்கன் எண்ணெய் அல்லது புரத முகமூடிகளுடன் ஆழமான கண்டிஷனிங் சிகிச்சைகள் பயன்படுத்தப்படுகின்றன, பிரகாசம் மற்றும் வலிமையை மீட்டெடுக்கின்றன.'
        },
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 3,
        title: {
          en: 'Professional Styling & Setting',
          ta: 'தொழில்முறை ஸ்டைலிங் & அமைத்தல்'
        },
        description: {
          en: 'Whether you desire elegant bridal buns, soft curls, sleek straightening, or traditional braids, our stylists create the perfect look. Blow-drying, heat styling, and setting techniques ensure your hairstyle lasts all day beautifully.',
          ta: 'நீங்கள் நேர்த்தியான மணப்பெண் பன்கள், மென்மையான சுருட்டைகள், மென்மையான நேராக்குதல் அல்லது பாரம்பரிய பின்னல்களை விரும்பினாலும், எங்கள் ஸ்டைலிஸ்டுகள் சரியான தோற்றத்தை உருவாக்குகிறார்கள். ப்ளோ-ட்ரையிங், வெப்ப ஸ்டைலிங் மற்றும் அமைப்பு நுட்பங்கள் உங்கள் சிகை அலங்காரம் நாள் முழுவதும் அழகாக நீடிக்கும் என்பதை உறுதிசெய்கின்றன.'
        },
        image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 4,
        title: {
          en: 'Finishing & Accessories',
          ta: 'முடித்தல் & அலங்காரங்கள்'
        },
        description: {
          en: 'Final touches include hair spray for lasting hold, adding floral decorations, jeweled pins, or hair accessories that complement your outfit. We ensure every strand is perfectly placed and secured for a flawless, picture-perfect finish.',
          ta: 'நீண்டகால பிடிப்புக்கான ஹேர் ஸ்ப்ரே, உங்கள் ஆடையை பூர்த்தி செய்யும் மலர் அலங்காரங்கள், நகை பின்கள் அல்லது முடி அலங்காரங்களை சேர்ப்பது இறுதி தொடுதல்களில் அடங்கும். குறைபாடற்ற, படம்-சரியான முடிவுக்காக ஒவ்வொரு இழையும் சரியாக வைக்கப்பட்டு பாதுகாக்கப்படுவதை உறுதிசெய்கிறோம்.'
        },
        image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=2400&auto=format&fit=crop'
      },
      {
        stepNumber: 5,
        title: {
          en: 'Scalp Spa & Relaxation',
          ta: 'உச்சந்தலை ஸ்பா & ஓய்வு'
        },
        description: {
          en: 'Indulge in our signature scalp spa treatment with aromatherapy oils and pressure point massage. This deeply relaxing experience relieves stress, promotes hair growth, and leaves you feeling refreshed and rejuvenated.',
          ta: 'நறுமண சிகிச்சை எண்ணெய்கள் மற்றும் அழுத்த புள்ளி மசாஜுடன் எங்கள் கையொப்ப உச்சந்தலை ஸ்பா சிகிச்சையில் ஈடுபடுங்கள். இந்த ஆழமான ஓய்வு அனுபவம் மன அழுத்தத்தை குறைக்கிறது, முடி வளர்ச்சியை촉진ுகிறது மற்றும் நீங்கள் புத்துணர்ச்சி மற்றும் புத்துயிர் பெற்றதாக உணர விடுகிறது.'
        },
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2400&auto=format&fit=crop'
      }
    ],
    whatsappMessage: 'Hello Sri Narpavi Beauty Parlour, I would like to book a Premium Hair Styling & Spa appointment. Please share the services menu and pricing.',
    duration: {
      en: '1.5-3 hours',
      ta: '1.5-3 மணி நேரம்'
    },
    pricing: {
      en: 'Starting from ₹2,500',
      ta: '₹2,500 முதல்'
    }
  }
};

export function getDetailedService(slug: string): DetailedService | undefined {
  return detailedServices[slug as ServiceSlug];
}

export const detailedServiceSlugs = Object.keys(detailedServices) as ServiceSlug[];

export function getAllDetailedServices(): DetailedService[] {
  return Object.values(detailedServices);
}
