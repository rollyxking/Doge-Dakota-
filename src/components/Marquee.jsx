const WORDS = [
  '$DOGEDAKOTA',
  'TO THE MOON',
  'MUCH ROCKET',
  'SUCH DAKOTA',
  'DYOR',
  'PACK WELCOME',
]

export function Marquee() {
  const line = WORDS.concat(WORDS)
  return (
    <div className="marquee">
      <div className="marquee-track">
        {line.map((word, i) => (
          <span key={i}>{word} •</span>
        ))}
      </div>
    </div>
  )
}
