import { TELEGRAM_URL, X_URL } from '../config'

export function Nav() {
  return (
    <div className="wrap">
      <nav className="topbar">
        <div className="brand">
          <span className="brand-dot"></span>
          Doge Dakota
        </div>
        <div className="nav-links">
          <a className="pill" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a className="pill" href={X_URL} target="_blank" rel="noreferrer">
            X / Twitter
          </a>
          <a className="pill solid" href="#buy">
            Get $DOGEDAKOTA
          </a>
        </div>
      </nav>
    </div>
  )
}
