export default function Home() {
  return (
    <div className="min-h-screen bg-carvao text-off-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Título principal com Exo 2 */}
        <h1 className="font-titulo text-6xl font-bold mb-4 text-cyan uppercase tracking-wider">
          WEBJ
        </h1>
        
        {/* Subtítulo com Sora */}
        <p className="font-texto text-2xl mb-8 text-off-white">
          Landing page profissional
        </p>
        
        {/* Teste das cores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-carvao border-2 border-cyan p-4 rounded">
            <h3 className="font-titulo text-cyan font-bold text-lg">Carvão</h3>
            <p className="font-texto text-off-white text-sm">Background principal</p>
          </div>
          
          <div className="bg-slate border-2 border-steel-blue p-4 rounded">
            <h3 className="font-titulo text-cyan font-bold text-lg">Slate</h3>
            <p className="font-texto text-off-white text-sm">Cards e containers</p>
          </div>
          
          <div className="bg-cyan text-carvao p-4 rounded hover:bg-magenta transition-colors">
            <h3 className="font-titulo font-bold text-lg">Cyan</h3>
            <p className="font-texto text-sm">CTAs e links</p>
          </div>
          
          <div className="bg-warm-sand text-carvao p-4 rounded">
            <h3 className="font-titulo font-bold text-lg">Warm Sand</h3>
            <p className="font-texto text-sm">Backgrounds alternativos</p>
          </div>
        </div>
        
        {/* Teste das fontes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate border-2 border-cyan p-6 rounded-lg">
            <h3 className="font-titulo text-2xl text-cyan uppercase mb-4">Exo 2 Display</h3>
            <p className="font-texto text-off-white mb-4">
              Fonte para títulos, logo WEBJ, CTAs principais e cards de destaque.
            </p>
            <div className="font-titulo text-lg text-cyan uppercase">
              Título H1 → 48px
            </div>
          </div>
          
          <div className="bg-slate border-2 border-steel-blue p-6 rounded-lg">
            <h3 className="font-texto text-2xl text-cyan font-semibold mb-4">Sora Text</h3>
            <p className="font-texto text-off-white mb-4">
              Fonte para parágrafos, H3/H4, navegação, formulários e UI elements.
            </p>
            <div className="font-texto text-lg text-cyan">
              Parágrafo → 16px, line-height 150%
            </div>
          </div>
        </div>
        
        {/* Botões de teste */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="font-titulo bg-cyan text-carvao px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-magenta transition-colors">
            CTA Exo 2
          </button>
          
          <button className="font-texto bg-slate text-cyan border-2 border-cyan px-8 py-4 rounded font-semibold hover:bg-cyan hover:text-carvao transition-colors">
            Botão Sora
          </button>
        </div>
        
        {/* Status do projeto */}
        <div className="mt-12 p-6 bg-slate rounded-lg border-2 border-steel-blue">
          <h2 className="font-titulo text-2xl text-cyan uppercase mb-4">Status do Projeto</h2>
          <div className="font-texto text-off-white space-y-2">
            <p>✅ Next.js 15 + TypeScript configurado</p>
            <p>✅ Tailwind CSS com paleta customizada</p>
            <p>✅ Fontes Exo 2 e Sora configuradas</p>
            <p>✅ Repositório GitHub conectado</p>
            <p>🔄 Próximo: Hero Section</p>
          </div>
        </div>
      </div>
    </div>
  );
}
