import { useEffect } from 'react'

export function useOnEscape(fn: () => void, isListening: boolean): void {
  useEffect(() => {
    if (isListening) {
      const listener = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          fn()
        }
      }
      document.addEventListener('keydown', listener)
      return () => document.removeEventListener('keydown', listener)
    }
    return () => {}
  }, [isListening])
}
