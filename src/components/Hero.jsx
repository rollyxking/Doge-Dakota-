import { CA, TELEGRAM_URL, X_URL } from '../config'
import { CopyButton } from './CopyButton'
import mascot from '../assets/mascot.jpg'

export function Hero() {
  return (
    <div className="wrap">
      <div className="hero">
        <div>
          <span className="eyebrow">● live on-chain · community run</span>
          <h1 className="headline">
            One dog.
            <br />
            <span className="flash-grad">One rocket. One moon.</span>
          </h1>
          <p className="sub">
            Doge Dakota — part dog, part legend, fully committed to the bit. Sunglasses on,
            chain out, rocket lit. The pack decides where it lands.
          </p>
          <div className="cta-row">
            <a className="pill solid" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              Join Telegram
            </a>
            <a className="pill" href={X_URL} target="_blank" rel="noreferrer">
              Follow on X
            </a>
          </div>
          <div id="buy" className="ca-box">
            <span className="ca-label">Contract</span>
            <span className="ca-value">{CA}</span>
            <CopyButton />
          </div>
        </div>
        <div className="hero-art">
          <div className="art-glow"></div>
          <div className="art-frame">
            <img src={mascot} alt="Doge Dakota mascot artwork, a doge character in front of the moon with a rocket" loading="eager" />
            <div className="art-tag">
              <span>DOGE DAKOTA</span>
              <span>pack rated 🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
