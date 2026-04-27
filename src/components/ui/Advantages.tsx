const advantages = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Méthodes Durables',
    text: 'Des approches respectueuses de l\'écosystème local et sans produits chimiques agressifs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Équipe Experte',
    text: 'Des élagueurs grimpeurs et jardiniers paysagistes diplômés et passionnés par leur métier.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" />
      </svg>
    ),
    title: 'Matériel Moderne',
    text: 'Équipement de pointe, électrique et performant pour un travail précis et propre.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Devis Gratuit',
    text: 'Chaque projet est pensé sur mesure avec un devis gratuit et sans engagement.',
  },
]

export default function Advantages() {
  return (
    <section className="py-20 bg-[#f8faf7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#4a7c3f] font-semibold mb-3">Nos Avantages</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pourquoi nous choisir</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow group border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-[#f4f9f2] flex items-center justify-center text-[#4a7c3f] mb-4 group-hover:bg-[#4a7c3f] group-hover:text-white transition-all duration-300">
                {a.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{a.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
