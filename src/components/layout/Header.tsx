import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="gradient-kitchen text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-sm font-medium animate-fade-up">
            🚚 ENTREGAMOS PARA TODO O BRASIL - Frete Grátis a partir de R$ 250
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-kitchen-warm rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-kitchen-text">Magia</h1>
              <p className="text-sm text-muted-foreground -mt-1">da Cozinha</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-kitchen-warm transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-kitchen-warm transition-colors font-medium">
              Produtos
            </a>
            <a href="#" className="text-foreground hover:text-kitchen-warm transition-colors font-medium">
              Decoração
            </a>
            <a href="#" className="text-foreground hover:text-kitchen-warm transition-colors font-medium">
              Limpeza
            </a>
            <a href="#" className="text-foreground hover:text-kitchen-warm transition-colors font-medium">
              Organização
            </a>
            <a href="#" className="text-foreground hover:text-kitchen-warm transition-colors font-medium">
              Promoções
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Buscar produtos para sua cozinha..."
                className="pr-10 bg-kitchen-soft border-kitchen-neutral"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-kitchen-warm text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;