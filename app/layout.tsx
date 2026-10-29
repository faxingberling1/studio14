import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Studio 14 — Your Brand. Our Creativity. Real Results.',
  description: 'Studio 14 helps ambitious brands grow through social media marketing, social media management, UI/UX, web development, and graphic design.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
