const photos = [
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/5d361537d70000bd00e93fad-1920w.png', alt: 'Réalisation élagage 1' },
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/5d3615374000005800da568b-1920w.jpg', alt: 'Réalisation élagage 2' },
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/ArboRaph2-126-400x284-1920w.jpg', alt: 'Réalisation Arbo Raph' },
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/ArboRaph1-7-400x284-400x284-1920w.jpg', alt: 'Réalisation Arbo Raph 2' },
  { src: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/5d361537d70000f216e93fa7-1920w.jpg', alt: 'Réalisation paysagiste' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-14 bg-[#f4f9f2]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2d5a27] mb-2">Nos réalisations</h2>
        <div className="w-12 h-1 bg-[#4a7c3f] mx-auto mb-10 rounded-full" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((p, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-lg ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: i === 0 ? '320px' : '192px' }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
