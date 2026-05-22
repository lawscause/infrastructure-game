import { useState, useEffect } from 'react'
import { CATEGORIES } from '../data/cards'

export default function CardForm({ card, onSubmit, onCancel }) {
  const [form, setForm] = useState({ name: '', category: CATEGORIES[0], color: 'blue', definition: '', useCases: '' })

  useEffect(() => {
    if (card) setForm({ ...card, useCases: card.useCases.join(', ') })
  }, [card])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ ...form, useCases: form.useCases.split(',').map(s => s.trim()).filter(Boolean) })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="w-full border rounded px-3 py-2" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
      <select className="w-full border rounded px-3 py-2" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
      </select>
      <input className="w-full border rounded px-3 py-2" placeholder="Color (e.g. blue, red)" value={form.color} onChange={e => setForm({ ...form, color: e.target.value })} required />
      <textarea className="w-full border rounded px-3 py-2" placeholder="Definition" value={form.definition} onChange={e => setForm({ ...form, definition: e.target.value })} required />
      <input className="w-full border rounded px-3 py-2" placeholder="Use cases (comma separated)" value={form.useCases} onChange={e => setForm({ ...form, useCases: e.target.value })} required />
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
        <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">{card ? 'Update' : 'Add'}</button>
      </div>
    </form>
  )
}
