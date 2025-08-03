import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Orchid Book Shop - Books, Stationery & ISP Packages',
  description: 'Your one-stop destination for books, stationery, and ISP packages. Quality products with excellent service.',
  keywords: 'books, stationery, ISP packages, bookstore, online shopping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}