import Layout from '@/components/layout';
import { Roboto } from 'next/font/google';

import './globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin-ext', 'cyrillic-ext'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`antialiased ${roboto.className} bg-main-950 text-main-200`}
      >
        <div className="container-area">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
