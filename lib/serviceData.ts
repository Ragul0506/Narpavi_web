export type ServiceSlug = keyof typeof serviceDetails;

export type ServiceDetail = {
  title: string;
  eyebrow: string;
  description: string;
  buttons: string[];
  image: string;
  imageAlt: string;
  subServices: Array<{
    name: string;
    top: string;
    left: string;
    lineTo: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };
  }>;
};

export const serviceDetails = {
  'bridal-makeover': {
    title: 'Royal Swamimalai\nBridal Makeover',
    eyebrow: 'Signature bridal artistry',
    description:
      'A complete camera-ready bridal experience with makeup, hair styling, saree draping, and jewellery coordination shaped for your ceremony lighting.',
    buttons: ['Bridal Packages', 'Pre-Wedding'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'Luxury bridal salon model',
    subServices: [
      { name: 'HD MAKEUP', top: '20%', left: '60%', lineTo: { x1: 50, y1: 23, x2: 64, y2: 20 } },
      { name: 'HAIR STYLING', top: '40%', left: '65%', lineTo: { x1: 54, y1: 35, x2: 69, y2: 40 } },
      { name: 'SAREE DRAPING', top: '70%', left: '55%', lineTo: { x1: 48, y1: 68, x2: 59, y2: 70 } }
    ]
  },
  'skincare-glow': {
    title: 'Radiant, Rejuvenating\nSkincare Services',
    eyebrow: 'Glow-focused skincare',
    description:
      'A refined skincare ritual for fresh, polished, event-ready radiance with cleanup, de-tan care, and facial mask finishing.',
    buttons: ['Service for Her', 'Service for Him'],
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'Skincare model receiving premium beauty treatment',
    subServices: [
      { name: 'FACE CLEANUP', top: '30%', left: '20%', lineTo: { x1: 44, y1: 31, x2: 25, y2: 30 } },
      { name: 'DE-TAN', top: '30%', left: '70%', lineTo: { x1: 56, y1: 30, x2: 74, y2: 30 } },
      { name: 'FACIAL & MASK', top: '60%', left: '25%', lineTo: { x1: 46, y1: 54, x2: 30, y2: 60 } }
    ]
  },
  'hair-styling': {
    title: 'Polished Occasion\nHair Styling',
    eyebrow: 'Premium hair finishing',
    description:
      'Elegant buns, soft waves, floral setting, and long-lasting hold designed to complete bridal, engagement, and celebration looks.',
    buttons: ['Bridal Hair', 'Party Styling'],
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'Luxury hair styling model',
    subServices: [
      { name: 'BRIDAL BUN', top: '24%', left: '22%', lineTo: { x1: 43, y1: 26, x2: 27, y2: 24 } },
      { name: 'SOFT CURLS', top: '44%', left: '72%', lineTo: { x1: 57, y1: 42, x2: 76, y2: 44 } },
      { name: 'FLOWER SETTING', top: '68%', left: '62%', lineTo: { x1: 52, y1: 62, x2: 66, y2: 68 } }
    ]
  }
} as const satisfies Record<string, ServiceDetail>;

export function getServiceDetail(slug: string) {
  return serviceDetails[slug as ServiceSlug];
}

export const serviceSlugs = Object.keys(serviceDetails) as ServiceSlug[];
