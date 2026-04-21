export default function Footer() {
  return (
    <footer className="bg-[#1e3d1a] text-gray-400">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-3">Arbo Raph</h4>
            <p className="text-sm leading-relaxed">
              Paysagiste & Élagueur professionnel à Saint-Dié-des-Vosges.<br />
              Élagage, abattage, création et entretien de jardins dans les Vosges.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>📍 6 rue Pair, 88580 SAULCY SUR MEURTHE</p>
              <p>
                <a href="tel:0379496140" className="hover:text-white">📞 03 79 49 61 40</a>
              </p>
              <p>
                <a href="mailto:arbo.raph@orange.fr" className="hover:text-white">✉️ arbo.raph@orange.fr</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Services</h4>
            <ul className="space-y-1.5 text-sm">
              {['Élagage sur corde', 'Abattage d\'arbres', 'Création de jardin', 'Entretien de jardin', 'Rognage de souche', 'Broyage de végétaux'].map(s => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Zone d'intervention</h4>
            <p className="text-sm leading-relaxed">
              Département des Vosges (88)<br />
              Saint-Dié-des-Vosges · Épinal<br />
              Remiremont · Gérardmer<br />
              Bruyères · Raon-l'Étape<br />
              et environs
            </p>
          </div>
        </div>

        <div className="border-t border-[#2d5a27] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} Arbo Raph — Tous droits réservés</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Protection de la vie privée</a>
            <a href="#" className="hover:text-white transition-colors">Infos cookies</a>
          </div>
          <p>Réalisé par <span className="text-gray-300">Solocal</span></p>
        </div>
      </div>
    </footer>
  )
}
