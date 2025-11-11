import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gonzalo & Xiomara - Nuestra Boda',
  description:
    'Celebra con nosotros nuestra boda el 10 de Enero de 2026. Únete a nuestra celebración de amor.',
  keywords: [
    'boda',
    'matrimonio',
    'Gonzalo',
    'Xiomara',
    'celebración',
    'invitación',
  ],
  authors: [{ name: 'Gonzalo & Xiomara' }],
  openGraph: {
    title: 'Gonzalo & Xiomara - Nuestra Boda',
    description: 'Celebra con nosotros nuestra boda el 10 de Enero de 2026',
    type: 'website',
    locale: 'es_ES',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
