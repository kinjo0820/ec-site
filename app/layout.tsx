import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { NavigationBar } from '@/components/navigation-bar';
import { Footer } from '@/components/footer';
import { CartProvider } from '@/lib/cart-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ishigaki Artisans | Handcrafted with Passion',
  description: 'Discover unique handmade artworks created by artisans supported by B-type employment services on Ishigaki Island, Okinawa, Japan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <NavigationBar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}