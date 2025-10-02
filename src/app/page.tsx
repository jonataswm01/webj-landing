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
      
      {/* Story/Timeline Section */}
      <section className="bg-carvao py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="font-titulo text-4xl md:text-5xl font-bold text-cyan uppercase tracking-wider text-center mb-16">
            The Journey So Far
          </h2>
          
          {/* Intro */}
          <p className="font-texto text-xl text-off-white text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            De zero a CTO em 18 meses. Não foi sorte — foi obsessão por 
            aprender, oportunidades certas e a combinação perfeita entre 
            talento técnico e momento de mercado.
          </p>
          
          {/* Timeline */}
          <div className="space-y-12">
            {/* Ponto 1 - Fevereiro 2024 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="bg-slate p-6 rounded-lg border-2 border-cyan">
                  <div className="font-titulo text-cyan text-sm uppercase tracking-wider mb-2">
                    Fev 2024 — O Começo
                  </div>
                  <h3 className="font-titulo text-2xl text-off-white uppercase mb-4">
                    Suporte Técnico
                  </h3>
                  <p className="font-texto text-off-white leading-relaxed">
                    Primeiro contato profissional com tecnologia. Resolvia problemas 
                    técnicos, mas sabia que queria mais — criar, não apenas consertar.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/3 text-center">
                <div className="w-4 h-4 bg-cyan rounded-full mx-auto"></div>
                <div className="w-1 h-12 bg-steel-blue mx-auto mt-4"></div>
              </div>
              <div className="w-full md:w-1/3"></div>
            </div>
            
            {/* Ponto 2 - Mid 2024 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3"></div>
              <div className="hidden md:block w-1/3 text-center">
                <div className="w-1 h-12 bg-steel-blue mx-auto mb-4"></div>
                <div className="w-4 h-4 bg-cyan rounded-full mx-auto"></div>
                <div className="w-1 h-12 bg-steel-blue mx-auto mt-4"></div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-slate p-6 rounded-lg border-2 border-steel-blue">
                  <div className="font-titulo text-cyan text-sm uppercase tracking-wider mb-2">
                    Mid 2024 — A Descoberta
                  </div>
                  <h3 className="font-titulo text-2xl text-off-white uppercase mb-4">
                    Web Designer
                  </h3>
                  <p className="font-texto text-off-white leading-relaxed">
                    Migrei para web design e encontrei meu flow. Descobri que tinha 
                    talento para criar interfaces que funcionam — visualmente e 
                    tecnicamente. Foi aqui que o código começou a fazer sentido.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Ponto 3 - Late 2024 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="bg-slate p-6 rounded-lg border-2 border-magenta">
                  <div className="font-titulo text-cyan text-sm uppercase tracking-wider mb-2">
                    Late 2024 — Full Stack
                  </div>
                  <h3 className="font-titulo text-2xl text-off-white uppercase mb-4">
                    Developer Mode: ON
                  </h3>
                  <p className="font-texto text-off-white leading-relaxed">
                    De design para desenvolvimento foi natural. React, TypeScript, 
                    APIs, automações com n8n. Comecei a abraçar no code, low code 
                    e IA como ferramentas legítimas — não muletas, mas aceleradores.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/3 text-center">
                <div className="w-1 h-12 bg-steel-blue mx-auto mb-4"></div>
                <div className="w-4 h-4 bg-cyan rounded-full mx-auto"></div>
                <div className="w-1 h-12 bg-steel-blue mx-auto mt-4"></div>
              </div>
              <div className="w-full md:w-1/3"></div>
            </div>
            
            {/* Ponto 4 - Out 2025 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3"></div>
              <div className="hidden md:block w-1/3 text-center">
                <div className="w-1 h-12 bg-steel-blue mx-auto mb-4"></div>
                <div className="w-4 h-4 bg-cyan rounded-full mx-auto"></div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-slate p-6 rounded-lg border-2 border-cyan">
                  <div className="font-titulo text-cyan text-sm uppercase tracking-wider mb-2">
                    Out 2025 — Founder & CTO
                  </div>
                  <h3 className="font-titulo text-2xl text-off-white uppercase mb-4">
                    Building Roduno
                  </h3>
                  <p className="font-texto text-off-white leading-relaxed">
                    Hoje lidero toda a parte técnica da Roduno, startup que co-fundei 
                    com meu tio Adriano. Estamos resolvendo um problema real de logística 
                    rodoviária no Brasil — e eu sou responsável por fazer isso acontecer 
                    tecnicamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Closing Statement */}
          <div className="text-center mt-16">
            <p className="font-titulo text-2xl text-cyan uppercase tracking-wider">
              18 meses. Quatro transições. Uma constante: nunca parei de construir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
