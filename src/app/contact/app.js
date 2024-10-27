import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-[#460eff]" />,
      title: "Telefon",
      details: "+90 (555) 123 45 67",
      description: "Pazartesi - Cuma, 09:00 - 18:00"
    },
    {
      icon: <Mail className="h-6 w-6 text-[#460eff]" />,
      title: "E-posta",
      details: "iletisim@fedai.com",
      description: "Size en kısa sürede dönüş yapacağız"
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#460eff]" />,
      title: "Adres",
      details: "Teknokent, Ankara",
      description: "Randevu ile ziyaret edebilirsiniz"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">İletişim</h1>
          <p className="text-gray-600 text-center mb-12">
            Sorularınız için bize ulaşabilirsiniz
          </p>

          {/* İletişim Bilgileri */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#460eff] mb-1">{item.details}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* İletişim Formu */}
          <Card>
            <CardHeader>
              <CardTitle>Mesaj Gönder</CardTitle>
              <CardDescription>
                Form aracılığıyla bize mesaj gönderin, en kısa sürede dönüş yapalım
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">
                      Ad Soyad
                    </label>
                    <Input id="name" placeholder="Adınız Soyadınız" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">
                      E-posta
                    </label>
                    <Input id="email" type="email" placeholder="ornek@mail.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="subject">
                    Konu
                  </label>
                  <Input id="subject" placeholder="Mesajınızın konusu" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    Mesaj
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Mesajınızı buraya yazın..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-[#460eff] hover:bg-blue-700">
                  Mesaj Gönder
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}