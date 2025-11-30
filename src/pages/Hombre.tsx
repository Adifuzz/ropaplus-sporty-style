import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  { id: 1, name: "Camiseta Running Pro", price: "45.00", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop", category: "ropa" },
  { id: 2, name: "Zapatillas Ultra Boost", price: "180.00", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop", category: "zapatillas" },
  { id: 3, name: "Pantalón Deportivo", price: "65.00", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop", category: "ropa" },
  { id: 4, name: "Sudadera Tech", price: "75.00", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", category: "ropa" },
  { id: 5, name: "Zapatillas Training", price: "120.00", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=800&fit=crop", category: "zapatillas" },
  { id: 6, name: "Shorts Deportivos", price: "35.00", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop", category: "ropa" },
  { id: 7, name: "Chaqueta Impermeable", price: "95.00", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop", category: "ropa" },
  { id: 8, name: "Mochila Deportiva", price: "55.00", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop", category: "accesorios" },
];

const Hombre = () => {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-black text-primary-foreground mb-4 tracking-tight">
              COLECCIÓN HOMBRE
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              Equipamiento deportivo de alto rendimiento diseñado para el atleta moderno
            </p>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" size="sm">Todos</Button>
                <Button variant="ghost" size="sm">Ropa</Button>
                <Button variant="ghost" size="sm">Zapatillas</Button>
                <Button variant="ghost" size="sm">Accesorios</Button>
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

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
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

export default Hombre;
