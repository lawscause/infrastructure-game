import CardGrid from './CardGrid'
import DropZone from './DropZone'
import InfrastructureCard from './InfrastructureCard'

export default function GameBoard({ availableCards, placedCards, onDrop, onDragStart }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-white/70 text-sm mb-2">Available Cards (drag to play area)</h3>
        <CardGrid cards={availableCards} draggable onDragStart={onDragStart} animate />
      </div>
      <div>
        <h3 className="text-white/70 text-sm mb-2">Application Play Area ({placedCards.length}/5 cards)</h3>
        <DropZone onDrop={onDrop}>
          {placedCards.length === 0 ? (
            <p className="text-white/40">Drop cards here to build your infrastructure stack</p>
          ) : (
            placedCards.map(card => <InfrastructureCard key={card.id} card={card} />)
          )}
        </DropZone>
      </div>
    </div>
  )
}
