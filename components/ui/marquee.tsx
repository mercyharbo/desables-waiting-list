import React from 'react'

type MarqueeProps = {
  children?: React.ReactNode
  text?: string
  className?: string
  /** animation duration in seconds */
  duration?: number
}

export default function Marquee({
  children,
  text,
  className = '',
  duration = 10,
}: MarqueeProps) {
  const content = children ?? text ?? ''

  return (
    <span className={`marquee ${className}`}>
      <span
        className='marquee__track'
        style={
          ((): React.CSSProperties => {
            const s: Record<string, string> = { '--marquee-duration': `${duration}s` }
            return s as unknown as React.CSSProperties
          })()
        }
        aria-hidden='true'
      >
        <span className='marquee__item'>{content}</span>
        <span className='marquee__item marquee__copy'>{content}</span>
      </span>
      {/* Visually-hidden copy for screen readers */}
      <span className='sr-only'>{content}</span>
    </span>
  )
}
