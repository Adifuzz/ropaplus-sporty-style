import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const saleProducts = [
  { id: 1, name: "Zapatillas Runner Pro", oldPrice: "150.00", price: "99.00", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop", discount: "-34%" },
  { id: 2, name: "Sudadera Classic", oldPrice: "75.00", price: "45.00", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", discount: "-40%" },
  { id: 3, name: "Pantalón Training", oldPrice: "65.00", price: "39.00", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop", discount: "-40%" },
  { id: 4, name: "Leggings Sport", oldPrice: "55.00", price: "35.00", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=800&fit=crop", discount: "-36%" },
  { id: 5, name: "Camiseta Tech", oldPrice: "45.00", price: "25.00", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop", discount: "-44%" },
  { id: 6, name: "Zapatillas Training", oldPrice: "120.00", price: "79.00", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=800&fit=crop", discount: "-34%" },
  { id: 7, name: "Chaqueta Outdoor", oldPrice: "110.00", price: "65.00", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop", discount: "-41%" },
  { id: 8, name: "Mochila Sport", oldPrice: "55.00", price: "35.00", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop", discount: "-36%" },
];

const Ofertas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-destructive py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 text-lg px-4 py-2 bg-destructive-foreground text-destructive animate-pulse">
              HASTA -50%
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-destructive-foreground mb-4 tracking-tight">
              MEGA OFERTAS
            </h1>
            <p className="text-xl text-destructive-foreground/90 max-w-2xl mx-auto">
              Descuentos increíbles en productos seleccionados - Stock limitado
            </p>
          </div>
        </section>

        {/* Countdown Banner */}
        <section className="bg-accent py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-2xl font-black text-accent-foreground tracking-tight">
              ⏰ OFERTA POR TIEMPO LIMITADO - ¡NO TE LO PIERDAS!
            </p>
          </div>
        </section>

        {/* Sale Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 p-6 bg-muted rounded-lg">
              <h2 className="text-2xl font-black mb-2 tracking-tight">DESCUENTOS EXCLUSIVOS</h2>
              <p className="text-muted-foreground">Aprovecha estos precios especiales solo por tiempo limitado</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {saleProducts.map((product) => (
                <Card key={product.id} className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Badge className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground text-lg font-black">
                      {product.discount}
                    </Badge>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 tracking-tight">{product.name}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <p className="text-2xl font-black text-destructive">${product.price}</p>
                      <p className="text-sm text-muted-foreground line-through">${product.oldPrice}</p>
                    </div>
                    <Button className="w-full" size="sm" variant="destructive">
                      COMPRAR AHORA
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
              ¿BUSCAS MÁS OFERTAS?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter y sé el primero en enterarte de nuevas ofertas y descuentos exclusivos
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button size="lg" className="whitespace-nowrap">
                SUSCRIBIRSE
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ofertas;
