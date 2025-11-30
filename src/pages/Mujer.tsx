import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  { id: 1, name: "Leggings Performance", price: "55.00", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", category: "ropa" },
  { id: 2, name: "Sports Bra Elite", price: "42.00", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=800&fit=crop", category: "ropa" },
  { id: 3, name: "Zapatillas Running", price: "165.00", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=800&fit=crop", category: "zapatillas" },
  { id: 4, name: "Chaqueta Yoga", price: "85.00", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop", category: "ropa" },
  { id: 5, name: "Top Deportivo", price: "38.00", image: "https://images.unsplash.com/photo-1522706604291-210a56c3b376?w=600&h=800&fit=crop", category: "ropa" },
  { id: 6, name: "Zapatillas Training", price: "140.00", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=800&fit=crop", category: "zapatillas" },
  { id: 7, name: "Conjunto Deportivo", price: "95.00", image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&h=800&fit=crop", category: "ropa" },
  { id: 8, name: "Botella Térmica", price: "28.00", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=800&fit=crop", category: "accesorios" },
];

const Mujer = () => {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent via-accent/90 to-primary py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-black text-accent-foreground mb-4 tracking-tight">
              COLECCIÓN MUJER
            </h1>
            <p className="text-xl text-accent-foreground/90 max-w-2xl">
              Diseño y rendimiento unidos en cada prenda para la atleta de hoy
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

export default Mujer;
