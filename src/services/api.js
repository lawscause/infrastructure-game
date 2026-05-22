const API_BASE = import.meta.env.VITE_API_URL || ''

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

export const api = {
  getCards: () => request('/cards'),
  createCard: (card) => request('/cards', { method: 'POST', body: JSON.stringify(card) }),
  updateCard: (id, card) => request(`/cards/${id}`, { method: 'PUT', body: JSON.stringify(card) }),
  deleteCard: (id) => request(`/cards/${id}`, { method: 'DELETE' }),
  validateRound: (cards) => request('/validate-round', { method: 'POST', body: JSON.stringify({ cards }) }),
  validateProving: (answers) => request('/validate-proving-stage', { method: 'POST', body: JSON.stringify({ answers }) }),
}
