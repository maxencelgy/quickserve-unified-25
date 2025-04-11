
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-8">
            Votre service en un clic
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Simplifiez votre quotidien avec{" "}
            <span className="text-gradient">QuickServe</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transport, déménagement, nettoyage, dépannage & accompagnement – tous vos services, rapidement et en toute sécurité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group transition-all duration-300 hover:bg-primary/90 hover:scale-105" asChild>
              <Link to="/services">
                Réserver Maintenant
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-secondary/50 transition-all duration-300" asChild>
              <Link to="/about">
                En savoir plus
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
            alt="QuickServe en action" 
            className="mx-auto rounded-lg shadow-xl w-full max-w-4xl object-cover h-80 transition-transform hover:scale-[1.02] duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <p className="text-sm font-medium text-primary">Plus de 10 000 clients satisfaits</p>
          </div>
        </div>
      </div>

      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-2xl" />
      </div>
    </section>
  );
};

export default Hero;
