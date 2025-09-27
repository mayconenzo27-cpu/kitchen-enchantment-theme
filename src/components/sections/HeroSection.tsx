import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-kitchen.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center gradient-kitchen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Produtos para cozinha - Magia da Cozinha"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kitchen-warm/80 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-up">
        <h1 className="text-hero mb-6">
          <span className="block">VARIEDADE E</span>
          <span className="block text-kitchen-text bg-white/90 px-6 py-2 rounded-lg inline-block mt-2">
            QUALIDADE
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 font-light">
          Tudo o que você <span className="font-semibold">precisa</span>
        </p>
        <p className="text-xl md:text-2xl mb-8 font-light">
          para sua cozinha
        </p>

        <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
          VER PRODUTOS
        </Button>
      </div>

      {/* Floating Elements - Product Showcase */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl">🧽</span>
          </div>
          <div className="w-20 h-20 bg-white/25 rounded-full backdrop-blur-sm flex items-center justify-center">
            <span className="text-3xl">🥄</span>
          </div>
          <div className="w-14 h-14 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
            <span className="text-xl">🍳</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;