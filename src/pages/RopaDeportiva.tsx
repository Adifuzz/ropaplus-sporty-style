import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  { id: 1, name: "Camiseta Running Pro", price: "45.00", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop", category: "Tops" },
  { id: 2, name: "Pantalón Training", price: "65.00", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop", category: "Pantalones" },
  { id: 3, name: "Sudadera Tech", price: "75.00", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", category: "Sudaderas" },
  { id: 4, name: "Leggings Performance", price: "55.00", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=800&fit=crop", category: "Pantalones" },
  { id: 5, name: "Chaqueta Wind", price: "95.00", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop", category: "Chaquetas" },
  { id: 6, name: "Shorts Deportivos", price: "35.00", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop", category: "Shorts" },
  { id: 7, name: "Top Compression", price: "42.00", image: "https://images.unsplash.com/photo-1522706604291-210a56c3b376?w=600&h=800&fit=crop", category: "Tops" },
  { id: 8, name: "Conjunto Completo", price: "110.00", image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&h=800&fit=crop", category: "Conjuntos" },
];

const RopaDeportiva = () => {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop"
            alt="Ropa Deportiva Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <h1 className="text-5xl md:text-7xl font-black text-primary-foreground mb-4 tracking-tight">
                ROPA DEPORTIVA
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Diseñada para moverte sin límites. Confort y estilo en cada prenda
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" size="sm">Todo</Button>
                <Button variant="ghost" size="sm">Tops</Button>
                <Button variant="ghost" size="sm">Pantalones</Button>
                <Button variant="ghost" size="sm">Sudaderas</Button>
                <Button variant="ghost" size="sm">Chaquetas</Button>
                <Button variant="ghost" size="sm">Shorts</Button>
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

export default RopaDeportiva;
