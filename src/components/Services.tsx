
import { Package, Home, Sparkles, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Package,
    title: "Transport de colis",
    description: "Livraison rapide et sécurisée de vos colis dans toute la ville"
  },
  {
    icon: Home,
    title: "Déménagement",
    description: "Service complet de déménagement avec des professionnels qualifiés"
  },
  {
    icon: Sparkles,
    title: "Nettoyage",
    description: "Services de nettoyage professionnel pour particuliers et entreprises"
  },
  {
    icon: Wrench,
    title: "Dépannage",
    description: "Intervention rapide pour tous vos besoins de dépannage"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Des solutions pour tous vos besoins
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services professionnels, conçus pour vous faciliter la vie au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
