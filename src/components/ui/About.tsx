export default function About() {
  return (
    <section id="about" className="py-14 bg-[#f4f9f2]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/arbre+paysagiste+elagage-1920w.png"
              alt="Arbo Raph élagage professionnel"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2d5a27] mb-2">À propos d'Arbo Raph</h2>
            <div className="w-10 h-1 bg-[#4a7c3f] mb-5 rounded-full" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Arbo Raph est une entreprise d'élagage moderne, spécialisée dans les travaux de taille
              et d'abattage d'arbre dangereux sur toutes les essences d'arbres et de toutes tailles.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Arboriste, élagueur grimpeur, on s'adresse aux particuliers comme aux professionnels.
              Nous faisons aussi de la location de broyage de branches avec chauffeur.
            </p>
            <p className="font-semibold text-[#2d5a27] mb-6">Contactez les vrais spécialistes de l'arbre.</p>
            <div className="flex flex-col gap-3">
              <a href="tel:0379496140" className="inline-flex items-center gap-2 bg-[#4a7c3f] hover:bg-[#2d5a27] text-white font-bold px-6 py-3 rounded transition-colors w-fit">
                📞 03 79 49 61 40
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border-2 border-[#4a7c3f] text-[#4a7c3f] hover:bg-[#4a7c3f] hover:text-white font-bold px-6 py-3 rounded transition-colors w-fit">
                Recevoir mon devis gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
