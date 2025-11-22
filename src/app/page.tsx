"use client"

import { Check, Star, Users, Bell, TrendingUp, Shield, Sparkles, ArrowRight, Zap, Crown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/9fbaafd0-323e-49cd-80cf-d98ed77a5e8d.png" 
              alt="AutoSampa Logo" 
              className="h-32 w-auto"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Acesso Exclusivo às
            <span className="block text-[#D4AF37] mt-2">Melhores Oportunidades</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Junte-se a uma comunidade seleta de entusiastas automotivos e tenha acesso prioritário 
            às ofertas mais exclusivas do mercado
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#D4AF37]" />
              <span>Sem taxas ocultas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#D4AF37]" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#D4AF37]" />
              <span>Suporte 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Benefícios <span className="text-[#D4AF37]">Exclusivos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tudo o que você precisa para estar sempre à frente no mercado automotivo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="group bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Star className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">Ofertas Exclusivas</h3>
              <p className="text-gray-400 leading-relaxed">
                Acesso antecipado às melhores ofertas e veículos exclusivos antes de chegarem ao público geral
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="group bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Shield className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">Assistência Personalizada</h3>
              <p className="text-gray-400 leading-relaxed">
                Equipe dedicada de especialistas automotivos à sua disposição para orientação personalizada
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="group bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Bell className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">Alertas Instantâneos</h3>
              <p className="text-gray-400 leading-relaxed">
                Seja o primeiro a saber sobre novos lançamentos e oportunidades imperdíveis no mercado
              </p>
            </div>

            {/* Benefit Card 4 */}
            <div className="group bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <TrendingUp className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">Análise de Mercado</h3>
              <p className="text-gray-400 leading-relaxed">
                Relatórios exclusivos sobre tendências, valorização e as melhores oportunidades de investimento
              </p>
            </div>

            {/* Benefit Card 5 */}
            <div className="group bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Users className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">Rede Exclusiva</h3>
              <p className="text-gray-400 leading-relaxed">
                Conecte-se com outros membros VIP e amplie sua rede de contatos no mundo automotivo
              </p>
            </div>

            {/* Benefit Card 6 */}
            <div className="group bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Sparkles className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">Eventos Exclusivos</h3>
              <p className="text-gray-400 leading-relaxed">
                Convites para eventos VIP, test-drives exclusivos e lançamentos de veículos premium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-3xl p-12 sm:p-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37] rounded-full mb-8">
              <Users className="w-10 h-10 text-black" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Mais de <span className="text-[#D4AF37]">3.500 Membros</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Faça parte de uma comunidade automotiva diferenciada e esteja sempre à frente 
              das melhores oportunidades do mercado
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">3.500+</div>
                <div className="text-gray-400">Membros Ativos</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-[#D4AF37]/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">98%</div>
                <div className="text-gray-400">Satisfação</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-[#D4AF37]/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">500+</div>
                <div className="text-gray-400">Ofertas/Mês</div>
              </div>
            </div>

            <button className="group px-10 py-5 bg-[#D4AF37] text-black font-bold text-lg rounded-xl hover:bg-[#B8941F] transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#D4AF37]/30 flex items-center gap-3 mx-auto">
              Quero Fazer Parte
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              O Que Dizem Nossos <span className="text-[#D4AF37]">Membros VIP</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Histórias reais de quem já faz parte da nossa comunidade exclusiva
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Testimonial 1 - Video */}
            <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 flex-1">
              <div id="vid_67e4ce62e6947306f23298e3" style={{position: 'relative', width: '100%', padding: '177.77777777777777% 0 0'}}>
                <img id="thumb_67e4ce62e6947306f23298e3" src="https://images.converteai.net/8cf7cad9-4e53-4ce9-9b79-ad1ed587adea/players/67e4ce62e6947306f23298e3/thumbnail.jpg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} alt="thumbnail" />
                <div id="backdrop_67e4ce62e6947306f23298e3" style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}></div>
              </div>
              <script type="text/javascript" id="scr_67e4ce62e6947306f23298e3" dangerouslySetInnerHTML={{__html: `
                var s=document.createElement("script");
                s.src="https://scripts.converteai.net/8cf7cad9-4e53-4ce9-9b79-ad1ed587adea/players/67e4ce62e6947306f23298e3/player.js";
                s.async=true;
                document.head.appendChild(s);
              `}} />
            </div>

            {/* Testimonial 2 - Video */}
            <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 flex-1">
              <div id="vid_67e4c43dc363d99b6f30c54c" style={{position: 'relative', width: '100%', padding: '176.66666666666666% 0 0'}}>
                <img id="thumb_67e4c43dc363d99b6f30c54c" src="https://images.converteai.net/8cf7cad9-4e53-4ce9-9b79-ad1ed587adea/players/67e4c43dc363d99b6f30c54c/thumbnail.jpg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} alt="thumbnail" />
                <div id="backdrop_67e4c43dc363d99b6f30c54c" style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}></div>
              </div>
              <script type="text/javascript" id="scr_67e4c43dc363d99b6f30c54c" dangerouslySetInnerHTML={{__html: `
                var s=document.createElement("script");
                s.src="https://scripts.converteai.net/8cf7cad9-4e53-4ce9-9b79-ad1ed587adea/players/67e4c43dc363d99b6f30c54c/player.js";
                s.async=true;
                document.head.appendChild(s);
              `}} />
            </div>

            {/* Testimonial 3 - Video */}
            <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 flex-1">
              <div id="vid_67e4cb048c32b3528d9ed29d" style={{position: 'relative', width: '100%', padding: '177.77777777777777% 0 0'}}>
                <img id="thumb_67e4cb048c32b3528d9ed29d" src="https://images.converteai.net/8cf7cad9-4e53-4ce9-9b79-ad1ed587adea/players/67e4cb048c32b3528d9ed29d/thumbnail.jpg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} alt="thumbnail" />
                <div id="backdrop_67e4cb048c32b3528d9ed29d" style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}></div>
              </div>
              <script type="text/javascript" id="scr_67e4cb048c32b3528d9ed29d" dangerouslySetInnerHTML={{__html: `
                var s=document.createElement("script");
                s.src="https://scripts.converteai.net/8cf7cad9-4e53-4ce9-9b79-ad1ed587adea/players/67e4cb048c32b3528d9ed29d/player.js";
                s.async=true;
                document.head.appendChild(s);
              `}} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Two Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-[#0A0A0A] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Escolha Seu <span className="text-[#D4AF37]">Plano Ideal</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Acesso exclusivo às melhores oportunidades do mercado automotivo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plano Mensal */}
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border-2 border-[#D4AF37]/30 rounded-3xl p-10 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF37]/20 rounded-full mb-6">
                <Zap className="w-7 h-7 text-[#D4AF37]" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Plano Mensal</h3>
              <p className="text-gray-400 mb-6">Experimente sem compromisso</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#D4AF37]">R$ 5,90</span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <p className="text-sm text-gray-500">Primeiro mês promocional</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Acesso a todas as ofertas exclusivas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Alertas instantâneos de oportunidades</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Suporte prioritário</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Cancele quando quiser</span>
                </li>
              </ul>

              <button className="w-full group px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-xl hover:bg-[#B8941F] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#D4AF37]/30 flex items-center justify-center gap-2">
                Garantir Acesso Mensal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Plano Vitalício */}
            <div className="relative bg-gradient-to-br from-[#D4AF37]/20 to-transparent border-2 border-[#D4AF37] rounded-3xl p-10 hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300">
              {/* Badge "Mais Popular" */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-[#D4AF37] text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MELHOR VALOR
                </div>
              </div>

              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF37] rounded-full mb-6">
                <Crown className="w-7 h-7 text-black" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Plano Vitalício</h3>
              <p className="text-gray-400 mb-6">Acesso ilimitado para sempre</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#D4AF37]">R$ 397</span>
                </div>
                <p className="text-sm text-gray-500">Pagamento único • Acesso vitalício</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Tudo do plano mensal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Acesso vitalício sem mensalidades</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Prioridade máxima em ofertas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Consultoria personalizada</span>
                </li>
              </ul>

              <button className="w-full group px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-xl hover:bg-[#B8941F] transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#D4AF37]/40 flex items-center justify-center gap-2">
                Garantir Acesso Vitalício
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#D4AF37]/20 bg-black">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 Clube VIP Automotivo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
