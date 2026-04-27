const photos = [
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/5d361537d70000bd00e93fad-1920w.png', alt: 'Élagage professionnel' },
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/5d3615374000005800da568b-1920w.jpg', alt: 'Création de jardin' },
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/ArboRaph2-126-400x284-1920w.jpg', alt: 'Aménagement paysager' },
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/ArboRaph1-7-400x284-400x284-1920w.jpg', alt: 'Entretien jardin' },
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/5d361537d70000f216e93fa7-1920w.jpg', alt: 'Travaux paysagistes' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a7c3f] font-semibold mb-2">Galerie</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nos Réalisations</h2>
          </div>
          <a href="#contact" className="hidden sm:flex items-center gap-2 text-[#2d5a27] font-semibold text-sm hover:underline">
            Demander un devis
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ gridTemplateRows: 'repeat(2, 240px)' }}>
          {/* Large left — spans 2 rows */}
          <div className="row-span-2 rounded-2xl overflow-hidden group relative">
            <img src={photos[0].src} alt={photos[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          </div>
          {/* Top center */}
          <div className="rounded-2xl overflow-hidden group relative hidden md:block">
            <img src={photos[2].src} alt={photos[2].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          {/* Top right */}
          <div className="rounded-2xl overflow-hidden group relative">
            <img src={photos[3].src} alt={photos[3].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          {/* Bottom spanning 2 cols */}
          <div className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden group relative">
            <img src={photos[1].src} alt={photos[1].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                Jardin Vosgien
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
