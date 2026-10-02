import { TELEGRAM_URL, X_URL } from '../config'

export function Join() {
  return (
    <section className="block">
      <div className="wrap">
        <h2>Pull up</h2>
        <p className="lead">Links below. No middlemen, no forms — just the chat and the feed.</p>
        <div className="join">
          <div className="join-card">
            <h3>Telegram</h3>
            <p>Where the pack actually talks. Alpha, memes, and chaos in real time.</p>
            <a className="pill solid" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              Open Telegram
            </a>
          </div>
          <div className="join-card">
            <h3>X (Twitter)</h3>
            <p>Announcements, shitposts, and whatever Dakota does next.</p>
            <a className="pill solid" href={X_URL} target="_blank" rel="noreferrer">
              Open X profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
