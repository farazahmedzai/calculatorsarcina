import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import the working components
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Import pages
import WorkingHome from "./working-home";
import CalculatorSarcina from "@/pages/calculator-sarcina";
import PlanificareePensie from "@/pages/planificare-pensie";
import TipuriPensii from "@/pages/tipuri-pensii";
import LegislatieResurse from "@/pages/legislatie-resurse";
import Blog from "@/pages/blog";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <Switch>
          <Route path="/" component={WorkingHome} />
          <Route path="/calculator-sarcina" component={CalculatorSarcina} />
          <Route path="/planificare-pensie" component={PlanificareePensie} />
          <Route path="/tipuri-pensii" component={TipuriPensii} />
          <Route path="/legislatie-resurse" component={LegislatieResurse} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer />
    </div>
  );
}

function FixedApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default FixedApp;