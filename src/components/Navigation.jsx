export default function Navigation({ currentStage, setCurrentStage, gameWon }) {
  const stages = [
    { id: 'learning', label: 'Learning' },
    { id: 'building', label: 'Building' },
    { id: 'proving', label: 'Quiz', disabled: !gameWon },
  ]
  return (
    <nav className="flex gap-2">
      {stages.map(s => (
        <button
          key={s.id}
          onClick={() => !s.disabled && setCurrentStage(s.id)}
          disabled={s.disabled}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            currentStage === s.id ? 'bg-white text-indigo-700 shadow' : 'text-white/80 hover:text-white hover:bg-white/10'
          } ${s.disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          {s.label}
        </button>
      ))}
    </nav>
  )
}
