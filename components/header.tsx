'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import WaitlistDialog from '@/components/waitlist-dialog'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [imgSrc, setImgSrc] = useState('/Group.svg')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const current = theme === 'system' ? resolvedTheme : theme
    if (!mounted) return
    setImgSrc(current === 'dark' ? '/Group.svg' : '/light-logo.svg')
  }, [theme, resolvedTheme, mounted])

  return (
    <div className='mx-auto max-w-7xl px-6 py-8 flex items-center justify-between'>
      <Link
        href='/'
        aria-label='Desables home'
        className='inline-flex items-center gap-3'
      >
        <Image
          src={imgSrc}
          alt='Desables'
          width={500}
          height={32}
          className='h-8 w-full object-cover'
          priority
          onError={() => setImgSrc('/logo.png')}
        />
        <span className='sr-only'>Desables</span>
      </Link>

      <nav aria-label='Primary' className='flex items-center gap-4'>
        <ThemeToggle />
        <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </nav>
    </div>
  )
}
