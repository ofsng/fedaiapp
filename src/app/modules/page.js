import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, BookOpen, Search, Brain, Database, Users, Sparkles, Bot, Target } from 'lucide-react';

export default function ModulesPage() {
  const activeModules = [
    {
      title: "AI Destekli Program Planlama",
      description: "Yapay zeka desteği ile kişiselleştirilmiş günlük ve haftalık çalışma programları oluşturun",
      icon: <Calendar className="w-12 h-12 text-[#460eff]" />,
      href: "/modules/planner"
    },
    {
      title: "Akıllı Not Sistemi",
      description: "Karmaşık notlarınızı düzenli ve erişilebilir hale getirin",
      icon: <BookOpen className="w-12 h-12 text-[#460eff]" />,
      href: "/modules/notes"
    },
    {
      title: "Kaynak Tarayıcı",
      description: "Sınav hazırlık ve günlük çalışmalar için akıllı kaynak önerileri",
      icon: <Search className="w-12 h-12 text-[#460eff]" />,
      href: "/modules/resources"
    }
  ];

  const upcomingModules = [
    {
      title: "Profesyonel AI Çözümleri",
      description: "AI to PPTX ve Gelişmiş Chatbot ile çalışmalarınızı optimize edin",
      icon: <Brain className="w-12 h-12 text-gray-400" />,
      status: "Yakında"
    },
    {
      title: "Devasa Soru Havuzu",
      description: "Binlerce soru ve detaylı çözüm içeren kapsamlı bir soru bankası",
      icon: <Database className="w-12 h-12 text-gray-400" />,
      status: "Geliştirme Aşamasında"
    },
    {
      title: "Öğrenci Destek Sistemi",
      description: "Motivasyon ve hedefe yönelik pedagojik destek mekanizmaları",
      icon: <Target className="w-12 h-12 text-gray-400" />,
      status: "Yapım Aşamasında"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Aktif Modüller</h1>
        <p className="text-gray-600 text-center mb-12">
          Eğitim yolculuğunuzu destekleyecek akıllı çözümler
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {activeModules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  {module.icon}
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                  {module.title}
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  {module.description}
                </p>
                <Link href={module.href}>
                  <Button className="w-full bg-[#460eff] hover:bg-blue-700">
                    Kullanmaya Başla
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-4">İnşası Devam Eden Modüller</h2>
        <p className="text-gray-600 text-center mb-12">
          Yakında sizlerle buluşacak yeni özelliklerimiz
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingModules.map((module, index) => (
            <Card key={index} className="opacity-75">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  {module.icon}
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                  {module.title}
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  {module.description}
                </p>
                <div className="w-full text-center py-2 bg-gray-100 rounded-md text-gray-500">
                  {module.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}