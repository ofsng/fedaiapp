export function Footer() {
    return (
      <footer className="border-t bg-white">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-600 hover:text-[#460eff]">Hakkımızda</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-[#460eff]">İletişim</a></li>
                <li><a href="/blog" className="text-gray-600 hover:text-[#460eff]">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Dersler</h3>
              <ul className="space-y-2">
                <li><a href="/modules/math" className="text-gray-600 hover:text-[#460eff]">Matematik</a></li>
                <li><a href="/modules/physics" className="text-gray-600 hover:text-[#460eff]">Fizik</a></li>
                <li><a href="/modules/chemistry" className="text-gray-600 hover:text-[#460eff]">Kimya</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Yardım</h3>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-600 hover:text-[#460eff]">SSS</a></li>
                <li><a href="/support" className="text-gray-600 hover:text-[#460eff]">Destek</a></li>
                <li><a href="/privacy" className="text-gray-600 hover:text-[#460eff]">Gizlilik</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">İletişim</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">info@fedai.com</li>
                <li className="text-gray-600">0850 123 45 67</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t pt-8 text-center text-gray-600">
            <p>&copy; 2024 Fedai Eğitim Platformu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    );
  }