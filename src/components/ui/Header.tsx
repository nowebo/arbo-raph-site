import { useState } from 'react'

const LOGO = 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/5d361537d70000f216e93fa9-1920w.png'

export default function Header() {
  const [showNumber, setShowNumber] = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 shrink-0">
          <img src={LOGO} alt="Arbo Raph" className="h-12 w-auto object-contain" />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <a href="#hero"        className="hover:text-[#4a7c3f] transition-colors">Accueil</a>
          <a href="#services"    className="hover:text-[#4a7c3f] transition-colors">Services</a>
          <a href="#portfolio"   className="hover:text-[#4a7c3f] transition-colors">Réalisations</a>
          <a href="#temoignages" className="hover:text-[#4a7c3f] transition-colors">Témoignages</a>
          <a href="#contact"     className="hover:text-[#4a7c3f] transition-colors">Contact</a>
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex flex-col items-end gap-1">
          {showNumber ? (
            <a href="tel:0379496140" className="font-bold text-[#2d5a27] text-base">03 79 49 61 40</a>
          ) : (
            <button
              onClick={() => setShowNumber(true)}
              className="bg-[#4a7c3f] hover:bg-[#2d5a27] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Afficher numéro
            </button>
          )}
          <div className="flex gap-3 text-xs text-gray-400">
            <span>Appel non surtaxé</span>
            <span>·</span>
            <a href="#contact" className="text-[#e07b2a] font-semibold hover:underline">Recevoir mon devis gratuit</a>
          </div>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          {[['Accueil','#hero'],['Services','#services'],['Réalisations','#portfolio'],['Témoignages','#temoignages'],['Contact','#contact']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
               className="block px-6 py-3 text-sm font-semibold text-gray-700 border-b hover:bg-gray-50">
              {label}
            </a>
          ))}
          <div className="p-4">
            <a href="tel:0379496140" className="block text-center bg-[#4a7c3f] text-white font-bold py-3 rounded">
              03 79 49 61 40
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
