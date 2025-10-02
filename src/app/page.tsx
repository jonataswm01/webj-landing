export default function Home() {
  return (
    <div className="min-h-screen bg-carvao text-off-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background com gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-carvao via-carvao to-slate opacity-90"></div>
        
        {/* Conteúdo principal */}
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          {/* Logo/Nome WEBJ */}
          <h1 className="font-titulo text-7xl md:text-8xl font-bold mb-6 text-cyan uppercase tracking-wider">
            WEBJ
          </h1>
          
          {/* Headline técnica */}
          <h2 className="font-titulo text-3xl md:text-4xl font-semibold mb-8 text-off-white uppercase tracking-wide">
            Desenvolvedor Full Stack
          </h2>
          
          {/* Subtitle que posiciona expertise */}
          <p className="font-texto text-xl md:text-2xl mb-12 text-off-white max-w-3xl mx-auto leading-relaxed">
            Especialista em <span className="text-cyan font-semibold">Next.js</span>, 
            <span className="text-cyan font-semibold"> TypeScript</span> e 
            <span className="text-cyan font-semibold"> React</span>. 
            Construindo soluções modernas e escaláveis.
          </p>
          
          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="font-titulo bg-cyan text-carvao px-10 py-5 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-magenta hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan/25">
              Ver Projetos
            </button>
            
            <button className="font-texto bg-transparent text-cyan border-2 border-cyan px-10 py-5 rounded-lg font-semibold text-lg hover:bg-cyan hover:text-carvao transition-all duration-300">
              Entrar em Contato
            </button>
          </div>
          
          {/* Tech stack badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <span className="font-texto bg-slate text-cyan px-4 py-2 rounded-full text-sm font-medium border border-steel-blue">
              Next.js 15
            </span>
            <span className="font-texto bg-slate text-cyan px-4 py-2 rounded-full text-sm font-medium border border-steel-blue">
              TypeScript
            </span>
            <span className="font-texto bg-slate text-cyan px-4 py-2 rounded-full text-sm font-medium border border-steel-blue">
              React
            </span>
            <span className="font-texto bg-slate text-cyan px-4 py-2 rounded-full text-sm font-medium border border-steel-blue">
              Tailwind CSS
            </span>
            <span className="font-texto bg-slate text-cyan px-4 py-2 rounded-full text-sm font-medium border border-steel-blue">
              Node.js
            </span>
          </div>
        </div>
        
        {/* Efeito de parallax sutil */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-magenta/10 to-transparent"></div>
      </section>
    </div>
  );
}
