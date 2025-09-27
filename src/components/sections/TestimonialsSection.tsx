import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    rating: 5,
    comment: 'Produtos de excelente qualidade! Minha cozinha ficou muito mais organizada e bonita. Recomendo demais!',
    avatar: 'MS',
  },
  {
    id: 2,
    name: 'João Santos',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    comment: 'Entrega rápida e produtos chegaram em perfeito estado. O atendimento é nota 10!',
    avatar: 'JS',
  },
  {
    id: 3,
    name: 'Ana Costa',
    location: 'Belo Horizonte, MG',
    rating: 5,
    comment: 'Comprei o kit organizador e superou minhas expectativas. Muito prático e durável!',
    avatar: 'AC',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-kitchen-soft">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-section-title text-kitchen-text mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de quem já transformou sua cozinha com nossos produtos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0 shadow-kitchen animate-fade-up bg-background"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-kitchen-warm/30 mr-2" />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-kitchen-text mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-kitchen-warm text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-kitchen-text">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;