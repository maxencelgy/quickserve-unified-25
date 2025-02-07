
import { useState } from "react";
import { User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion réussie
    navigate("/");
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="w-full max-w-md space-y-8 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Connexion</h2>
            <p className="text-muted-foreground mt-2">
              Accédez à votre compte QuickServe
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-primary hover:underline">
                Mot de passe oublié ?
              </a>
            </div>

            <Button type="submit" className="w-full">
              Se connecter
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Pas encore de compte ?{" "}
                <a href="#" className="text-primary hover:underline">
                  S'inscrire
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
