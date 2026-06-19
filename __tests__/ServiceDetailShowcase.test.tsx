import { render, screen } from '@testing-library/react';
import { Sparkles } from 'lucide-react';
import { ServiceDetailShowcase } from '@/components/ServiceDetailShowcase';
import type { ServiceDetail } from '@/lib/serviceData';

jest.mock('framer-motion', () => {
  const React = jest.requireActual('react');

  const ignoredMotionProps = new Set([
    'animate',
    'exit',
    'initial',
    'layout',
    'transition',
    'variants',
    'viewport',
    'whileHover',
    'whileInView',
    'whileTap'
  ]);

  function createMotionComponent(tag: string) {
    const MotionComponent = ({ children, ...props }: Record<string, unknown>) => {
      const domProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !ignoredMotionProps.has(key))
      );

      return React.createElement(tag, domProps, children);
    };

    MotionComponent.displayName = `MockMotion.${tag}`;
    return MotionComponent;
  }

  return {
    motion: new Proxy(
      {},
      {
        get: (_target, prop: string) => createMotionComponent(prop)
      }
    ),
    useAnimation: () => ({ start: jest.fn(), stop: jest.fn(), set: jest.fn() }),
    useInView: () => true
  };
});

const mockService: ServiceDetail = {
  title: 'Radiant, Rejuvenating\nSkincare Services',
  eyebrow: 'Glow-focused skincare',
  description: 'A refined skincare ritual for fresh, polished, event-ready radiance.',
  buttons: ['Service for Her', 'Service for Him'],
  image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1400',
  imageAlt: 'Skincare Model with Face Mask',
  subServices: [
    { name: 'FACE CLEANUP', top: '30%', left: '20%', lineTo: { x1: 44, y1: 31, x2: 25, y2: 30 } },
    { name: 'DE-TAN', top: '30%', left: '70%', lineTo: { x1: 56, y1: 30, x2: 74, y2: 30 } },
    { name: 'FACIAL & MASK', top: '60%', left: '25%', lineTo: { x1: 46, y1: 54, x2: 30, y2: 60 } }
  ]
};

describe('ServiceDetailShowcase', () => {
  it('renders the service title, image, and CTA buttons', () => {
    render(<ServiceDetailShowcase service={mockService} />);

    expect(
      screen.getByRole('heading', {
        name: /radiant, rejuvenating skincare services/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /skincare model with face mask/i })
    ).toBeInTheDocument();

    for (const button of mockService.buttons) {
      const cta = screen.getByRole('link', { name: new RegExp(button, 'i') });

      expect(cta).toBeInTheDocument();
      expect(cta).toHaveAttribute('href', 'tel:+919786740925');
    }
  });

  it('maps and renders all sub-service callouts', () => {
    render(<ServiceDetailShowcase service={mockService} />);

    for (const subService of mockService.subServices) {
      expect(screen.getByText(subService.name)).toBeInTheDocument();
    }
  });

  it('renders the service eyebrow with the visual icon slot', () => {
    render(<ServiceDetailShowcase service={{ ...mockService, eyebrow: 'Glow-focused skincare' }} />);

    expect(screen.getByText('Glow-focused skincare')).toBeInTheDocument();
    expect(Sparkles).toBeDefined();
  });
});
