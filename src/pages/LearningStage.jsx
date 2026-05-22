import { useState } from 'react'
import CardGrid from '../components/CardGrid'
import CardForm from '../components/CardForm'
import Modal from '../components/Modal'

export default function LearningStage({ cards, addCard, updateCard, deleteCard, notify }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)

  const handleEdit = (card) => { setEditing(card); setModalOpen(true) }
  const handleSubmit = (form) => {
    if (editing) { updateCard(editing.id, form); notify('Card updated', 'success') }
    else { addCard(form); notify('Card added', 'success') }
    setModalOpen(false); setEditing(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">📚 Learning Stage</h2>
        <button onClick={() => { setEditing(null); setModalOpen(true) }} className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30">+ Add Card</button>
      </div>
      <p className="text-white/80 text-center text-lg mb-2">Each card reveals a webdev tool and explains what it does. Pay close attention to the color coding for each category.</p>
      <p className="text-white/60 text-sm text-center">Double-click a card to flip it and see details.</p>
      <CardGrid cards={cards} onEdit={handleEdit} onDelete={(id) => { deleteCard(id); notify('Card deleted', 'info') }} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Card' : 'Add Card'}>
        <CardForm card={editing} onSubmit={handleSubmit} onCancel={() => setModalOpen(false)} />
      </Modal>
    </div>
  )
}
