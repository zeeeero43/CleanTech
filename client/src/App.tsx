import { Switch, Route } from "wouter";
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
import Bueroreinigung from "@/pages/services/bueroreinigung";
import Fensterreinigung from "@/pages/services/fensterreinigung";
import Impressum from "@/pages/legal/impressum";
import Datenschutz from "@/pages/legal/datenschutz";
import FAQ from "@/pages/legal/faq";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services/industriereinigung" component={Industriereinigung} />
      <Route path="/services/bauschlussreinigung" component={Bauschlussreinigung} />
      <Route path="/services/bueroreinigung" component={Bueroreinigung} />
      <Route path="/services/fensterreinigung" component={Fensterreinigung} />
      <Route path="/legal/impressum" component={Impressum} />
      <Route path="/legal/datenschutz" component={Datenschutz} />
      <Route path="/legal/faq" component={FAQ} />
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
