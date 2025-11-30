import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const newProducts = [
  { id: 1, name: "Zapatillas Ultraboost 2024", price: "190.00", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop", badge: "NUEVO" },
  { id: 2, name: "Camiseta Tech Flow", price: "48.00", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop", badge: "NUEVO" },
  { id: 3, name: "Sudadera Alpha", price: "82.00", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", badge: "EXCLUSIVO" },
  { id: 4, name: "Leggings Pro Max", price: "62.00", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=800&fit=crop", badge: "NUEVO" },
  { id: 5, name: "Chaqueta Storm", price: "125.00", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop", badge: "EXCLUSIVO" },
  { id: 6, name: "Zapatillas Speed Elite", price: "175.00", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=800&fit=crop", badge: "NUEVO" },
  { id: 7, name: "Top Compression", price: "45.00", image: "https://images.unsplash.com/photo-1522706604291-210a56c3b376?w=600&h=800&fit=crop", badge: "NUEVO" },
  { id: 8, name: "Mochila Tech Pro", price: "68.00", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop", badge: "EXCLUSIVO" },
];

const Novedades = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-accent to-primary py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 text-lg px-4 py-2 bg-accent-foreground text-accent">RECIÉN LLEGADOS</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-primary-foreground mb-4 tracking-tight">
              NOVEDADES 2024
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Las últimas colecciones con tecnología de vanguardia ya están aquí
            </p>
          </div>
        </section>

        {/* Featured Launch */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-accent text-accent-foreground">LANZAMIENTO DESTACADO</Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                  COLECCIÓN SPRING 2024
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Innovación en cada detalle. Tejidos respirables, diseño ergonómico y estilo incomparable se unen en nuestra nueva colección de primavera.
                </p>
                <Button size="lg" className="font-bold">
                  EXPLORAR COLECCIÓN
                </Button>
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=800&fit=crop"
                  alt="Spring Collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* New Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-12 tracking-tight">
              ÚLTIMOS PRODUCTOS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProducts.map((product) => (
                <Card key={product.id} className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
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

export default Novedades;
