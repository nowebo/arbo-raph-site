const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Conception',
    text: 'Plans personnalisés pour des jardins qui racontent votre histoire, entre ombre et lumière.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" strokeLinecap="round" />
        <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" strokeLinecap="round" />
        <path d="M9 12h6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Élagage',
    text: 'Soin expert de vos arbres pour garantir leur santé, leur sécurité et leur esthétique naturelle.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.12 15.88" strokeLinecap="round" />
        <path d="M14.47 14.48L20 20" strokeLinecap="round" />
        <path d="M8.12 8.12L12 12" strokeLinecap="round" />
      </svg>
    ),
    title: 'Entretien',
    text: 'Préservation de la splendeur de vos extérieurs au fil des saisons avec douceur et précision.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#4a7c3f] font-semibold mb-3">Ce que nous faisons</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Expertise</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Une approche artisanale mêlée d'une vision moderne pour chaque branche, chaque fleur.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#f4f9f2] flex items-center justify-center text-[#4a7c3f] mb-5 group-hover:bg-[#4a7c3f] group-hover:text-white transition-all duration-300 shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <a href="#contact"
              className="bg-[#2d5a27] hover:bg-[#1e3d1a] text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm">
              Demander un devis gratuit
            </a>
            <a href="tel:0379496140"
              className="border-2 border-[#2d5a27] text-[#2d5a27] hover:bg-[#f4f9f2] font-semibold px-8 py-3.5 rounded-full transition-colors text-sm">
              03 79 49 61 40
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
