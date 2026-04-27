export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f8faf7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/team.png"
                alt="L'équipe Arbo Raph"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#2d5a27] text-white rounded-2xl p-5 shadow-xl w-36 text-center hidden md:block">
              <span className="block text-3xl font-bold">10+</span>
              <span className="text-xs text-green-200 font-medium">ans d'expérience</span>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a7c3f] font-semibold mb-3">Notre Histoire</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">À propos d'Arbo Raph</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Arbo Raph est une entreprise d'élagage moderne, spécialisée dans les travaux de taille
              et d'abattage d'arbres dangereux sur toutes les essences et de toutes tailles.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Arboriste, élagueur grimpeur, on s'adresse aux particuliers comme aux professionnels.
              Nous faisons aussi de la location de broyage de branches avec chauffeur.
              Contactez les vrais spécialistes de l'arbre.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: 'Qualité Certifiée', desc: 'Normes professionnelles strictes' },
                { label: 'Respect du Vivant', desc: 'Approche écologique & durable' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4a7c3f] flex items-center justify-center text-white text-xs font-bold shrink-0">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                    <span className="text-gray-500 text-sm"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0379496140"
                className="inline-flex items-center justify-center gap-2 bg-[#2d5a27] hover:bg-[#1e3d1a] text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm">
                03 79 49 61 40
              </a>
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2d5a27] text-[#2d5a27] hover:bg-[#f4f9f2] font-semibold px-7 py-3.5 rounded-full transition-colors text-sm">
                Devis gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
