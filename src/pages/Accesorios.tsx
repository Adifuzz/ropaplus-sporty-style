import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  { id: 1, name: "Mochila Deportiva Pro", price: "55.00", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop", category: "Mochilas" },
  { id: 2, name: "Botella Térmica 1L", price: "28.00", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=800&fit=crop", category: "Hidratación" },
  { id: 3, name: "Gorra Performance", price: "25.00", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop", category: "Gorras" },
  { id: 4, name: "Guantes Training", price: "32.00", image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=800&fit=crop", category: "Guantes" },
  { id: 5, name: "Calcetines Sport Pack x3", price: "18.00", image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop", category: "Calcetines" },
  { id: 6, name: "Banda Elástica Set", price: "35.00", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=800&fit=crop", category: "Entrenamiento" },
  { id: 7, name: "Toalla Microfibra", price: "22.00", image: "https://images.unsplash.com/photo-1600096194735-ec70f8f7b6f1?w=600&h=800&fit=crop", category: "Toallas" },
  { id: 8, name: "Riñonera Running", price: "38.00", image: "https://images.unsplash.com/photo-1590739225017-e8e71e2c2adf?w=600&h=800&fit=crop", category: "Bolsas" },
];

const Accesorios = () => {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-secondary/80 to-accent py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-black text-secondary-foreground mb-4 tracking-tight">
              ACCESORIOS
            </h1>
            <p className="text-xl text-secondary-foreground/90 max-w-2xl">
              Los detalles que marcan la diferencia en tu entrenamiento diario
            </p>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" size="sm">Todos</Button>
                <Button variant="ghost" size="sm">Mochilas</Button>
                <Button variant="ghost" size="sm">Hidratación</Button>
                <Button variant="ghost" size="sm">Gorras</Button>
                <Button variant="ghost" size="sm">Entrenamiento</Button>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="newest">Más Recientes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-black text-lg mb-2">ENVÍO GRATIS</h3>
                <p className="text-sm text-muted-foreground">En compras superiores a $50</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-2">GARANTÍA TOTAL</h3>
                <p className="text-sm text-muted-foreground">30 días de devolución</p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-2">CALIDAD PREMIUM</h3>
                <p className="text-sm text-muted-foreground">Materiales de primera</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-bold text-lg mb-2 tracking-tight">{product.name}</h3>
                    <p className="text-2xl font-black text-accent">${product.price}</p>
                    <Button className="w-full mt-4" size="sm">
                      AGREGAR AL CARRITO
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accesorios;
