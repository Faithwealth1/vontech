import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/service";
import Careers from "./pages/careers";
import Resources from "./pages/resources";
import Lendsqr from "./pages/lendsqr";
import CompleteFarmer from "./pages/Completefarmer";
import CarAid from "./pages/CarAid";
import Bamboo from "./pages/bamboo";
import Adhome from "./pages/adhome";
import Tusenti from "./pages/tusenti"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/lendsqr" element={<Lendsqr />} />
          <Route path="/completefarmer" element={<CompleteFarmer />} />
          <Route path="/carAid" element={<CarAid />} />
          <Route path="/bamboo" element={<Bamboo />} />
          <Route path="/adhome" element={<Adhome />} />
          <Route path="/tusenti" element={<Tusenti />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
