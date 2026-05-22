import { useState } from 'react'
import { getCardBg, getCardBorder } from '../utils/colors'

export default function InfrastructureCard({ card, onEdit, onDelete, draggable, onDragStart, animate }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`relative w-48 h-64 cursor-pointer select-none ${animate ? 'animate-fall' : ''}`}
      draggable={draggable}
      onDragStart={e => onDragStart && onDragStart(e, card)}
      onDoubleClick={() => setFlipped(!flipped)}
    >
      <div className={`w-full h-full rounded-xl shadow-lg border-2 ${getCardBorder(card.color)} transition-transform duration-500 ${flipped ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
        {/* Front */}
        <div className={`absolute inset-0 rounded-xl ${getCardBg(card.color)} text-white p-4 flex flex-col items-center justify-center backface-hidden`} style={{ backfaceVisibility: 'hidden' }}>
          <h3 className="text-lg font-bold text-center">{card.name}</h3>
          <span className="text-xs mt-2 bg-white/20 px-2 py-1 rounded">{card.category}</span>
          {(onEdit || onDelete) && (
            <div className="absolute bottom-2 flex gap-2">
              {onEdit && <button onClick={e => { e.stopPropagation(); onEdit(card) }} className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30">Edit</button>}
              {onDelete && <button onClick={e => { e.stopPropagation(); onDelete(card.id) }} className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30">Delete</button>}
            </div>
          )}
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-xl bg-white text-gray-800 p-4 flex flex-col [transform:rotateY(180deg)]" style={{ backfaceVisibility: 'hidden' }}>
          <h3 className="font-bold text-sm">{card.name}</h3>
          <span className="text-xs text-gray-500">{card.category} • {card.color}</span>
          <p className="text-xs mt-2">{card.definition}</p>
          <ul className="text-xs mt-2 list-disc pl-4">
            {card.useCases.map(u => <li key={u}>{u}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
