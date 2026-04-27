const testimonials = [
  {
    name: 'Yann',
    stars: 5,
    text: 'Travail minutieux, dans un environnement très serré et avec des éléments à ne pas abîmer. Résultat et nettoyage après chantier impeccable ! À recommander sans hésiter.',
  },
  {
    name: 'Cedric',
    stars: 5,
    text: 'Personne très réactive et professionnelle. A su répondre rapidement à mes attentes.',
  },
  {
    name: 'Françoise',
    stars: 5,
    text: 'Travaux d\'abattage (nombreux bouleaux en terrain pentu), élagage d\'un grand saule marsault et broyage de l\'ensemble des branchages, réalisé dans les règles de l\'Art et dans le respect des délais par une équipe sympathique. Je dispose désormais d\'une belle quantité de bois pour mon chauffage.',
  },
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#4a7c3f] font-semibold mb-3">Avis clients</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ce qu'ils disent de nous</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#f8faf7] rounded-2xl p-7 border border-gray-100 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-[#4a7c3f] text-white flex items-center justify-center font-bold text-sm shrink-0">
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
