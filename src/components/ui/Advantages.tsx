const advantages = [
  {
    img: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/exp%C3%A9rience-1920w-1920w-1920w.png',
    title: 'Expérience',
    text: 'Forte de plusieurs années d\'existence, notre société élagueur détient une parfaite maîtrise des techniques à mettre en œuvre lorsqu\'il s\'agit de faire des travaux d\'élagage.',
  },
  {
    img: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/equipe-1920w-1920w.png',
    title: 'Équipe',
    text: 'Notre équipe est composée d\'élagueurs, d\'arboristes grimpeurs et de jardiniers paysagistes, entre autres.',
  },
  {
    img: 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/recycleduda1-1920w-%281%29-1920w-1920w.png',
    title: 'Environnement',
    text: 'Les travaux d\'élagage réalisés par nos soins sont respectueux des règles horticoles, des végétaux et de l\'environnement.',
  },
]

export default function Advantages() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2d5a27] mb-2">Nos avantages</h2>
        <div className="w-12 h-1 bg-[#4a7c3f] mx-auto mb-10 rounded-full" />
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((a) => (
            <div key={a.title} className="bg-[#f4f9f2] rounded-lg overflow-hidden border border-[#d4e8cf] hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#2d5a27] mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#2d5a27] text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-3">Notre zone d'intervention</h3>
          <div className="w-10 h-0.5 bg-white/40 mx-auto mb-4" />
          <p className="text-green-200 text-sm leading-relaxed text-center max-w-xl mx-auto">
            Nous intervenons dans tout le département des Vosges (88) et ses alentours :
            Saint-Dié-des-Vosges, Épinal, Remiremont, Gérardmer, Bruyères, Senones,
            Raon-l'Étape et toutes les communes environnantes.
          </p>
        </div>
      </div>
    </section>
  )
}
