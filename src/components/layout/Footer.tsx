import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kitchen-text text-white">
      {/* Newsletter Section */}
      <div className="bg-kitchen-warm py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Receba nossas novidades e ofertas especiais
          </h3>
          <p className="mb-6 text-white/90">
            Cadastre-se e seja o primeiro a saber sobre promoções e lançamentos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="bg-white text-kitchen-text border-0 flex-1"
            />
            <Button variant="secondary" className="bg-white text-kitchen-warm hover:bg-white/90">
              <Mail className="w-4 h-4 mr-2" />
              Inscrever-se
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-kitchen-warm rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Magia da Cozinha</h3>
                  <p className="text-sm text-white/70">Sua cozinha, nossa paixão</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Há mais de 10 anos oferecendo os melhores produtos para tornar sua cozinha 
                mais prática, organizada e bonita.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Produtos</a></li>
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Promoções</a></li>
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Blog</a></li>
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Fale Conosco</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Categorias</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Decoração</a></li>
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Limpeza</a></li>
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Organização</a></li>
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Utensílios</a></li>
                <li><a href="#" className="text-white/80 hover:text-kitchen-warm transition-colors">Eletroportáteis</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-kitchen-warm" />
                  <span className="text-white/80 text-sm">(11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-kitchen-warm" />
                  <span className="text-white/80 text-sm">contato@magiadacozinha.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-kitchen-warm mt-1" />
                  <span className="text-white/80 text-sm">
                    Rua das Cozinhas, 123<br />
                    São Paulo - SP, 01234-567
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-white/20" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Magia da Cozinha. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-kitchen-warm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-kitchen-warm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-kitchen-warm transition-colors">
                Trocas e Devoluções
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;