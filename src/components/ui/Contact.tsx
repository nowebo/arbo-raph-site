import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    nom: '', email: '', type: 'Élagage', message: '', acceptCgv: false,
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="py-20 relative"
      style={{ backgroundImage: 'url(/images/garden.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-[#4a7c3f] font-semibold mb-3">Devis Gratuit</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Commencez votre Projet</h2>
          <p className="text-gray-500 text-sm">Donnez-lui à être une étude de jardin en quelques clics.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-[#f4f9f2] flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c3f" strokeWidth="2" className="w-7 h-7">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Demande envoyée !</h3>
              <p className="text-gray-500 text-sm">Nous vous contacterons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Nom</label>
                  <input
                    type="text" required placeholder="Jean Dupont"
                    value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4a7c3f] bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Email</label>
                  <input
                    type="email" required placeholder="jean@exemple.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4a7c3f] bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Type de projet</label>
                <select
                  value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4a7c3f] bg-gray-50 focus:bg-white transition-colors"
                >
                  <option>Élagage</option>
                  <option>Abattage</option>
                  <option>Création de jardin</option>
                  <option>Entretien de jardin</option>
                  <option>Rognage de souche</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea
                  required rows={4} placeholder="Parlez-nous de votre jardin..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4a7c3f] bg-gray-50 focus:bg-white transition-colors resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox" required
                  checked={form.acceptCgv}
                  onChange={e => setForm({ ...form, acceptCgv: e.target.checked })}
                  className="mt-0.5 accent-[#4a7c3f]"
                />
                <span className="text-xs text-gray-500 leading-relaxed">
                  J'accepte les conditions générales d'utilisation et la politique de confidentialité. *
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#2d5a27] hover:bg-[#1e3d1a] text-white font-semibold py-4 rounded-xl text-sm transition-colors"
              >
                Envoyer la demande
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <a href="tel:0379496140" className="flex items-center gap-2 hover:text-[#2d5a27] transition-colors">
            <span>📞</span> 03 79 49 61 40
          </a>
          <a href="mailto:arbo.raph@orange.fr" className="flex items-center gap-2 hover:text-[#2d5a27] transition-colors">
            <span>✉️</span> arbo.raph@orange.fr
          </a>
          <span className="flex items-center gap-2">
            <span>📍</span> Saulcy-sur-Meurthe (88)
          </span>
        </div>
      </div>
    </section>
  )
}
