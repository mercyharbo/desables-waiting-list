'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Switch } from './ui/switch'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(id)
  }, [])

  if (!mounted) {
    return null
  }

  const current = theme === 'system' ? resolvedTheme : theme
  const checked = current === 'dark'

  return (
    <div className='flex items-center gap-3'>
      <span className='text-xs lg:text-sm md:text-base'>
        Switch to {checked ? 'Light' : 'Dark'} mode
      </span>
      <Switch
        checked={checked}
        onCheckedChange={(value: boolean) => setTheme(value ? 'dark' : 'light')}
        aria-label='Toggle theme'
      />
    </div>
  )
}
