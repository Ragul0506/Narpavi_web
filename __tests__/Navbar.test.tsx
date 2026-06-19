import { render, screen, within } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';

function renderNavbar() {
  return render(
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}

describe('Navbar', () => {
  it('renders the brand and primary navigation links', () => {
    renderNavbar();

    expect(
      screen.getByRole('link', { name: /sri narpavi beauty parlour home/i })
    ).toBeInTheDocument();

    for (const linkName of ['Home', 'Services', 'Reviews', 'Location']) {
      const link = screen.getByRole('link', { name: linkName });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', expect.stringMatching(/^#/));
      expect(link.querySelector('svg')).toBeInTheDocument();
    }
  });

  it('renders a call now action with phone href and icon', () => {
    renderNavbar();

    const callNow = screen.getByRole('link', { name: /call now/i });

    expect(callNow).toBeInTheDocument();
    expect(callNow).toHaveAttribute('href', 'tel:+919786740925');
    expect(within(callNow).getByText(/call now/i)).toBeInTheDocument();
    expect(callNow.querySelector('svg')).toBeInTheDocument();
  });

  it('renders the bilingual language toggle', () => {
    renderNavbar();

    expect(screen.getByRole('button', { name: /switch to tamil/i })).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('தமிழ்')).toBeInTheDocument();
  });
});
