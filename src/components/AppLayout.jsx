import Navigation from './Navigation'
import ScorePanel from './ScorePanel'

export default function AppLayout({ children, currentStage, setCurrentStage, gameWon, score, rounds }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <header className="bg-white/10 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">🏗️ Infrastructure Builder</h1>
        <Navigation currentStage={currentStage} setCurrentStage={setCurrentStage} gameWon={gameWon} />
        <ScorePanel score={score} rounds={rounds} />
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
