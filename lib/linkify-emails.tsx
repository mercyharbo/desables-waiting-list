'use client'

import Link from 'next/link'
import React from 'react'

export function linkifyEmails(text: string): React.ReactNode[] {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
  const parts = text.split(emailRegex)

  return parts.map((part, index) => {
    if (part.match(emailRegex)) {
      return (
        <Link
          key={index}
          href={`mailto:${part}`}
          className='text-primary hover:underline underline-offset-2'
        >
          {part}
        </Link>
      )
    }

    return <React.Fragment key={index}>{part}</React.Fragment>
  })
}
