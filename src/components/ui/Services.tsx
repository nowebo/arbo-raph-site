const services = [
  {
    title: 'Élagage',
    img: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/arbre+paysagiste+elagage-1920w.png',
    items: ['Élagage sur corde','Arboriste grimpeur','Tailles d\'ornement','Taille de fruitiers','Taille d\'arbustes ornementaux','Évacuation déchets verts','Haubanage'],
  },
  {
    title: 'Paysagiste',
    img: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/jardin+paysagiste+%281%29-1920w.png',
    items: ['Création de jardin','Entretien de jardin','Aménagement de jardin','Pose de clôture','Conception paysagère','Plantation arbres','Plantation arbustes'],
  },
  {
    title: 'Abattage',
    img: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/axe-1920w+%281%29-1920w.png',
    items: ['Abattage dangereux','Abattage toute hauteur','Travaux sur corde','Travaux en hauteur','Démontage','Rognage souche','Dessouchage','Broyage'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2d5a27] mb-2">Notre entreprise</h2>
        <div className="w-12 h-1 bg-[#4a7c3f] mx-auto mb-10 rounded-full" />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-[#2d5a27]/50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{s.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4a7c3f] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-5 block text-center bg-[#4a7c3f] hover:bg-[#2d5a27] text-white font-semibold py-2.5 rounded text-sm transition-colors">
                  Demander un devis
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed">
            Arbo Raph est une entreprise d'élagage moderne, spécialisée dans les travaux de taille et d'abattage d'arbre dangereux sur toutes les essences d'arbres et de toutes tailles. Arboriste, élagueur grimpeur, on s'adresse aux particuliers comme aux professionnels. Nous faisons aussi de la location de broyage de branches avec chauffeur.
          </p>
          <p className="mt-3 font-semibold text-[#2d5a27]">Contactez les vrais spécialistes de l'arbre.</p>
        </div>
      </div>
    </section>
  )
}
