const LOGO = 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/5d361537d70000f216e93fa9-1920w.png'

export default function Footer() {
  return (
    <footer className="bg-[#1e3d1a] text-gray-400">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <img
              src={LOGO}
              alt="Arbo Raph"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert opacity-70"
            />
            <p className="text-sm leading-relaxed mb-4">
              Paysagiste & Élagueur professionnel à Saint-Dié-des-Vosges.<br />
              Élagage, abattage, création et entretien de jardins dans les Vosges.
            </p>
            <div className="space-y-1.5 text-sm">
              <p>📍 6 rue Pair, 88580 Saulcy-sur-Meurthe</p>
              <a href="tel:0379496140" className="block hover:text-white transition-colors">
                📞 03 79 49 61 40
              </a>
              <a href="mailto:arbo.raph@orange.fr" className="block hover:text-white transition-colors">
                ✉️ arbo.raph@orange.fr
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Élagage sur corde", "Abattage d'arbres", "Création de jardin", "Entretien de jardin", "Rognage de souche", "Broyage de végétaux"].map(s => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Zone d'intervention</h4>
            <p className="text-sm leading-relaxed mb-5">
              Département des Vosges (88)<br />
              Saint-Dié-des-Vosges · Épinal<br />
              Remiremont · Gérardmer<br />
              Bruyères · Raon-l'Étape
            </p>
            <a href="#contact"
              className="inline-block bg-[#4a7c3f] hover:bg-[#2d5a27] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
              Obtenir un Devis
            </a>
          </div>
        </div>

        <div className="border-t border-[#2d5a27] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Arbo Raph — Tous droits réservés</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Vie privée</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
