import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Hombre from "./pages/Hombre";
import Mujer from "./pages/Mujer";
import Novedades from "./pages/Novedades";
import Ofertas from "./pages/Ofertas";
import Zapatillas from "./pages/Zapatillas";
import RopaDeportiva from "./pages/RopaDeportiva";
import Accesorios from "./pages/Accesorios";
import Training from "./pages/Training";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hombre" element={<Hombre />} />
          <Route path="/mujer" element={<Mujer />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/zapatillas" element={<Zapatillas />} />
          <Route path="/ropa-deportiva" element={<RopaDeportiva />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/training" element={<Training />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
