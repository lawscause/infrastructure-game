import InfrastructureCard from './InfrastructureCard'

export default function CardGrid({ cards, onEdit, onDelete, draggable, onDragStart, animate }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {cards.map((card, i) => (
        <InfrastructureCard
          key={card.id}
          card={card}
          onEdit={onEdit}
          onDelete={onDelete}
          draggable={draggable}
          onDragStart={onDragStart}
          animate={animate}
        />
      ))}
    </div>
  )
}
