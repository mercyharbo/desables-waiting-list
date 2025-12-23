'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function FooterComp() {
  const currentYear = new Date().getFullYear()

  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [fallbackSrc, setFallbackSrc] = useState<string | null>(null)

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(id)
  }, [])

  const current = theme === 'system' ? resolvedTheme : theme
  const imgSrc =
    fallbackSrc ??
    (mounted
      ? current === 'dark'
        ? '/Group.svg'
        : '/light-logo.svg'
      : '/Group.svg')

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
                src={imgSrc}
                alt='Desables'
                width={500}
                height={40}
                className='h-10 w-32'
                onError={() => setFallbackSrc('/logo.png')}
              />
            </Link>
          </motion.div>

          <div className='text-sm text-gray-600 dark:text-gray-300'>
            © {currentYear} Desables
          </div>

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
              <Twitter className='size-5 dark:text-gray-300 text-gray-600 group-hover:text-primary transition-colors' />
            </Link>
            <Link
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Instagram'
              className='p-2 rounded-full hover:bg-primary/10 transition-colors group'
            >
              <Instagram className='size-5 dark:text-gray-300 text-gray-600 group-hover:text-primary transition-colors' />
            </Link>
            <Link
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on LinkedIn'
              className='p-2 rounded-full hover:bg-primary/10 transition-colors group'
            >
              <Linkedin className='size-5 dark:text-gray-300 text-gray-600 group-hover:text-primary transition-colors' />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
