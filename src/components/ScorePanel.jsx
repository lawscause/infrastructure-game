export default function ScorePanel({ score, rounds }) {
  return (
    <div className="flex gap-4 text-white/90 text-sm">
      <span>Score: <strong>{score}</strong></span>
      <span>Rounds: <strong>{rounds}</strong></span>
    </div>
  )
}
