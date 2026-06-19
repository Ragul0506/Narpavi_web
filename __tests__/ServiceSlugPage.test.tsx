import { render, screen } from '@testing-library/react';
import type { ServiceDetail } from '@/lib/serviceData';

const mockNotFound = jest.fn();

const mockService: ServiceDetail = {
  title: 'Radiant, Rejuvenating\nSkincare Services',
  eyebrow: 'Glow-focused skincare',
  description: 'A refined skincare ritual for fresh, polished, event-ready radiance.',
  buttons: ['Service for Her', 'Service for Him'],
  image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1400',
  imageAlt: 'Skincare Model with Face Mask',
  subServices: [
    { name: 'FACE CLEANUP', top: '30%', left: '20%', lineTo: { x1: 44, y1: 31, x2: 25, y2: 30 } }
  ]
};

jest.mock('next/navigation', () => ({
  notFound: () => mockNotFound()
}));

jest.mock('@/lib/serviceData', () => ({
  getServiceDetail: jest.fn((slug: string) => (slug === 'skincare-glow' ? mockService : undefined)),
  serviceSlugs: ['skincare-glow', 'bridal-makeover', 'hair-styling']
}));

jest.mock('@/components/ServiceDetailShowcase', () => ({
  ServiceDetailShowcase: ({ service }: { service: ServiceDetail }) => (
    <section data-testid="service-detail-showcase">
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      {service.buttons.map((button) => (
        <a key={button} href="tel:+919786740925">
          {button}
        </a>
      ))}
      {service.subServices.map((subService) => (
        <span key={subService.name}>{subService.name}</span>
      ))}
    </section>
  )
}));

describe('Service slug page', () => {
  beforeEach(() => {
    mockNotFound.mockClear();
  });

  it('renders the showcase for a valid service slug', async () => {
    const Page = (await import('@/app/services/[slug]/page')).default;
    const ui = await Page({ params: Promise.resolve({ slug: 'skincare-glow' }) });

    render(ui);

    expect(screen.getByTestId('service-detail-showcase')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /radiant, rejuvenating\s+skincare services/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /service for her/i })).toBeInTheDocument();
    expect(screen.getByText('FACE CLEANUP')).toBeInTheDocument();
    expect(mockNotFound).not.toHaveBeenCalled();
  });

  it('calls notFound for an invalid service slug', async () => {
    const Page = (await import('@/app/services/[slug]/page')).default;

    await Page({ params: Promise.resolve({ slug: 'missing-service' }) });

    expect(mockNotFound).toHaveBeenCalledTimes(1);
  });
});
