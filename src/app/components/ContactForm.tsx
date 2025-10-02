'use client'

import { useState } from 'react'
import { submitContact } from '../actions'

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setMessage(null)

    const result = await submitContact(formData)

    if (result.success) {
      setMessage({ type: 'success', text: '✓ Mensagem enviada com sucesso! Vou te responder em breve. Valeu pelo contato!' })
      // Reset form
      const form = document.getElementById('contact-form') as HTMLFormElement
      form?.reset()
    } else {
      setMessage({ type: 'error', text: `✗ ${result.error}` })
    }

    setIsLoading(false)
  }

  return (
    <div className="bg-slate p-8 rounded-lg border-2 border-cyan">
      <form id="contact-form" action={handleSubmit} className="space-y-6">
        {/* Campo Nome */}
        <div>
          <label htmlFor="name" className="font-texto text-cyan font-semibold block mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome completo"
            required
            className="w-full px-4 py-3 bg-carvao border-2 border-steel-blue rounded-lg text-off-white placeholder-steel-blue focus:border-cyan focus:outline-none transition-colors"
          />
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="font-texto text-cyan font-semibold block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seu@email.com"
            required
            className="w-full px-4 py-3 bg-carvao border-2 border-steel-blue rounded-lg text-off-white placeholder-steel-blue focus:border-cyan focus:outline-none transition-colors"
          />
        </div>

        {/* Campo Mensagem */}
        <div>
          <label htmlFor="message" className="font-texto text-cyan font-semibold block mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Me fala o que você tem em mente..."
            required
            rows={5}
            className="w-full px-4 py-3 bg-carvao border-2 border-steel-blue rounded-lg text-off-white placeholder-steel-blue focus:border-cyan focus:outline-none transition-colors resize-none"
          />
        </div>

        {/* Botão Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full font-titulo bg-cyan text-carvao px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-magenta disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
        >
          {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {/* Mensagem de Status */}
        {message && (
          <div className={`p-4 rounded-lg text-center font-texto ${
            message.type === 'success' 
              ? 'bg-cyan/10 text-cyan border border-cyan' 
              : 'bg-magenta/10 text-magenta border border-magenta'
          }`}>
            {message.text}
          </div>
        )}

        {/* Privacy Note */}
        <p className="font-texto text-sm text-steel-blue text-center">
          Seus dados são seguros. Uso apenas para responder seu contato.
        </p>
      </form>
    </div>
  )
}
