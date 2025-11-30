import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  { id: 1, name: "Ultraboost Running", price: "180.00", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop", type: "Running" },
  { id: 2, name: "Training Pro X", price: "140.00", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=800&fit=crop", type: "Training" },
  { id: 3, name: "Speed Elite", price: "165.00", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=800&fit=crop", type: "Running" },
  { id: 4, name: "Court Master", price: "120.00", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=800&fit=crop", type: "Lifestyle" },
  { id: 5, name: "Trail Runner Max", price: "155.00", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=800&fit=crop", type: "Trail" },
  { id: 6, name: "Urban Flex", price: "95.00", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=800&fit=crop", type: "Lifestyle" },
  { id: 7, name: "Performance Plus", price: "170.00", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=800&fit=crop", type: "Training" },
  { id: 8, name: "Sprint Pro", price: "185.00", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=800&fit=crop", type: "Running" },
];

const Zapatillas = () => {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1080&fit=crop"
            alt="Zapatillas Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl md:text-7xl font-black text-primary-foreground mb-4 tracking-tight">
                ZAPATILLAS
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                El calzado perfecto para cada momento, cada entrenamiento, cada objetivo
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" size="sm">Todas</Button>
                <Button variant="ghost" size="sm">Running</Button>
                <Button variant="ghost" size="sm">Training</Button>
                <Button variant="ghost" size="sm">Lifestyle</Button>
                <Button variant="ghost" size="sm">Trail</Button>
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
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.type}</p>
                    <h3 className="font-bold text-lg mb-2 tracking-tight">{product.name}</h3>
                    <p className="text-2xl font-black text-accent">${product.price}</p>
                    <Button className="w-full mt-4" size="sm">
                      VER DETALLES
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

export default Zapatillas;
