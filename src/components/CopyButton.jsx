import { useCallback, useState } from 'react'
import { CA } from '../config'

export function CopyButton() {
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CA)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      try {
        const ta = document.createElement('textarea')
        ta.value = CA
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      } catch {
        window.prompt('Copy contract address:', CA)
      }
    }
  }, [])

  return (
    <button type="button" className={`copy-btn${copied ? ' copied' : ''}`} onClick={onCopy}>
      {copied ? 'Copied ✓' : 'Copy CA'}
    </button>
  )
}
