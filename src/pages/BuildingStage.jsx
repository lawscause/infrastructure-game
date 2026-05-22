import { useState } from 'react'
import GameBoard from '../components/GameBoard'

export default function BuildingStage({ cards, notify, winRound, setCurrentStage, setSelectedCards }) {
  const [gameStarted, setGameStarted] = useState(false)
  const [placedCards, setPlacedCards] = useState([])
  const [available, setAvailable] = useState([])
  const [gameWon, setGameWon] = useState(false)

  const startGame = () => {
    setGameStarted(true)
    setPlacedCards([])
    setAvailable([...cards])
    setGameWon(false)
  }

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('card', JSON.stringify(card))
  }

  const handleDrop = (card) => {
    if (placedCards.find(c => c.category === card.category)) {
      notify('Duplicate category! Each category can only appear once.', 'warning')
      return
    }
    const newPlaced = [...placedCards, card]
    setPlacedCards(newPlaced)
    setAvailable(available.filter(c => c.id !== card.id))

    if (newPlaced.length >= 5) {
      const categories = new Set(newPlaced.map(c => c.category))
      if (categories.size >= 5) {
        setGameWon(true)
        winRound()
        setSelectedCards(newPlaced)
        notify('🎉 You made an app!', 'success')
      }
    }
  }

  if (!gameStarted) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-white mb-4">🏗️ Building Stage</h2>
        <p className="text-white/60 mb-8">Drag cards into the play area to build a valid infrastructure stack.</p>
        <button onClick={startGame} className="px-8 py-3 bg-indigo-500 text-white rounded-xl text-lg font-bold hover:bg-indigo-400 shadow-lg">Start Game</button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">🏗️ Building Stage</h2>
        {gameWon && <button onClick={() => setCurrentStage('proving')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 font-bold">→ Proving Stage</button>}
      </div>
      <GameBoard availableCards={available} placedCards={placedCards} onDrop={handleDrop} onDragStart={handleDragStart} />
    </div>
  )
}
