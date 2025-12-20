'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FooterComp() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full border-t border-muted/20'>
      <div className='mx-auto max-w-7xl px-6 py-12'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href='/' aria-label='Desables home'>
              <Image
                src='/Group.svg'
                alt='Desables'
                width={500}
                height={40}
                className='h-10 w-32'
              />
            </Link>
          </motion.div>

          <div className='text-sm text-gray-300'>© {currentYear} Desables</div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex items-center gap-4'
          >
            <Link
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Twitter'
              className='p-2 rounded-full hover:bg-primary/10 transition-colors group'
            >
              <Twitter className='size-5 text-gray-300 group-hover:text-primary transition-colors' />
            </Link>
            <Link
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Instagram'
              className='p-2 rounded-full hover:bg-primary/10 transition-colors group'
            >
              <Instagram className='size-5 text-gray-300 group-hover:text-primary transition-colors' />
            </Link>
            <Link
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on LinkedIn'
              className='p-2 rounded-full hover:bg-primary/10 transition-colors group'
            >
              <Linkedin className='size-5 text-gray-300 group-hover:text-primary transition-colors' />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
