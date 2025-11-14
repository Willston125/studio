
import { Camera, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Camera className="w-10 h-10 text-amber-500" />,
    title: "Matériel Pro",
    description: "Accès à des caméras cinéma (Sony FX, Blackmagic) pour un rendu professionnel.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-amber-500" />,
    title: "Pratique Intensive",
    description: "La formation est axée à 80% sur la pratique sur le terrain pour une maîtrise rapide.",
  },
  {
    icon: <Users className="w-10 h-10 text-amber-500" />,
    title: "Réseau",
    description: "Intégrez une communauté de passionnés et de professionnels du cinéma à Djibouti.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">
            Pourquoi choisir <span className="text-amber-500">Cineworld</span> ?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nous offrons bien plus qu'une simple formation. C'est une immersion complète dans le monde du cinéma.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-border/50 text-center flex flex-col items-center p-6 transition-all duration-300 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2">
              <CardHeader className="p-0 mb-4">
                {feature.icon}
              </CardHeader>
              <CardContent className="p-0 flex-grow flex flex-col">
                <CardTitle className="text-xl font-headline mb-2 text-foreground">{feature.title}</CardTitle>
                <p className="text-muted-foreground text-sm flex-grow">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
