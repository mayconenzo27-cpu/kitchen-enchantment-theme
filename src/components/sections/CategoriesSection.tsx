import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 1,
    name: 'Decoração',
    description: 'Transforme sua cozinha',
    icon: '🏺',
    color: 'bg-gradient-to-br from-kitchen-warm to-accent',
  },
  {
    id: 2,
    name: 'Limpeza',
    description: 'Produtos de qualidade',
    icon: '🧽',
    color: 'bg-gradient-to-br from-blue-400 to-blue-500',
  },
  {
    id: 3,
    name: 'Organização',
    description: 'Organize com estilo',
    icon: '📦',
    color: 'bg-gradient-to-br from-green-400 to-emerald-500',
  },
  {
    id: 4,
    name: 'Utensílios',
    description: 'Para cozinhar melhor',
    icon: '🥄',
    color: 'bg-gradient-to-br from-purple-400 to-purple-500',
  },
  {
    id: 5,
    name: 'Eletroportáteis',
    description: 'Tecnologia na cozinha',
    icon: '⚡',
    color: 'bg-gradient-to-br from-orange-400 to-red-500',
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4 bg-kitchen-soft">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-section-title text-kitchen-text mb-4">
            Categorias em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção cuidadosa de produtos para cada necessidade da sua cozinha
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0 shadow-kitchen animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-card-title text-kitchen-text mb-2 group-hover:text-kitchen-warm transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button variant="soft" size="sm" className="w-full">
                  Explorar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;