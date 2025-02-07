
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-bold text-xl">
            QuickServe
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              Comment ça marche
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="default" size="sm" className="ml-4">
              Connexion
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 fade-in">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                Comment ça marche
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
              <Button variant="default" size="sm" className="w-full">
                Connexion
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
