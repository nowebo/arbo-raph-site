const testimonials = [
  {
    name: 'Yann',
    stars: 5,
    text: 'Travail minutieux, dans un environnement très serré et avec des éléments à ne pas abîmer. Résultat et nettoyage après chantier impeccable! À recommander sans hésiter.',
  },
  {
    name: 'Cedric',
    stars: 5,
    text: 'Personne très réactive et professionnelle. A su répondre rapidement à mes attentes.',
  },
  {
    name: 'Françoise',
    stars: 5,
    text: 'Travaux d\'abattage (nombreux bouleaux en terrain pentu), élagage d\'un grand saule marsault et broyage de l\'ensemble des branchages, réalisé dans les règles de l\'Art et dans le respect des délais par une équipe sympathique. Je dispose désormais d\'une belle quantité de bois pour mon chauffage et de broyat pour mon potager.',
  },
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-14 bg-[#f4f9f2]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2d5a27] mb-10">Témoignages clients</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#4a7c3f] text-white flex items-center justify-center font-bold text-sm">
                  {t.name[0]}
                </div>
                <span className="font-semibold text-gray-800 text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
