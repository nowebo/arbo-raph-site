import { useState, useEffect } from 'react'

const LOGO = 'https://le-de.cdn-website.com/b6e4cec270014a6fbeb11456622685d5/dms3rep/multi/opt/5d361537d70000f216e93fa9-1920w.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links: [string, string][] = [
    ['Accueil', '#hero'],
    ['Services', '#services'],
    ['Portfolio', '#portfolio'],
    ['Témoignages', '#temoignages'],
    ['Contact', '#contact'],
  ]

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-200 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center shrink-0">
          <img src={LOGO} alt="Arbo Raph" className="h-10 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(([label, href]) => (
            <a key={href} href={href}
              className="text-sm font-medium text-gray-600 hover:text-[#4a7c3f] transition-colors relative group py-1">
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4a7c3f] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0379496140" className="text-sm font-semibold text-[#2d5a27] hover:underline">
            03 79 49 61 40
          </a>
          <a href="#contact"
            className="bg-[#2d5a27] hover:bg-[#1e3d1a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            Obtenir un Devis
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-gray-600 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-gray-600 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-gray-600 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              className="block px-6 py-3.5 text-sm font-medium text-gray-700 border-b border-gray-50 hover:bg-[#f4f9f2]">
              {label}
            </a>
          ))}
          <div className="p-4">
            <a href="#contact" className="block text-center bg-[#2d5a27] text-white font-bold py-3 rounded-full">
              Obtenir un Devis
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
