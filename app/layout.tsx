import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import '@/styles/globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-serif',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cabinetgc.ma'),
  title: {
    template: '%s | Cabinet de Gestion et Conseil',
    default: 'Cabinet de Gestion et Conseil',
  },
  description: 'Cabinet de Gestion et Conseil - Expertise comptable, conseil juridique, fiscal et financier au Maroc.',
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    siteName: 'Cabinet de Gestion et Conseil',
    images: ['/images/og-default.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col text-dark bg-white font-sans">
        <header>
          <TopBar />
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
