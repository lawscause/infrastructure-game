import { useState } from 'react'
import { CATEGORIES } from '../data/cards'

export default function ProvingStage({ selectedCards, setCurrentStage, notify }) {
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [wrongIds, setWrongIds] = useState([])
  const [attempts, setAttempts] = useState(0)

  const handleValidate = () => {
    const wrong = selectedCards.filter(card => answers[card.id] !== card.category).map(c => c.id)
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    if (wrong.length === 0) {
      setResult('success')
      setWrongIds([])
      notify('Correct. You proved you understand this infrastructure stack.', 'success')
    } else {
      setWrongIds(wrong)
      if (newAttempts >= 3) {
        setResult('fail')
        notify('Not quite. Go back to the learning stage.', 'error')
      } else {
        notify(`${wrong.length} incorrect. ${3 - newAttempts} attempt(s) remaining.`, 'warning')
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-white">🎓 Proving Stage</h2>
      <p className="text-white/60">Categorize each card correctly to prove your understanding. You have 3 attempts.</p>
      <p className="text-white/40 text-sm">Attempts: {attempts}/3</p>
      <div className="space-y-4">
        {selectedCards.map(card => (
          <div key={card.id} className={`flex items-center gap-4 p-4 rounded-xl ${wrongIds.includes(card.id) ? 'bg-red-400 ring-2 ring-red-300' : 'bg-blue-300'}`}>
            {card.image && <img src={card.image} alt={card.name} className="w-10 h-10 object-contain rounded" />}
            <span className="font-bold flex-1 text-gray-900">{card.name}</span>
            <select
              className="rounded px-3 py-2 text-gray-800"
              value={answers[card.id] || ''}
              onChange={e => { setAnswers({ ...answers, [card.id]: e.target.value }); setWrongIds(ids => ids.filter(id => id !== card.id)) }}
            >
              <option value="">Select category...</option>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        ))}
      </div>
      {result === null && (
        <button onClick={handleValidate} disabled={Object.keys(answers).length < selectedCards.length} className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-400 disabled:opacity-40">Validate</button>
      )}
      {result === 'success' && (
        <div className="space-y-3">
          <p className="text-green-300 font-bold">✅ Correct. You proved you understand this infrastructure stack.</p>
          <div className="flex gap-3">
            <button onClick={() => setCurrentStage('building')} className="px-4 py-2 bg-indigo-500 text-white rounded-lg">Keep Going</button>
            <button onClick={() => setCurrentStage('learning')} className="px-4 py-2 bg-white/20 text-white rounded-lg">End Game</button>
          </div>
        </div>
      )}
      {result === 'fail' && (
        <div className="space-y-3">
          <p className="text-red-300 font-bold">❌ Not quite. Go back to the learning stage.</p>
          <button onClick={() => setCurrentStage('learning')} className="px-4 py-2 bg-white/20 text-white rounded-lg">Back to Learning Stage</button>
        </div>
      )}
    </div>
  )
}
