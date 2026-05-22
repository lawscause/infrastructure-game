import { useState } from 'react'
import { CATEGORIES } from '../data/cards'
import { getCardBg } from '../utils/colors'

export default function ProvingStage({ selectedCards, setCurrentStage, notify }) {
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const handleValidate = () => {
    const allCorrect = selectedCards.every(card => answers[card.id] === card.category)
    if (allCorrect) {
      setResult('success')
      notify('Correct. You proved you understand this infrastructure stack.', 'success')
    } else {
      setResult('fail')
      notify('Not quite. Go back to the learning stage.', 'error')
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-white">🎓 Proving Stage</h2>
      <p className="text-white/60">Categorize each card correctly to prove your understanding.</p>
      <div className="space-y-4">
        {selectedCards.map(card => (
          <div key={card.id} className={`flex items-center gap-4 p-4 rounded-xl ${getCardBg(card.color)} text-white`}>
            <span className="font-bold flex-1">{card.name}</span>
            <select
              className="rounded px-3 py-2 text-gray-800"
              value={answers[card.id] || ''}
              onChange={e => setAnswers({ ...answers, [card.id]: e.target.value })}
            >
              <option value="">Select category...</option>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        ))}
      </div>
      {!result && (
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
