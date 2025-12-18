'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const handleClick = () => {
    const el = document.getElementById('waitlist')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      try {
        // make focusable and focus without scrolling to avoid interrupting smooth scroll
        ;(el as HTMLElement).tabIndex = -1
        ;(el as HTMLElement).focus({ preventScroll: true } as FocusOptions)
      } catch (e) {
        console.log(e)
        // fallback: focus after a short delay if direct focus isn't supported
        setTimeout(() => {
          try {
            ;(el as HTMLElement).focus()
          } catch {}
        }, 300)
      }
    }
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-sm'>
      <div className='mx-auto max-w-7xl px-6 py-4 flex items-center justify-between'>
        <Link
          href='/'
          aria-label='Desables home'
          className='inline-flex items-center gap-3'
        >
          <Image
            src='/desables.svg'
            alt='Desables'
            width={96}
            height={32}
            className='h-8 w-auto'
            priority
          />
          <span className='sr-only'>Desables</span>
        </Link>

        <nav aria-label='Primary' className='flex items-center gap-4'>
          <Button onClick={handleClick} className='h-11 rounded-3xl'>
            Get early access
          </Button>
        </nav>
      </div>
    </header>
  )
}
