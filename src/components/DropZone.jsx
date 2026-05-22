export default function DropZone({ onDrop, children }) {
  const handleDragOver = (e) => e.preventDefault()
  const handleDrop = (e) => {
    e.preventDefault()
    const cardData = e.dataTransfer.getData('card')
    if (cardData) onDrop(JSON.parse(cardData))
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="min-h-[300px] border-4 border-dashed border-white/30 rounded-2xl p-6 flex flex-wrap gap-4 items-center justify-center transition hover:border-white/50 hover:bg-white/5"
    >
      {children}
    </div>
  )
}
