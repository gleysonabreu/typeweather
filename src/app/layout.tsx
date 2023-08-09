import '../styles/globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TypeWeather',
  description: 'See the weather forecast in any city.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-typeweather bg-cover w-full h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
