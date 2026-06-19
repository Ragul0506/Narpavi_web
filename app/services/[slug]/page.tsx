import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { PremiumServiceDetail } from '@/components/PremiumServiceDetail';
import { getDetailedService, detailedServiceSlugs } from '@/lib/servicesData';

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return detailedServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getDetailedService(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Sri Narpavi Beauty Parlour'
    };
  }

  return {
    title: `${service.title.en} | Sri Narpavi Beauty Parlour`,
    description: service.shortDescription.en,
    openGraph: {
      title: `${service.title.en} | Sri Narpavi Beauty Parlour`,
      description: service.shortDescription.en,
      images: [service.heroImage]
    }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getDetailedService(slug);

  if (!service) {
    notFound();
  }

  return (
    <ErrorBoundary>
      <PremiumServiceDetail service={service} />
    </ErrorBoundary>
  );
}
