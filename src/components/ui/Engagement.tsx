const points = [
  {
    color: '#4a7c3f',
    title: 'Zéro Déchet Vert',
    text: 'Recyclage intégral des déchets : broyat pour vos massifs, bois de chauffage, compostage sur site.',
  },
  {
    color: '#e07b2a',
    title: 'Matériaux Organiques',
    text: 'Utilisation exclusive d\'amendements naturels et de techniques de biocontrôle respectueuses.',
  },
  {
    color: '#4a7c3f',
    title: 'Respect de la Biodiversité',
    text: 'Préservation des habitats naturels et des espèces lors de chaque intervention sur le terrain.',
  },
]

export default function Engagement() {
  return (
    <section className="py-20 bg-[#f8faf7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a7c3f] font-semibold mb-3">Éco-responsabilité</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Engagement<br />pour la Nature
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Les travaux d'élagage réalisés par nos soins sont respectueux des règles horticoles,
              des végétaux et de l'environnement. Nous croyons en une croissance qui respecte les
              cycles de la terre.
            </p>

            <div className="space-y-5">
              {points.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border-2"
                    style={{ borderColor: item.color, backgroundColor: item.color + '15' }}>
                    <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                      <path d="M2 6l3 3 5-5" stroke={item.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/plant.png"
              alt="Engagement environnemental Arbo Raph"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
