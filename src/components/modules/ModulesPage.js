import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { BookOpen, Atom, FlaskConical } from 'lucide-react';

export default function ModulesPage() {
  const modules = [
    {
      title: "Matematik",
      description: "Temel matematik konuları, problem çözme teknikleri ve sınav stratejileri",
      icon: <BookOpen className="w-12 h-12 text-[#460eff]" />,
      href: "/modules/math"
    },
    {
      title: "Fizik",
      description: "Mekanik, elektrik, manyetizma ve modern fizik konuları",
      icon: <Atom className="w-12 h-12 text-[#460eff]" />,
      href: "/modules/physics"
    },
    {
      title: "Kimya",
      description: "Organik, anorganik kimya ve kimyasal tepkimeler",
      icon: <FlaskConical className="w-12 h-12 text-[#460eff]" />,
      href: "/modules/chemistry"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Ders Modülleri</h1>
        <p className="text-gray-600 text-center mb-12">
          Alanında uzman eğitmenler tarafından hazırlanmış kapsamlı ders içerikleri
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
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
                    Detayları Gör
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}