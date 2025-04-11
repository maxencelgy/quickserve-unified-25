
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Tableau de bord</h1>
          <Button variant="outline" onClick={() => navigate("/")}>
            Nouvelle réservation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-4 md:p-6">
            <h3 className="font-semibold mb-2">Réservations en cours</h3>
            <p className="text-muted-foreground">Aucune réservation en cours</p>
          </Card>

          <Card className="p-4 md:p-6">
            <h3 className="font-semibold mb-2">Dernières réservations</h3>
            <p className="text-muted-foreground">Aucun historique disponible</p>
          </Card>

          <Card className="p-4 md:p-6">
            <h3 className="font-semibold mb-2">Favoris</h3>
            <p className="text-muted-foreground">Aucun service favori</p>
          </Card>
        </div>

        <div className="mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Services recommandés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="p-3 md:p-4">
                <h4 className="font-medium">Service {index}</h4>
                <p className="text-sm text-muted-foreground">Description du service</p>
                <Button className="mt-3 md:mt-4 w-full" variant="outline" size={isMobile ? "sm" : "default"}>
                  Réserver
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
