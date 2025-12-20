'use client'

import WaitlistDialog from '@/components/waitlist-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'

export default function Header() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className='mx-auto max-w-7xl px-6 py-8 flex items-center justify-between'>
      <Link
        href='/'
        aria-label='Desables home'
        className='inline-flex items-center gap-3'
      >
        <Image
          src='/Group.svg'
          alt='Desables'
          width={500}
          height={32}
          className='h-8 w-full object-cover'
          priority
        />
        <span className='sr-only'>Desables</span>
      </Link>

      <nav aria-label='Primary' className='flex items-center gap-4'>
        <Button
          onClick={() => setDialogOpen(true)}
          className='h-11 rounded-3xl text-white bg-primary-dark hover:bg-primary-dark/90 px-4 transition-colors'
        >
          Get early access
        </Button>
        <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </nav>
    </div>
  )
}
