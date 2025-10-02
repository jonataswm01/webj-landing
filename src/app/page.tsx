import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-noir text-white">
      {/* Hero Section - Assimétrico com grid quebrado */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left - Main content (assimétrico: 7 colunas) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tag pequeno */}
              <div className="inline-block">
                <span className="font-texto text-electric text-sm tracking-widest uppercase border border-electric/30 px-4 py-2 rounded-full">
                  Available for opportunities
                </span>
              </div>

              {/* Nome WEBJ - GIGANTE */}
              <h1 className="font-titulo text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter leading-none">
                WEBJ
              </h1>

              {/* Subtitle forte */}
              <h2 className="font-titulo text-2xl sm:text-3xl md:text-4xl font-bold text-electric uppercase tracking-wide">
                Full Stack Developer
              </h2>

              {/* Bio curta e direta */}
              <p className="font-texto text-lg md:text-xl text-ghost max-w-2xl leading-relaxed">
                Building <span className="text-electric font-semibold">Roduno</span> —
                a logistics startup connecting truck drivers and cargo via WhatsApp.
                <br />
                <span className="text-white">Maringá-PR → Brasil</span>
              </p>

              {/* CTAs com hierarquia clara */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="group font-titulo bg-electric text-noir px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Let's Talk
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="#work"
                  className="font-texto bg-transparent text-white border-2 border-gray-light px-8 py-4 rounded-lg font-semibold hover:border-electric hover:text-electric transition-all duration-300 inline-flex items-center justify-center"
                >
                  See My Work
                </a>
              </div>
            </div>

            {/* Right - Stats card floating (5 colunas) */}
            <div className="lg:col-span-5 lg:ml-auto">
              <div className="bg-dark border border-gray-light rounded-2xl p-8 hover:border-electric transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 transform hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-titulo text-5xl font-black text-electric">&lt;2</span>
                    <span className="font-texto text-ghost">years coding</span>
                  </div>
                  <div className="h-px bg-gray-light" />
                  <div className="space-y-3 font-texto text-ghost">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
                      <span>Support → Designer → Dev → CTO</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
                      <span>Founder & CTO @ Roduno</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
                      <span>Modern stack: Next.js, n8n, AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-light rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-electric rounded-full" />
          </div>
        </div>
      </section>

      {/* Bio/Story Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-dark relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-electric/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-16">
            <h2 className="font-titulo text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              The Journey
            </h2>
            <div className="w-24 h-1 bg-electric" />
            <p className="font-texto text-xl text-ghost mt-6 max-w-3xl">
              De zero a CTO em 18 meses. Não foi sorte — foi obsessão por aprender,
              oportunidades certas e timing perfeito.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Início */}
            <div className="bg-noir border border-gray-light rounded-xl p-6 hover:border-electric transition-all duration-500 group relative overflow-hidden">
              {/* Timeline indicator */}
              <div className="absolute top-0 left-0 w-1 h-full bg-electric/20 group-hover:bg-electric transition-all" />

              <div className="pl-4">
                <div className="font-titulo text-ghost text-xs uppercase tracking-wider mb-2">
                  Fev 2024
                </div>
                <h3 className="font-titulo text-white text-2xl mb-3 uppercase">
                  Support
                </h3>
                <p className="font-texto text-ghost text-sm leading-relaxed mb-4">
                  Primeiro contato profissional com tech. Resolvia problemas,
                  mas queria mais — criar, não apenas consertar.
                </p>
                <div className="w-8 h-8 rounded-full bg-dark border-2 border-gray-light group-hover:border-electric transition-all flex items-center justify-center">
                  <span className="text-ghost group-hover:text-electric text-xs">01</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Descoberta */}
            <div className="bg-noir border border-gray-light rounded-xl p-6 hover:border-electric transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-electric/20 group-hover:bg-electric transition-all" />

              <div className="pl-4">
                <div className="font-titulo text-ghost text-xs uppercase tracking-wider mb-2">
                  Mid 2024
                </div>
                <h3 className="font-titulo text-white text-2xl mb-3 uppercase">
                  Designer
                </h3>
                <p className="font-texto text-ghost text-sm leading-relaxed mb-4">
                  Descobri talento para criar interfaces que funcionam —
                  visual e tecnicamente. O código começou a fazer sentido.
                </p>
                <div className="w-8 h-8 rounded-full bg-dark border-2 border-gray-light group-hover:border-electric transition-all flex items-center justify-center">
                  <span className="text-ghost group-hover:text-electric text-xs">02</span>
                </div>
              </div>
            </div>

            {/* Card 3 - Developer */}
            <div className="bg-noir border border-gray-light rounded-xl p-6 hover:border-electric transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-electric/20 group-hover:bg-electric transition-all" />

              <div className="pl-4">
                <div className="font-titulo text-ghost text-xs uppercase tracking-wider mb-2">
                  Late 2024
                </div>
                <h3 className="font-titulo text-white text-2xl mb-3 uppercase">
                  Full Stack
                </h3>
                <p className="font-texto text-ghost text-sm leading-relaxed mb-4">
                  React, TypeScript, APIs, n8n. Abracei no-code, low-code e IA
                  como aceleradores legítimos, não muletas.
                </p>
                <div className="w-8 h-8 rounded-full bg-dark border-2 border-gray-light group-hover:border-electric transition-all flex items-center justify-center">
                  <span className="text-ghost group-hover:text-electric text-xs">03</span>
                </div>
              </div>
            </div>

            {/* Card 4 - Founder/CTO */}
            <div className="bg-gradient-to-br from-electric/10 to-transparent border border-electric rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-electric" />

              <div className="pl-4">
                <div className="font-titulo text-electric text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  Out 2025
                  <span className="w-2 h-2 bg-electric rounded-full animate-pulse" />
                </div>
                <h3 className="font-titulo text-white text-2xl mb-3 uppercase">
                  Founder & CTO
                </h3>
                <p className="font-texto text-white text-sm leading-relaxed mb-4">
                  Co-fundei a Roduno. Lidero toda a arquitetura técnica,
                  resolvendo problemas reais de logística no Brasil.
                </p>
                <div className="w-8 h-8 rounded-full bg-electric flex items-center justify-center">
                  <span className="text-noir text-xs font-bold">04</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-16 text-center">
            <p className="font-titulo text-2xl md:text-3xl text-electric uppercase tracking-wide">
              18 meses. 4 transições. 1 constante: nunca parei de construir.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Section - Grid minimalista */}
      <section id="stack" className="py-32 px-6 md:px-12 lg:px-24 bg-noir">
        <div className="max-w-7xl mx-auto">
          {/* Header assimétrico */}
          <div className="mb-16">
            <h2 className="font-titulo text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-electric" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Frontend', techs: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS'] },
              { title: 'Backend', techs: ['Node.js', 'n8n Automation', 'API Integration'] },
              { title: 'Tools', techs: ['No Code / Low Code', 'AI-Assisted Dev', 'Git'] },
              { title: 'Design', techs: ['UI/UX', 'Web Design', 'Design Systems'] }
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-noir border border-gray-light rounded-xl p-6 hover:border-electric transition-all duration-300 group"
              >
                <h3 className="font-titulo text-electric text-lg uppercase mb-4 tracking-wide">
                  {category.title}
                </h3>
                <ul className="space-y-2 font-texto text-ghost">
                  {category.techs.map((tech, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-light group-hover:bg-electric transition-colors rounded-full" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Filosofia card destacado */}
          <div className="mt-12 bg-gradient-to-r from-electric/10 to-transparent border-l-4 border-electric rounded-r-xl p-8">
            <p className="font-texto text-xl text-white leading-relaxed">
              <span className="text-electric font-bold">"Use o que entrega resultado."</span> A melhor ferramenta é a que resolve o problema. Às vezes é React puro. Às vezes é no-code + IA. O que importa é construir produtos que funcionam.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project - Roduno */}
      <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-noir relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Tag + Title */}
          <div className="mb-12">
            <span className="font-texto text-electric text-sm tracking-widest uppercase border border-electric/30 px-4 py-2 rounded-full inline-block mb-6">
              🚀 Current Focus
            </span>
            <h2 className="font-titulo text-6xl md:text-7xl font-black text-white uppercase tracking-tighter">
              Roduno
            </h2>
            <p className="font-titulo text-2xl md:text-3xl text-electric mt-2 uppercase">
              O Ponto de Encontro da Estrada
            </p>
          </div>

          {/* Content Grid assimétrico */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - 2/3 */}
            <div className="lg:col-span-2 space-y-8">
              {/* Problem */}
              <div className="bg-dark border border-gray-light rounded-xl p-8">
                <h3 className="font-titulo text-electric text-xl uppercase mb-4 tracking-wide">The Problem</h3>
                <p className="font-texto text-ghost text-lg leading-relaxed mb-4">
                  Caminhoneiros brasileiros perdem 3-5 dias parados esperando carga. São R$ 500-1.000 de prejuízo diário. A busca por fretes é fragmentada e ineficiente.
                </p>
                <p className="font-texto text-white text-lg leading-relaxed">
                  <span className="text-electric font-bold">40%</span> dos caminhões rodam vazios no retorno. Dinheiro e tempo desperdiçados porque não existe conexão eficiente entre quem tem carga e quem tem caminhão disponível.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-gradient-to-br from-electric/10 to-transparent border border-electric rounded-xl p-8">
                <h3 className="font-titulo text-electric text-xl uppercase mb-4 tracking-wide">Our Solution</h3>
                <p className="font-texto text-white text-lg leading-relaxed mb-4">
                  A Roduno conecta caminhoneiros com cargas disponíveis e transportadoras com motoristas confiáveis — tudo via WhatsApp.
                </p>
                <p className="font-texto text-ghost text-lg leading-relaxed">
                  Um buscador de fretes em tempo real que transforma 3-5 dias de espera em busca instantânea. Sem apps complexos. Sem burocracia. Apenas conexão eficiente.
                </p>
              </div>
            </div>

            {/* Right column - 1/3 */}
            <div className="space-y-6">
              {/* Role */}
              <div className="bg-dark border border-electric rounded-xl p-6">
                <h3 className="font-titulo text-electric text-sm uppercase mb-3 tracking-wide">My Role</h3>
                <p className="font-titulo text-white text-2xl mb-3">Founder & CTO</p>
                <p className="font-texto text-ghost leading-relaxed">
                  Full technical architecture, system development, and product vision.
                </p>
              </div>

              {/* Tech */}
              <div className="bg-dark border border-gray-light rounded-xl p-6">
                <h3 className="font-titulo text-electric text-sm uppercase mb-4 tracking-wide">Tech</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js 15', 'TypeScript', 'n8n', 'WhatsApp API', 'Real-time Data'].map((tech, i) => (
                    <span key={i} className="bg-noir text-electric border border-electric/30 px-3 py-1 rounded-full text-xs font-texto">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-noir border border-gray-light rounded-xl p-6 text-center">
                <p className="font-texto text-ghost text-sm mb-3">Coming soon</p>
                <p className="font-titulo text-white text-xl">roduno.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-dark">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-titulo text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              Let's Connect
            </h2>
            <p className="font-texto text-xl text-ghost max-w-2xl mx-auto">
              Disponível para conversas sobre tech, startups e construção de produtos digitais que importam.
            </p>
          </div>

          {/* Form */}
          <ContactForm />

          {/* Social links minimalistas */}
          <div className="mt-16 flex justify-center gap-8">
            {[
              { name: 'LinkedIn', url: 'https://linkedin.com/in/jonataswm01' },
              { name: 'GitHub', url: 'https://github.com/jonataswm01' },
              { name: 'Email', url: 'mailto:contato@webj.com.br' }
            ].map((link, i) => (
              <a
                key={i}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="font-titulo text-ghost hover:text-electric transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-noir border-t border-gray-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-titulo text-white text-xl uppercase tracking-wider">WEBJ</p>
          <p className="font-texto text-ghost text-sm">
            Built with Next.js 15 + TypeScript + Tailwind CSS
          </p>
          <p className="font-texto text-ghost text-sm">© 2025 Maringá-PR, Brasil</p>
        </div>
      </footer>
    </div>
  );
}
