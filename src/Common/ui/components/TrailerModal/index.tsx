import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import { Overlay, Frame, CloseButton } from './StyledComponents'

interface Props {
  videoKey: string | null
  onClose: () => void
}

export const TrailerModal = ({ videoKey, onClose }: Props) => {
  useEffect(() => {
    if (!videoKey) return
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [videoKey, onClose])

  if (!videoKey) return null

  return createPortal(
    <Overlay onClick={onClose}>
      <Frame onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close trailer">✕</CloseButton>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </Frame>
    </Overlay>,
    document.body
  )
}