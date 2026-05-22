import { useState } from 'react'
import CardGrid from '../components/CardGrid'
import CardForm from '../components/CardForm'
import Modal from '../components/Modal'
import { CATEGORIES } from '../data/cards'
import { getCardBg } from '../utils/colors'

const categoryColors = {
  'Compute': 'blue',
  'Deployment / Hosting': 'orange',
  'Frontend': 'cyan',
  'Backend': 'green',
  'Database': 'teal',
  'Storage': 'yellow',
  'Networking': 'indigo',
  'Authentication / Identity': 'pink',
  'AI / ML': 'purple',
  'DevOps / CI-CD': 'gray',
  'Monitoring / Observability': 'rose',
  'Messaging / Event Systems': 'amber',
}

export default function LearningStage({ cards, addCard, updateCard, deleteCard, notify }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [expandedCategory, setExpandedCategory] = useState(null)

  const handleEdit = (card) => { setEditing(card); setModalOpen(true) }
  const handleSubmit = (form) => {
    if (editing) { updateCard(editing.id, form); notify('Card updated', 'success') }
    else { addCard(form); notify('Card added', 'success') }
    setModalOpen(false); setEditing(null)
  }

  const toggleCategory = (cat) => {
    setExpandedCategory(expandedCategory === cat ? null : cat)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">📚 Learning Stage</h2>
        <img src="/ABCs.jpeg" alt="ABCs" className="h-16 rounded" />
        <button onClick={() => { setEditing(null); setModalOpen(true) }} className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30">+ Add Card</button>
      </div>
      <p className="text-white/80 text-center text-xl mb-2">Each card reveals a webdev tool and explains what it does. Pay close attention to the color coding for each category.</p>
      <p className="text-white/60 text-lg text-center">Click a category to expand it. Double-click a card to flip it and see details.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`${getCardBg(categoryColors[cat])} rounded-xl p-4 text-white font-bold text-center shadow-lg hover:scale-105 transition-transform ${expandedCategory === cat ? 'ring-4 ring-white' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {expandedCategory && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">{expandedCategory}</h3>
            <button onClick={() => setExpandedCategory(null)} className="text-white/60 hover:text-white text-sm px-3 py-1 bg-white/10 rounded-lg">Collapse ✕</button>
          </div>
          <CardGrid
            cards={cards.filter(c => c.category === expandedCategory)}
            onEdit={handleEdit}
            onDelete={(id) => { deleteCard(id); notify('Card deleted', 'info') }}
          />
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Card' : 'Add Card'}>
        <CardForm card={editing} onSubmit={handleSubmit} onCancel={() => setModalOpen(false)} />
      </Modal>
    </div>
  )
}
