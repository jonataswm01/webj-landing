export default function Home() {
  return (
    <div className="min-h-screen bg-carvao text-off-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Título com Exo 2 */}
        <h1 className="font-titulo text-5xl font-bold mb-8 text-cyan uppercase tracking-wider">
          WEBJ
        </h1>
        
        {/* Subtítulo com Sora */}
        <p className="font-texto text-xl mb-12 text-off-white">
          Landing page profissional - Next.js 15 + TypeScript + Tailwind
        </p>
        
        {/* Teste das cores e fontes */}
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
        
        {/* Botões de teste com diferentes fontes */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="font-titulo bg-cyan text-carvao px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-magenta transition-colors">
            CTA Exo 2
          </button>
          
          <button className="font-texto bg-slate text-cyan border-2 border-cyan px-8 py-4 rounded font-semibold hover:bg-cyan hover:text-carvao transition-colors">
            Botão Sora
          </button>
        </div>
      </div>
    </div>
  );
}
