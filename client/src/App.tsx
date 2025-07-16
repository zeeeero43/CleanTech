import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Industriereinigung from "@/pages/services/industriereinigung";
import Bauschlussreinigung from "@/pages/services/bauschlussreinigung";
import Unterhaltsreinigung from "@/pages/services/unterhaltsreinigung";
import Grundreinigung from "@/pages/services/grundreinigung";
import Fensterreinigung from "@/pages/services/fensterreinigung";
import Impressum from "@/pages/legal/impressum";
import Datenschutz from "@/pages/legal/datenschutz";
import Sitemap from "@/pages/sitemap";
function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services/industriereinigung" component={Industriereinigung} />
      <Route path="/services/bauschlussreinigung" component={Bauschlussreinigung} />
      <Route path="/services/unterhaltsreinigung" component={Unterhaltsreinigung} />
      <Route path="/services/grundreinigung" component={Grundreinigung} />
      <Route path="/services/fensterreinigung" component={Fensterreinigung} />
      <Route path="/legal/impressum" component={Impressum} />
      <Route path="/legal/datenschutz" component={Datenschutz} />
      <Route path="/sitemap" component={Sitemap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
