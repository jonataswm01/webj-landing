export default function Home() {
  return (
    <div className="min-h-screen bg-carvao">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Nome WEBJ */}
          <h1 className="font-titulo text-7xl md:text-8xl font-bold text-cyan uppercase tracking-wider mb-6">
            WEBJ
          </h1>
          
          {/* Headline Principal */}
          <h2 className="font-titulo text-3xl md:text-4xl font-bold text-off-white mb-4">
            Full Stack Developer
          </h2>
          
          {/* Subheadline */}
          <p className="font-titulo text-xl md:text-2xl text-cyan mb-8">
            Building the Future with Modern Tech
          </p>
          
          {/* Descrição */}
          <p className="font-texto text-lg md:text-xl text-off-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack de Maringá-PR especializado em 
            desenvolvimento moderno com No Code, Low Code e IA. 
            Atualmente fundando a Roduno — uma startup de logística 
            que conecta caminhoneiros e cargas via WhatsApp.
          </p>
          
          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="font-titulo bg-cyan text-carvao px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-magenta transition-all duration-300 transform hover:scale-105">
              Let's Connect
            </button>
            
            <button className="font-texto bg-transparent text-cyan border-2 border-cyan px-8 py-4 rounded font-semibold hover:bg-cyan hover:text-carvao transition-all duration-300">
              Ver Meu Trabalho ↓
            </button>
          </div>
          
          {/* Microcopy */}
          <p className="font-texto text-sm text-steel-blue">
            Disponível para networking e conversas sobre tech
          </p>
        </div>
      </section>
    </div>
  );
}
