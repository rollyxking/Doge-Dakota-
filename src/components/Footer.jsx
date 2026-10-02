import { TELEGRAM_URL, X_URL } from '../config'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-row">
          <div className="brand">
            <span className="brand-dot"></span>
            Doge Dakota
          </div>
          <div className="nav-links">
            <a className="pill" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="pill" href={X_URL} target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>
        <p className="disclaimer">
          Doge Dakota is a meme coin with no intrinsic value or expectation of financial return.
          It is for entertainment purposes only. Always verify the contract address above
          against the official Telegram and X before you interact with it, and never trust a CA
          from anywhere else. Not financial advice — do your own research.
        </p>
      </div>
    </footer>
  )
}
