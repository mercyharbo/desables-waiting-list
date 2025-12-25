'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'

type WaitlistDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function WaitlistDialog({
  open,
  onOpenChange,
}: WaitlistDialogProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [referral, setReferral] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [success, setSuccess] = useState('')

  // Basic email validation and overall form validity
  const isEmailValid = React.useMemo(() => {
    return /^\S+@\S+\.\S+$/.test(email.trim())
  }, [email])

  const isFormValid =
    name.trim().length > 0 && isEmailValid && referral.trim().length > 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors([])
    setSuccess('')

    // basic client-side validation
    if (!name.trim() || !email.trim()) {
      setErrors(['Please provide your name and email.'])
      return
    }

    setSubmitting(true)
    try {
      const base = process.env.NEXT_PUBLIC_BASE_URL ?? ''
      const res = await fetch(`${base}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          referral,
        }),
      })

      if (!res.ok) {
        // Try to parse JSON error body and extract details array
        const text = await res.text()
        try {
          const parsed = JSON.parse(text)
          const details = parsed?.error?.details
          if (Array.isArray(details) && details.length > 0) {
            setErrors(details)
            return
          }
          if (parsed?.message) {
            setErrors([parsed.message])
            return
          }
        } catch (e) {
          // not JSON
        }

        setErrors([text || 'Failed to submit. Please try again.'])
        return
      }

      setErrors([])
      setSuccess('Thanks! You have been added to the waitlist.')
      setName('')
      setEmail('')
      setReferral('')

      // close the dialog after a short delay so the user sees confirmation
      setTimeout(() => {
        onOpenChange(false)
        setSuccess('')
      }, 1600)
    } catch (err: any) {
      setErrors([err?.message || 'An unexpected error occurred.'])
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='bg-background text-white sm:max-w-lg rounded-lg space-y-5 border border-gray-600'>
        <DialogHeader>
          <DialogTitle className='text-black dark:text-white'>
            Join early access
          </DialogTitle>
          <DialogDescription className='dark:text-gray-300 text-gray-600'>
            Enter your details and we’ll let you know when early access opens.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='grid gap-5'>
          <div className='relative'>
            <Input
              id='name'
              aria-label='Full name'
              placeholder=' '
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='peer border-muted bg-muted/5! h-12 outline-0! text-black! dark:text-white!'
            />

            <label
              htmlFor='name'
              className='absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs dark:peer-focus:text-primary dark:peer-focus:bg-black peer-focus:bg-muted peer-focus:text-white  peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:bg-black'
            >
              Name
            </label>
          </div>

          <div className='relative'>
            <Input
              id='email'
              aria-label='Email address'
              placeholder=' '
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='peer border-muted bg-muted/5! h-12 outline-0! text-black! dark:text-white!'
            />

            <label
              htmlFor='email'
              className='absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs dark:peer-focus:text-primary dark:peer-focus:bg-black peer-focus:bg-muted peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:bg-black'
            >
              Email address
            </label>
          </div>

          <div className='flex flex-col space-y-3'>
            <label
              htmlFor='about-us'
              className='text-sm text-black dark:text-white'
            >
              How did you hear about us?
            </label>
            <Select value={referral} onValueChange={setReferral}>
              <SelectTrigger
                size='xl'
                className='border-muted text-black! dark:text-white! bg-muted/5! w-full h-12'
              >
                <SelectValue placeholder='Select an option' />
              </SelectTrigger>
              <SelectContent className='bg-white dark:bg-light-foreground dark:text-white text-black  border-muted/20!'>
                <SelectItem
                  value='twitter'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  Twitter
                </SelectItem>
                <SelectItem
                  value='facebook'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  Facebook
                </SelectItem>
                <SelectItem
                  value='instagram'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  Instagram
                </SelectItem>
                <SelectItem
                  value='tiktok'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  TikTok
                </SelectItem>
                <SelectItem
                  value='reddit'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  Reddit
                </SelectItem>
                <SelectItem
                  value='friend'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  Friend
                </SelectItem>
                <SelectItem
                  value='desables-member'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  Desables team member
                </SelectItem>
                <SelectItem
                  value='google'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  Google search
                </SelectItem>
                <SelectItem
                  value='ai-assistant'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  ChatGPT / Gemini
                </SelectItem>
                <SelectItem
                  value='advertisement'
                  className='hover:bg-primary! dark:hover:text-black! dark:hover:bg-primary  hover:text-white!'
                >
                  Advertisement
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className=''>
            <div className='w-full flex flex-col gap-3'>
              {errors.length > 0 && (
                <ul
                  className='text-sm text-destructive list-disc pl-5'
                  role='alert'
                >
                  {errors.map((errMsg, i) => (
                    <li key={i} className='mb-1'>
                      {errMsg}
                    </li>
                  ))}
                </ul>
              )}

              {success && (
                <p className='text-sm text-green-600 ' role='status'>
                  {success}
                </p>
              )}

              <Button
                type='submit'
                disabled={submitting || !isFormValid}
                className='dark:text-black text-white px-5 h-12 w-full'
              >
                {submitting ? 'Submitting…' : 'Join early access'}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
