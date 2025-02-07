
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Tableau de bord</h1>
          <Button variant="outline" onClick={() => navigate("/")}>
            Nouvelle réservation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Réservations en cours</h3>
            <p className="text-muted-foreground">Aucune réservation en cours</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-2">Dernières réservations</h3>
            <p className="text-muted-foreground">Aucun historique disponible</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-2">Favoris</h3>
            <p className="text-muted-foreground">Aucun service favori</p>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Services recommandés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="p-4">
                <h4 className="font-medium">Service {index}</h4>
                <p className="text-sm text-muted-foreground">Description du service</p>
                <Button className="mt-4 w-full" variant="outline">
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
