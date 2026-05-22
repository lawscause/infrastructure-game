import { useState, useEffect, useRef } from 'react'
import DropZone from '../components/DropZone'

function BuildingCard({ card, draggable, onDragStart }) {
  return (
    <div
      className="w-48 h-64 rounded-xl bg-purple-300 border-2 border-purple-200 shadow-lg p-4 flex flex-col items-center justify-center cursor-grab select-none"
      draggable={draggable}
      onDragStart={e => onDragStart && onDragStart(e, card)}
    >
      {card.image && <img src={card.image} alt={card.name} className="w-16 h-16 object-contain mb-2 rounded" />}
      <h3 className="text-lg font-bold text-center text-purple-900">{card.name}</h3>
    </div>
  )
}

export default function BuildingStage({ cards, notify, winRound, setCurrentStage, setSelectedCards }) {
  const [gameStarted, setGameStarted] = useState(false)
  const [deck, setDeck] = useState([])
  const [droppedCard, setDroppedCard] = useState(null)
  const [placedCards, setPlacedCards] = useState([])
  const [gameWon, setGameWon] = useState(false)
  const [dropIndex, setDropIndex] = useState(0)
  const [warning, setWarning] = useState('')
  const timerRef = useRef(null)

  const startGame = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    setDeck(shuffled)
    setPlacedCards([])
    setDroppedCard(null)
    setDropIndex(0)
    setGameWon(false)
    setWarning('')
    setGameStarted(true)
  }

  useEffect(() => {
    if (!gameStarted || gameWon || dropIndex >= deck.length) return
    const delay = Math.max(400, 3000 - dropIndex * 150)
    timerRef.current = setTimeout(() => setDroppedCard(deck[dropIndex]), delay)
    return () => clearTimeout(timerRef.current)
  }, [gameStarted, dropIndex, deck, gameWon])

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('card', JSON.stringify(card))
  }

  const handleDrop = (card) => {
    setWarning('')
    if (placedCards.length >= 5) {
      setWarning('Maximum 5 cards allowed!')
      return
    }
    if (placedCards.find(c => c.category === card.category)) {
      setWarning(`Duplicate category! You already have a "${card.category}" card.`)
      return
    }
    const newPlaced = [...placedCards, card]
    setPlacedCards(newPlaced)
    setDroppedCard(null)
    setDropIndex(i => i + 1)

    const categories = new Set(newPlaced.map(c => c.category))
    if (newPlaced.length >= 5 && categories.size >= 5) {
      setGameWon(true)
      winRound()
      setSelectedCards(newPlaced)
      notify('🎉 You made an app!', 'success')
    }
  }

  const skipCard = () => {
    setWarning('')
    setDroppedCard(null)
    setDropIndex(i => i + 1)
  }

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-8">
        <h2 className="text-3xl font-bold text-white">🏗️ Building Stage</h2>
        <p className="text-white/60 text-center max-w-md">Cards will drop one at a time. Drag them into the play area to build a valid infrastructure stack with 5 unique categories.</p>
        <div className="relative w-48 h-64">
          {cards.slice(0, 8).map((_, i) => (
            <div
              key={i}
              className="absolute w-48 h-64 rounded-xl bg-purple-300 border-2 border-purple-200 shadow-lg"
              style={{ top: -i * 2, left: i * 1, zIndex: 8 - i }}
            >
              {i === 0 && <div className="flex items-center justify-center h-full text-purple-600 text-4xl font-bold">🃏</div>}
            </div>
          ))}
        </div>
        <button onClick={startGame} className="px-8 py-3 bg-indigo-500 text-white rounded-xl text-lg font-bold hover:bg-indigo-400 shadow-lg transition">Start Game</button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">🏗️ Building Stage</h2>
        <div className="flex gap-3 items-center">
          <span className="text-white/60 text-sm">Cards remaining: {deck.length - dropIndex}</span>
          {gameWon && <button onClick={() => setCurrentStage('proving')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 font-bold">→ Proving Stage</button>}
        </div>
      </div>

      <div className="flex gap-8 items-start justify-center flex-wrap">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white/70 text-sm">Deck</h3>
          <div className="relative w-48 h-64">
            {deck.slice(dropIndex).slice(0, 5).map((_, i) => (
              <div key={i} className="absolute w-48 h-64 rounded-xl bg-purple-300 border-2 border-purple-200 shadow" style={{ top: -i * 2, left: i * 1, zIndex: 5 - i }} />
            ))}
            {deck.length - dropIndex === 0 && <div className="w-48 h-64 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center text-white/30">Empty</div>}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white/70 text-sm">Current Card</h3>
          <div className="w-48 h-64 flex items-center justify-center">
            {droppedCard ? (
              <div className="animate-fall">
                <BuildingCard card={droppedCard} draggable onDragStart={handleDragStart} />
              </div>
            ) : (
              <div className="w-48 h-64 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center text-white/30 text-sm">Waiting...</div>
            )}
          </div>
          {droppedCard && <button onClick={skipCard} className="text-white/50 text-sm hover:text-white/80 transition">Skip →</button>}
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <div className="flex-1">
          <h3 className="text-white/70 text-sm mb-2">Application Play Area ({placedCards.length}/5 cards)</h3>
          <DropZone onDrop={handleDrop}>
            {placedCards.length === 0 ? (
              <p className="text-white/40">Drop cards here to build your infrastructure stack</p>
            ) : (
              placedCards.map(card => <BuildingCard key={card.id} card={card} />)
            )}
          </DropZone>
        </div>
        {warning && (
          <div className="bg-yellow-500/90 text-black px-4 py-3 rounded-lg font-medium max-w-xs self-center">
            ⚠️ {warning}
          </div>
        )}
      </div>
    </div>
  )
}
