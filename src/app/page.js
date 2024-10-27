import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import Link from "next/link";
import { BookOpen, Users, Award } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-[#460eff]" />,
      title: "İnteraktif Dersler",
      description: "Canlı ve kayıtlı derslerle kesintisiz öğrenme deneyimi"
    },
    {
      icon: <Users className="h-10 w-10 text-[#460eff]" />,
      title: "Grup Çalışmaları",
      description: "Arkadaşlarınla birlikte öğren ve gelişim göster"
    },
    {
      icon: <Award className="h-10 w-10 text-[#460eff]" />,
      title: "Başarı Takibi",
      description: "Kişiselleştirilmiş öğrenme yolculuğu ve anlık geri bildirimler"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#460eff] mb-6">
            Fedai ile Eğitimi Yeniden Keşfet!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Modern öğrenme teknikleri ve interaktif içeriklerle geleceğe hazırlan
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button className="bg-[#460eff] hover:bg-blue-700 px-8 py-6 text-lg rounded-full">
                Ücretsiz Başla
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
                Daha Fazla Bilgi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Neden Fedai?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dersler */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Popüler Dersler</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Matematik', 'Fizik', 'Kimya'].map((subject) => (
              <Card key={subject} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{subject}</CardTitle>
                  <CardDescription>
                    {subject} dersini interaktif içeriklerle keşfet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/modules/${subject.toLowerCase()}`}>
                    <Button variant="outline" className="w-full">
                      Derse Git
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}