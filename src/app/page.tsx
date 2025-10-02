import ContactForm from './components/ContactForm'

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
          <div className="relative">
            {/* Linha contínua central */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-steel-blue"></div>
            
            <div className="space-y-16">
              {/* Ponto 1 - Fevereiro 2024 */}
              <div className="flex flex-col md:flex-row gap-8 items-center relative">
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
                <div className="hidden md:block w-1/3 text-center relative z-10">
                  <div className="w-4 h-4 bg-cyan rounded-full mx-auto"></div>
                </div>
                <div className="w-full md:w-1/3"></div>
              </div>
              
              {/* Ponto 2 - Mid 2024 */}
              <div className="flex flex-col md:flex-row gap-8 items-center relative">
                <div className="w-full md:w-1/3"></div>
                <div className="hidden md:block w-1/3 text-center relative z-10">
                  <div className="w-4 h-4 bg-cyan rounded-full mx-auto"></div>
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
              <div className="flex flex-col md:flex-row gap-8 items-center relative">
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
                <div className="hidden md:block w-1/3 text-center relative z-10">
                  <div className="w-4 h-4 bg-cyan rounded-full mx-auto"></div>
                </div>
                <div className="w-full md:w-1/3"></div>
              </div>
              
              {/* Ponto 4 - Out 2025 */}
              <div className="flex flex-col md:flex-row gap-8 items-center relative">
                <div className="w-full md:w-1/3"></div>
                <div className="hidden md:block w-1/3 text-center relative z-10">
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
          </div>
          
          {/* Closing Statement */}
          <div className="text-center mt-16">
            <p className="font-titulo text-2xl text-cyan uppercase tracking-wider">
              18 meses. Quatro transições. Uma constante: nunca parei de construir.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Project - Roduno */}
      <section className="bg-slate py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="font-titulo text-4xl md:text-5xl font-bold text-cyan uppercase tracking-wider text-center mb-16">
            Current Focus: Roduno
          </h2>
          
          {/* Project Tag */}
          <div className="text-center mb-8">
            <span className="font-titulo bg-cyan text-carvao px-4 py-2 rounded-full text-sm uppercase tracking-wider">
              🚀 In Active Development
            </span>
          </div>
          
          {/* Project Card */}
          <div className="bg-carvao border-2 border-cyan rounded-lg p-8 hover:border-magenta transition-all duration-300 hover:shadow-2xl hover:shadow-cyan/20">
            {/* Headline */}
            <h3 className="font-titulo text-3xl md:text-4xl text-cyan uppercase tracking-wider mb-4 text-center">
              O Ponto de Encontro da Estrada
            </h3>
            
            {/* Subheadline */}
            <p className="font-texto text-xl text-off-white text-center mb-12 max-w-4xl mx-auto">
              Primeiro ecossistema gratuito de serviços para caminhoneiros do Brasil
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Problem & Solution */}
              <div className="space-y-8">
                {/* The Problem */}
                <div className="bg-slate p-6 rounded-lg border-2 border-steel-blue">
                  <h4 className="font-titulo text-xl text-cyan uppercase mb-4">The Problem</h4>
                  <p className="font-texto text-off-white leading-relaxed mb-4">
                    Caminhoneiros brasileiros perdem em média 3-5 dias parados esperando 
                    carga. Isso representa R$ 500-1.000 de prejuízo diário. A busca por 
                    fretes é fragmentada, desorganizada e ineficiente.
                  </p>
                  <p className="font-texto text-off-white leading-relaxed">
                    40% dos caminhões rodam vazios no retorno. Dinheiro e tempo sendo 
                    desperdiçados porque não existe uma conexão eficiente entre quem 
                    tem carga e quem tem caminhão disponível.
                  </p>
                </div>
                
                {/* Our Solution */}
                <div className="bg-slate p-6 rounded-lg border-2 border-cyan">
                  <h4 className="font-titulo text-xl text-cyan uppercase mb-4">Our Solution</h4>
                  <p className="font-texto text-off-white leading-relaxed mb-4">
                    A Roduno conecta caminhoneiros com cargas disponíveis e transportadoras 
                    com motoristas confiáveis — tudo via WhatsApp, de forma simples e direta.
                  </p>
                  <p className="font-texto text-off-white leading-relaxed">
                    Um buscador de fretes em tempo real que transforma 3-5 dias de espera 
                    em busca instantânea. Sem apps complexos, sem burocracia. Apenas conexão 
                    eficiente entre demanda e oferta.
                  </p>
                </div>
              </div>
              
              {/* Right Column - Role & Tech */}
              <div className="space-y-8">
                {/* My Role */}
                <div className="bg-slate p-6 rounded-lg border-2 border-magenta">
                  <h4 className="font-titulo text-xl text-cyan uppercase mb-4">My Role</h4>
                  <h5 className="font-titulo text-lg text-off-white uppercase mb-4">Founder & CTO</h5>
                  <p className="font-texto text-off-white leading-relaxed">
                    Responsável por toda arquitetura técnica, desenvolvimento do sistema e 
                    visão de produto. Transformando um problema complexo de logística em 
                    uma experiência simples via WhatsApp.
                  </p>
                </div>
                
                {/* Tech Behind */}
                <div className="bg-slate p-6 rounded-lg border-2 border-steel-blue">
                  <h4 className="font-titulo text-xl text-cyan uppercase mb-4">Tech Behind</h4>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="font-texto bg-cyan text-carvao px-3 py-1 rounded text-sm font-semibold">Next.js 15</span>
                      <span className="font-texto bg-cyan text-carvao px-3 py-1 rounded text-sm font-semibold">TypeScript</span>
                      <span className="font-texto bg-cyan text-carvao px-3 py-1 rounded text-sm font-semibold">n8n Automations</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="font-texto bg-steel-blue text-off-white px-3 py-1 rounded text-sm font-semibold">WhatsApp Integration</span>
                      <span className="font-texto bg-steel-blue text-off-white px-3 py-1 rounded text-sm font-semibold">Real-time Data Processing</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="font-texto bg-magenta text-off-white px-3 py-1 rounded text-sm font-semibold">SEO-optimized Landing Pages</span>
                    </div>
                  </div>
                </div>
                
                {/* Impacto Esperado */}
                <div className="bg-slate p-6 rounded-lg border-2 border-cyan">
                  <h4 className="font-titulo text-xl text-cyan uppercase mb-4">Impacto Esperado</h4>
                  <ul className="font-texto text-off-white space-y-2">
                    <li>• Reduzir tempo ocioso dos caminhoneiros de dias para minutos</li>
                    <li>• Aumentar eficiência do mercado de transporte rodoviário brasileiro</li>
                    <li>• Democratizar acesso a fretes de qualidade</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mt-12">
              <button className="font-titulo bg-cyan text-carvao px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-magenta transition-all duration-300 transform hover:scale-105">
                Em breve: roduno.com.br
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="bg-carvao py-20 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="font-titulo text-4xl md:text-5xl font-bold text-cyan uppercase tracking-wider text-center mb-16">
            Let's Connect
          </h2>
          
          {/* Intro Text */}
          <p className="font-texto text-xl text-off-white text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            Disponível para conversas sobre tech, startups, desenvolvimento 
            moderno ou qualquer papo sobre construir produtos digitais que 
            importam. Vamos trocar ideia?
          </p>
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
      
      {/* Social Links Section */}
      <section className="bg-warm-sand py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="font-titulo text-3xl md:text-4xl font-bold text-carvao uppercase tracking-wider mb-8">
            Find Me Online
          </h2>
          
          {/* Intro */}
          <p className="font-texto text-lg text-carvao mb-12">
            Presente nas principais plataformas tech. Conecta lá!
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/jonataswm01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-carvao/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-carvao rounded-full flex items-center justify-center group-hover:bg-cyan transition-colors">
                <span className="font-texto text-warm-sand text-xl">in</span>
              </div>
              <span className="font-texto text-carvao text-sm font-semibold">LinkedIn</span>
              <span className="font-texto text-steel-blue text-xs">Professional network</span>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/jonataswm01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-carvao/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-carvao rounded-full flex items-center justify-center group-hover:bg-cyan transition-colors">
                <span className="font-texto text-warm-sand text-xl">GH</span>
              </div>
              <span className="font-texto text-carvao text-sm font-semibold">GitHub</span>
              <span className="font-texto text-steel-blue text-xs">Code repositories</span>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:contato@webj.com.br" 
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-carvao/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-carvao rounded-full flex items-center justify-center group-hover:bg-cyan transition-colors">
                <span className="font-texto text-warm-sand text-xl">@</span>
              </div>
              <span className="font-texto text-carvao text-sm font-semibold">Email</span>
              <span className="font-texto text-steel-blue text-xs">Direct contact</span>
            </a>
          </div>
          
          {/* Microcopy */}
          <p className="font-texto text-sm text-steel-blue">
            Sempre aberto para networking, oportunidades e conversas sobre tech.
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-carvao py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Branding Line */}
            <div className="text-center md:text-left">
              <p className="font-titulo text-xl text-cyan uppercase tracking-wider mb-2">
                WEBJ
              </p>
              <p className="font-texto text-steel-blue text-sm">
                Building the future, one commit at a time.
              </p>
            </div>
            
            {/* Tech Badge */}
            <div className="text-center">
              <div className="bg-slate p-4 rounded-lg border border-steel-blue">
                <p className="font-texto text-cyan text-sm font-semibold mb-1">
                  Built with Next.js 15 + TypeScript + Tailwind CSS
                </p>
                <p className="font-texto text-steel-blue text-xs">
                  Deployed on Vercel
                </p>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="font-texto text-steel-blue text-sm mb-2">
                © 2025 WEBJ. Maringá-PR, Brasil.
              </p>
              <p className="font-texto text-steel-blue text-xs">
                Made with ☕ and lots of code
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
