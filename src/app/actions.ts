'use server'

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // Validação básica
  if (!name || !email || !message) {
    return { success: false, error: 'Todos os campos são obrigatórios' }
  }

  if (!email.includes('@')) {
    return { success: false, error: 'Email inválido' }
  }

  try {
    // Enviar para webhook n8n
    const response = await fetch('https://bizuai-n8n-01.ngvdwn.easypanel.host/webhook/form-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem')
    }

    return { success: true }
  } catch (error) {
    console.error('Erro no formulário:', error)
    return { success: false, error: 'Erro ao enviar mensagem. Tenta de novo ou me chama direto no LinkedIn.' }
  }
}
