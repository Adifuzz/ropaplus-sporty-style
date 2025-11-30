import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  { id: 1, name: "Zapatillas Training Elite", price: "140.00", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=800&fit=crop", category: "Calzado" },
  { id: 2, name: "Pantalón Training Pro", price: "58.00", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop", category: "Ropa" },
  { id: 3, name: "Top Compression", price: "42.00", image: "https://images.unsplash.com/photo-1522706604291-210a56c3b376?w=600&h=800&fit=crop", category: "Ropa" },
  { id: 4, name: "Guantes Gym Pro", price: "28.00", image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=800&fit=crop", category: "Accesorios" },
  { id: 5, name: "Bandas Elásticas Set", price: "35.00", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=800&fit=crop", category: "Equipamiento" },
  { id: 6, name: "Shorts Training", price: "38.00", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop", category: "Ropa" },
  { id: 7, name: "Camiseta Tech Dry", price: "45.00", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop", category: "Ropa" },
  { id: 8, name: "Colchoneta Yoga Pro", price: "48.00", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=800&fit=crop", category: "Equipamiento" },
];

const Training = () => {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=1080&fit=crop"
            alt="Training Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl md:text-7xl font-black text-primary-foreground mb-4 tracking-tight">
                TRAINING
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mb-8">
                Todo lo que necesitas para llevar tu entrenamiento al siguiente nivel
              </p>
              <Button size="lg" className="font-bold">
                EXPLORAR COLECCIÓN
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-accent-foreground mb-2">💪</div>
                <h3 className="font-black text-lg mb-2 text-accent-foreground">MÁXIMO RENDIMIENTO</h3>
                <p className="text-sm text-accent-foreground/80">Equipamiento diseñado por profesionales</p>
              </div>
              <div>
                <div className="text-4xl font-black text-accent-foreground mb-2">🎯</div>
                <h3 className="font-black text-lg mb-2 text-accent-foreground">VERSATILIDAD</h3>
                <p className="text-sm text-accent-foreground/80">Para cada tipo de entrenamiento</p>
              </div>
              <div>
                <div className="text-4xl font-black text-accent-foreground mb-2">⚡</div>
                <h3 className="font-black text-lg mb-2 text-accent-foreground">TECNOLOGÍA</h3>
                <p className="text-sm text-accent-foreground/80">Innovación en cada producto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" size="sm">Todo</Button>
                <Button variant="ghost" size="sm">Calzado</Button>
                <Button variant="ghost" size="sm">Ropa</Button>
                <Button variant="ghost" size="sm">Accesorios</Button>
                <Button variant="ghost" size="sm">Equipamiento</Button>
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
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">
              PRODUCTOS DESTACADOS
            </h2>
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
                      COMPRAR AHORA
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

export default Training;
