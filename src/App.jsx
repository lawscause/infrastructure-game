import { useGameState } from './hooks/useGameState'
import AppLayout from './components/AppLayout'
import NotificationBanner from './components/NotificationBanner'
import LearningStage from './pages/LearningStage'
import BuildingStage from './pages/BuildingStage'
import ProvingStage from './pages/ProvingStage'

export default function App() {
  const state = useGameState()
  const gameWon = state.selectedCards.length >= 5

  return (
    <AppLayout currentStage={state.currentStage} setCurrentStage={state.setCurrentStage} gameWon={gameWon} score={state.score} rounds={state.rounds}>
      <NotificationBanner notification={state.notification} />
      {state.currentStage === 'learning' && <LearningStage cards={state.cards} addCard={state.addCard} updateCard={state.updateCard} deleteCard={state.deleteCard} notify={state.notify} />}
      {state.currentStage === 'building' && <BuildingStage cards={state.cards} notify={state.notify} winRound={state.winRound} setCurrentStage={state.setCurrentStage} setSelectedCards={state.setSelectedCards} />}
      {state.currentStage === 'proving' && <ProvingStage selectedCards={state.selectedCards} setCurrentStage={state.setCurrentStage} notify={state.notify} />}
    </AppLayout>
  )
}
