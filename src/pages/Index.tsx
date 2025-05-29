
import React from 'react';
import Logo from '../components/Logo';
import PromoBadge from '../components/PromoBadge';
import ProductCard from '../components/ProductCard';
import { Instagram, Youtube, Music, Eye, Clock, Zap, Star, TrendingUp, Gift } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Logo size="xl" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-poppins font-black text-white mb-4 animate-slide-up">
              OS MELHORES{' '}
              <span className="text-brand-yellow animate-pulse">GADGETS TECH</span>
              <br />
              DA INTERNET! 📱
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 font-inter max-w-2xl mx-auto mb-8">
              Produtos tecnológicos virais, fones bluetooth, smartwatches e acessórios do 
              <strong> Temu, Shopee e AliExpress</strong> direto no seu feed!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <PromoBadge type="trending" text="VIRAL NO TIKTOK" />
              <PromoBadge type="limited" text="TECH EM OFERTA" />
              <PromoBadge type="discount" text="ATÉ 85% OFF" percentage="85%" />
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6">
              <a href="#" className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-200 group">
                <Instagram className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-200 group">
                <Music className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-200 group">
                <Youtube className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-bounce-in">
              <div className="bg-gradient-to-br from-brand-yellow to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">+2M</h3>
              <p className="text-gray-600 font-inter">Tech Lovers</p>
            </div>
            
            <div className="animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-brand-blue to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">300+</h3>
              <p className="text-gray-600 font-inter">Gadgets Virais</p>
            </div>
            
            <div className="animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-brand-orange to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">24h</h3>
              <p className="text-gray-600 font-inter">Ofertas Tech</p>
            </div>
            
            <div className="animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">85%</h3>
              <p className="text-gray-600 font-inter">Desconto Máx</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-black text-brand-dark mb-4">
              🔥 GADGETS VIRAIS DA SEMANA
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Os produtos tech que estão bombando nas redes sociais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="Fone de Ouvido Bluetooth TWS Pro - Som Hi-Fi"
              originalPrice="R$ 199,90"
              discountPrice="R$ 29,90"
              discount="85"
              rating={4.9}
              platform="temu"
              isViral={true}
              imageUrl="/lovable-uploads/1386b3a7-44a6-4b93-ad13-b610c5b75ce6.png"
            />
            
            <ProductCard
              title="Smartwatch Série 8 Ultra - Tela AMOLED"
              originalPrice="R$ 450,00"
              discountPrice="R$ 89,90"
              discount="80"
              rating={4.8}
              platform="shopee"
              isViral={true}
              imageUrl="/lovable-uploads/846c7e43-f0e7-4b6d-8d6f-d9e9b37ed7ed.png"
            />
            
            <ProductCard
              title="Ring Light 26cm com Tripé e Suporte Celular"
              originalPrice="R$ 120,00"
              discountPrice="R$ 35,90"
              discount="70"
              rating={4.7}
              platform="aliexpress"
              imageUrl="/lovable-uploads/0207736a-6bc0-4663-8535-08807688f328.png"
            />

            <ProductCard
              title="Capa Anti-Impacto Transparente iPhone/Samsung"
              originalPrice="R$ 69,90"
              discountPrice="R$ 15,90"
              discount="77"
              rating={4.6}
              platform="temu"
              imageUrl="/lovable-uploads/4244e402-b30d-45cc-beab-12952bdd8db6.png"
            />

            <ProductCard
              title="Suporte Veicular Magnético 360° Universal"
              originalPrice="R$ 89,90"
              discountPrice="R$ 24,90"
              discount="72"
              rating={4.8}
              platform="shopee"
              isViral={true}
              imageUrl="/lovable-uploads/04a7a85a-bcbf-4a9b-a67e-27ec74dac0df.png"
            />

            <ProductCard
              title="Carregador Wireless Fast Charge 15W"
              originalPrice="R$ 150,00"
              discountPrice="R$ 39,90"
              discount="73"
              rating={4.5}
              platform="aliexpress"
              imageUrl="/lovable-uploads/b40673ec-c703-40cb-abbb-56907b31169a.png"
            />
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-brand-orange to-red-500 text-white px-8 py-4 rounded-xl font-montserrat font-bold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              VER TODOS OS GADGETS 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Video Templates Preview */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-black mb-4">
              📱 TEMPLATES PARA VÍDEOS TECH
            </h2>
            <p className="text-xl text-gray-300 font-inter">
              Estilos otimizados para Reviews e Unboxings no Instagram, TikTok e YouTube
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Template 1 - Vertical 9:16 */}
            <div className="bg-gradient-to-br from-brand-blue to-purple-600 p-6 rounded-2xl aspect-[9/16] relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="text-center">
                  <PromoBadge type="trending" text="REVIEW IMPERDÍVEL" />
                </div>
                
                <div className="space-y-4">
                  <div className="bg-brand-yellow text-brand-dark p-3 rounded-xl text-center">
                    <span className="font-poppins font-black text-lg">85% OFF</span>
                  </div>
                  <div className="bg-white/90 text-brand-dark p-3 rounded-xl text-center">
                    <span className="font-inter font-bold">GADGET DO ANO 🔥</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-sm font-inter">Template Instagram Reels</span>
                </div>
              </div>
            </div>

            {/* Template 2 */}
            <div className="bg-gradient-to-br from-brand-orange to-red-500 p-6 rounded-2xl aspect-[9/16] relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="text-center">
                  <PromoBadge type="viral" text="UNBOXING VIRAL" />
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white text-brand-dark p-3 rounded-xl text-center">
                    <span className="font-poppins font-black text-lg">R$ 29,90</span>
                  </div>
                  <div className="bg-brand-yellow text-brand-dark p-3 rounded-xl text-center">
                    <span className="font-inter font-bold">LINK NA BIO 📱</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-sm font-inter">Template TikTok</span>
                </div>
              </div>
            </div>

            {/* Template 3 */}
            <div className="bg-gradient-to-br from-brand-yellow to-orange-400 p-6 rounded-2xl aspect-[9/16] relative overflow-hidden text-brand-dark">
              <div className="relative h-full flex flex-col justify-between">
                <div className="text-center">
                  <PromoBadge type="limited" text="TECH EM OFERTA" />
                </div>
                
                <div className="space-y-4">
                  <div className="bg-brand-blue text-white p-3 rounded-xl text-center">
                    <span className="font-poppins font-black text-lg">-80%</span>
                  </div>
                  <div className="bg-white text-brand-dark p-3 rounded-xl text-center">
                    <span className="font-inter font-bold">CORRE QUE ACABA! ⚡</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-sm font-inter">Template YouTube Shorts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-black mb-4">
            🚨 NÃO PERCA NENHUMA OFERTA TECH!
          </h2>
          <p className="text-xl mb-8 font-inter">
            Siga nossas redes sociais e seja o primeiro a descobrir os melhores gadgets da web
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-brand-blue px-6 py-3 rounded-xl font-montserrat font-bold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              📱 SEGUIR NO INSTAGRAM
            </button>
            <button className="bg-brand-yellow text-brand-dark px-6 py-3 rounded-xl font-montserrat font-bold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              🎵 SEGUIR NO TIKTOK
            </button>
            <button className="bg-red-500 text-white px-6 py-3 rounded-xl font-montserrat font-bold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              ▶️ SEGUIR NO YOUTUBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Logo size="md" />
          <p className="mt-4 text-gray-400 font-inter">
            © 2024 O Garimpo Tech - Todos os direitos reservados
          </p>
          <p className="mt-2 text-sm text-gray-500 font-inter">
            Os melhores gadgets e ofertas tech da internet
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
git clone https://github.com/PentaMoses/viral-promo-kit.git
