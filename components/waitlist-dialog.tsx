'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
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
import { useState } from 'react'

type WaitlistDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function WaitlistDialog({
  open,
  onOpenChange,
}: WaitlistDialogProps) {
  const [surname, setSurname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [referral, setReferral] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      // Replace this with real submit logic (API call)
      await new Promise((r) => setTimeout(r, 700))
      setSubmitted(true)
      setSurname('')
      setLastname('')
      setEmail('')
      setReferral('')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='bg-[#000000] text-white sm:max-w-lg rounded-lg space-y-5 border border-gray-600'>
        <DialogHeader>
          <DialogTitle>Join the waitlist</DialogTitle>
          <DialogDescription className='text-gray-300'>
            Get early access — enter your details and we’ll be in touch.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='grid gap-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <label className='flex flex-col space-y-2'>
              <span className='text-sm'>Surname</span>
              <Input
                name='surname'
                aria-label='Surname'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
                className='border-muted/20 bg-muted/20! h-10'
              />
            </label>

            <label className='flex flex-col space-y-2'>
              <span className='text-sm'>Lastname</span>
              <Input
                name='lastname'
                aria-label='Lastname'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                className='border-muted/20 bg-muted/20! h-10'
              />
            </label>
          </div>

          <label className='flex flex-col space-y-2'>
            <span className='text-sm'>Email</span>
            <Input
              name='email'
              aria-label='Email address'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='border-muted/20 bg-muted/20! h-10'
            />
          </label>

          <label className='flex flex-col space-y-2'>
            <span className='text-sm'>How did you hear about us?</span>
            <Select value={referral} onValueChange={setReferral}>
              <SelectTrigger
                size='md'
                className='border-muted/20 bg-muted/20! w-full h-10'
              >
                <SelectValue placeholder='Select an option' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='social-media'>Social Media</SelectItem>
                <SelectItem value='friend'>Friend</SelectItem>
                <SelectItem value='search-engine'>Search Engine</SelectItem>
                <SelectItem value='advertisement'>Advertisement</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
          </label>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline' className='border-muted/20! border'>
                Cancel
              </Button>
            </DialogClose>
            <Button type='submit' disabled={submitting} className='text-black'>
              {submitting ? 'Submitting…' : 'Join waitlist'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
