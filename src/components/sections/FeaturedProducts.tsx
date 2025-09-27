import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Kit Organizador Premium',
    price: 89.90,
    originalPrice: 129.90,
    rating: 4.8,
    reviews: 127,
    image: 'https://via.placeholder.com/300x300/f4a261/ffffff?text=Kit+Organizador',
    badge: 'Mais Vendido',
    badgeColor: 'bg-kitchen-warm',
  },
  {
    id: 2,
    name: 'Dispenser de Óleo Elegante',
    price: 45.90,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: 'https://via.placeholder.com/300x300/e76f51/ffffff?text=Dispenser',
    badge: 'Novidade',
    badgeColor: 'bg-green-500',
  },
  {
    id: 3,
    name: 'Esponja Multiuso Pro',
    price: 12.90,
    originalPrice: 19.90,
    rating: 4.7,
    reviews: 234,
    image: 'https://via.placeholder.com/300x300/2a9d8f/ffffff?text=Esponja',
    badge: 'Oferta',
    badgeColor: 'bg-red-500',
  },
  {
    id: 4,
    name: 'Suporte para Utensílios',
    price: 34.90,
    originalPrice: null,
    rating: 4.6,
    reviews: 76,
    image: 'https://via.placeholder.com/300x300/264653/ffffff?text=Suporte',
    badge: 'Destaque',
    badgeColor: 'bg-purple-500',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-section-title text-kitchen-text mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os mais procurados pelos nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0 shadow-kitchen animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${product.badgeColor} text-white border-0`}
                >
                  {product.badge}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-card-title text-kitchen-text mb-2 line-clamp-2 group-hover:text-kitchen-warm transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3 space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-kitchen-warm">
                      R$ {product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <Button variant="kitchen" size="sm" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Adicionar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-kitchen-warm text-kitchen-warm hover:bg-kitchen-warm hover:text-white">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;