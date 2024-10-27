import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#460eff]">Fedai</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/modules" className="transition-colors hover:text-[#460eff]">
            Modüller
          </Link>
          <Link href="/about" className="transition-colors hover:text-[#460eff]">
            Hakkımızda
          </Link>
          <Link href="/contact" className="transition-colors hover:text-[#460eff]">
            İletişim
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="outline">Giriş Yap</Button>
          </Link>
          <Link href="/register">
            <Button className="bg-[#460eff] hover:bg-blue-700">Kayıt Ol</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}