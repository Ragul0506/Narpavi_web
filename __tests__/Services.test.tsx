import { render, screen } from '@testing-library/react';
import { Services } from '@/components/Services';

describe('Services', () => {
  it('renders the services section and central portrait image', () => {
    render(<Services />);

    expect(
      screen.getByRole('heading', {
        name: /skincare-inspired bridal artistry, mapped around you/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: /woman receiving premium beauty parlour makeup and skincare styling/i
      })
    ).toBeInTheDocument();
  });

  it('renders all signature service callout cards', () => {
    render(<Services />);

    for (const service of [
      'Bridal Makeup',
      'Engagement Makeup',
      'Baby Shower Makeovers',
      'Jewellery Collection for Rent',
      'Saree Draping'
    ]) {
      expect(screen.getByRole('heading', { name: service })).toBeInTheDocument();
    }
  });
});
