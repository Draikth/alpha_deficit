import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from './nav-menu/navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'Alpha Dezicit',
    template: '%s | Alpha Defizit',
  },
  description: 'Alpha Defizit Band Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <div>
            {/* <nav>
              <div>
                <Link href="/">Home</Link>
                <Link href="/bio">Bio</Link>
                <Link href="/media">Media</Link>
                <Link href="/shows">Shows</Link>
                <Link href="/merch">Merch</Link>
                <Link href="/media">Contact</Link>
              </div>
            </nav> */}
            <Navbar />
          </div>
        </header>
        {children}
        <footer>Copyright © 2024 Alpha Defizit</footer>
      </body>
    </html>
  );
}
