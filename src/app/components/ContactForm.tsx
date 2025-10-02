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
    <div className="bg-noir border border-gray-light rounded-xl p-8">
      <form id="contact-form" action={handleSubmit} className="space-y-6">
        {/* Campo Nome */}
        <div>
          <label htmlFor="name" className="font-titulo text-electric font-semibold block mb-2 text-sm uppercase tracking-wider">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            required
            className="w-full px-4 py-3 bg-dark border border-gray-light rounded-lg text-white placeholder-ghost focus:border-electric focus:outline-none transition-all"
          />
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="font-titulo text-electric font-semibold block mb-2 text-sm uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            required
            className="w-full px-4 py-3 bg-dark border border-gray-light rounded-lg text-white placeholder-ghost focus:border-electric focus:outline-none transition-all"
          />
        </div>

        {/* Campo Mensagem */}
        <div>
          <label htmlFor="message" className="font-titulo text-electric font-semibold block mb-2 text-sm uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me what's on your mind..."
            required
            rows={5}
            className="w-full px-4 py-3 bg-dark border border-gray-light rounded-lg text-white placeholder-ghost focus:border-electric focus:outline-none transition-all resize-none"
          />
        </div>

        {/* Botão Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full font-titulo bg-electric text-noir px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        {/* Mensagem de Status */}
        {message && (
          <div className={`p-4 rounded-lg text-center font-texto ${
            message.type === 'success'
              ? 'bg-electric/10 text-electric border border-electric'
              : 'bg-red-500/10 text-red-400 border border-red-400'
          }`}>
            {message.text}
          </div>
        )}

        {/* Privacy Note */}
        <p className="font-texto text-sm text-ghost text-center">
          Your data is safe. Only used to respond to your message.
        </p>
      </form>
    </div>
  )
}
