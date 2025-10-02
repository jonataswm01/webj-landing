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
      
      {/* About/Bio Section */}
      <section className="bg-slate py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="font-titulo text-4xl md:text-5xl font-bold text-cyan uppercase tracking-wider text-center mb-16">
            Who I Am
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="font-texto text-lg text-off-white leading-relaxed">
                Sou Jonatas, desenvolvedor Full Stack de Maringá-PR com uma 
                trajetória não-convencional mas intensa: saí do suporte técnico 
                para CTO de startup em menos de 2 anos.
              </p>
              
              <p className="font-texto text-lg text-off-white leading-relaxed">
                Apaixonado por tecnologia desde sempre, encontrei no desenvolvimento 
                web o match perfeito entre lógica, criatividade e impacto real. 
                Especializado em criar experiências digitais que funcionam — usando 
                a stack certa para cada problema, seja React puro, no code, low code 
                ou IA generativa.
              </p>
              
              <p className="font-texto text-lg text-off-white leading-relaxed">
                Atualmente focado 100% na Roduno, minha primeira startup, onde estou 
                construindo o primeiro ecossistema gratuito para caminhoneiros do Brasil.
              </p>
            </div>
            
            {/* Stack Badges & Stats */}
            <div className="space-y-8">
              {/* Stack Badges */}
              <div className="bg-carvao p-6 rounded-lg border-2 border-cyan">
                <h3 className="font-titulo text-xl text-cyan uppercase mb-4">Tech Stack</h3>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="font-texto bg-cyan text-carvao px-3 py-1 rounded text-sm font-semibold">JavaScript</span>
                    <span className="font-texto bg-cyan text-carvao px-3 py-1 rounded text-sm font-semibold">TypeScript</span>
                    <span className="font-texto bg-cyan text-carvao px-3 py-1 rounded text-sm font-semibold">React</span>
                    <span className="font-texto bg-cyan text-carvao px-3 py-1 rounded text-sm font-semibold">Next.js</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-texto bg-steel-blue text-off-white px-3 py-1 rounded text-sm font-semibold">CSS/Tailwind</span>
                    <span className="font-texto bg-steel-blue text-off-white px-3 py-1 rounded text-sm font-semibold">n8n</span>
                    <span className="font-texto bg-steel-blue text-off-white px-3 py-1 rounded text-sm font-semibold">No Code Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-texto bg-magenta text-off-white px-3 py-1 rounded text-sm font-semibold">AI-Assisted Development</span>
                    <span className="font-texto bg-magenta text-off-white px-3 py-1 rounded text-sm font-semibold">Web Design</span>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="bg-carvao p-6 rounded-lg border-2 border-steel-blue">
                <h3 className="font-titulo text-xl text-cyan uppercase mb-4">Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-texto text-2xl">📅</span>
                    <span className="font-texto text-off-white">&lt;2 anos de carreira</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-texto text-2xl">🚀</span>
                    <span className="font-texto text-off-white">Suporte → Designer → Full Stack → CTO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-texto text-2xl">💼</span>
                    <span className="font-texto text-off-white">Founder & CTO @ Roduno</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-texto text-2xl">🎨</span>
                    <span className="font-texto text-off-white">Design-driven developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
