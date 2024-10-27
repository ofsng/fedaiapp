import './globals.css';
import { Inter } from 'next/font/google';
import { MainNav } from '../components/layout/main-nav.js';
import { Footer } from '../components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fedai Eğitim Platformu',
  description: 'Yeni nesil eğitim platformu ile geleceğe hazırlan',
  keywords: 'eğitim, online eğitim, lise, matematik, fizik, kimya',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <MainNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}