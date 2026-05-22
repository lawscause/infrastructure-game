import { useState } from 'react'
import { seedCards } from '../data/cards'

export function useGameState() {
  const [cards, setCards] = useState(seedCards)
  const [currentStage, setCurrentStage] = useState('learning')
  const [score, setScore] = useState(0)
  const [rounds, setRounds] = useState(0)
  const [selectedCards, setSelectedCards] = useState([])
  const [notification, setNotification] = useState(null)

  const notify = (message, type = 'info') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  const addCard = (card) => setCards([...cards, { ...card, id: Date.now().toString() }])
  const updateCard = (id, updated) => setCards(cards.map(c => c.id === id ? { ...c, ...updated } : c))
  const deleteCard = (id) => setCards(cards.filter(c => c.id !== id))

  const winRound = () => {
    setScore(s => s + 1)
    setRounds(r => r + 1)
  }

  return {
    cards, setCards, currentStage, setCurrentStage,
    score, rounds, selectedCards, setSelectedCards,
    notification, notify, addCard, updateCard, deleteCard, winRound,
  }
}
