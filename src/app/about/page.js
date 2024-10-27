import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Users2, Target, Rocket, Phone } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Users2 className="h-8 w-8 text-[#460eff]" />,
      title: "Öğrenci Odaklı",
      description: "Her öğrencinin öğrenme yolculuğunu benzersiz kılan yaklaşımımız"
    },
    {
      icon: <Target className="h-8 w-8 text-[#460eff]" />,
      title: "Hedef Odaklı",
      description: "Başarıya giden yolda net hedefler ve stratejik planlama"
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#460eff]" />,
      title: "Yenilikçi Eğitim",
      description: "Modern teknoloji ile desteklenen interaktif öğrenme deneyimi"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Fedai Hakkında
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            2024 yılında kurulan Fedai, lise öğrencilerinin eğitim yolculuğunda 
            yanlarında olmak için yola çıktı. Amacımız, teknolojiyi ve modern 
            eğitim yöntemlerini kullanarak öğrenmeyi daha etkili ve eğlenceli 
            hale getirmek.
          </p>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Değerlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ekip */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Ekibimiz</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-1">Eğitmen {index + 1}</h3>
                  <p className="text-gray-600 mb-4">Uzman Eğitmen</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-20 bg-[#460eff] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bizimle İletişime Geçin</h2>
          <p className="text-xl mb-8">
            Sorularınız için ekibimiz sizinle iletişime geçmekten mutluluk duyacaktır
          </p>
          <Link href="/contact">
            <Button variant="outline" className="bg-white text-[#460eff] hover:bg-gray-100">
              <Phone className="mr-2 h-4 w-4" />
              İletişime Geç
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}