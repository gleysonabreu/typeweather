import Provider from '@/components/provider';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TypeWeather',
  description: 'See the weather forecast in any city.',
  icons: {
    icon: '/icon_logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-typeweather bg-cover bg-gray-900`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
