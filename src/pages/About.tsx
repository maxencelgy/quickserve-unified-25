
const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">À Propos de QuickServe</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une plateforme innovante conçue pour simplifier votre quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-muted-foreground mb-6">
              QuickServe a été créé avec une vision simple : rendre les services du quotidien accessibles à tous, rapidement et efficacement.
            </p>
            <p className="text-muted-foreground mb-6">
              Notre plateforme connecte les utilisateurs avec des professionnels qualifiés pour tous types de services, du transport au dépannage.
            </p>
          </div>
          
          <div className="bg-secondary/30 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Nos Valeurs</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Qualité :</span>
                <span className="text-muted-foreground">Des prestations de service irréprochables</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Rapidité :</span>
                <span className="text-muted-foreground">Une prise en charge immédiate de vos besoins</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Sécurité :</span>
                <span className="text-muted-foreground">La protection de vos données et de vos transactions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
