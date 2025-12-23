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
import { useState } from 'react'

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      // Replace this with real submit logic (API call)
      await new Promise((r) => setTimeout(r, 700))
      setName('')
      setEmail('')
      setReferral('')
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
              className='peer border-muted bg-muted/5! h-12'
            />

            <label
              htmlFor='name'
              className='absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs dark:peer-focus:text-primary dark:peer-focus:bg-black peer-focus:bg-muted/20 peer-focus:text-black  peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:bg-black'
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
              className='peer border-muted bg-muted/5! h-12'
            />

            <label
              htmlFor='email'
              className='absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs dark:peer-focus:text-primary dark:peer-focus:bg-black peer-focus:bg-muted/20 peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:bg-black'
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
                className='border-muted bg-muted/5! w-full h-12'
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

          <DialogFooter>
            <Button
              type='submit'
              disabled={submitting}
              className='dark:text-black text-white px-5 h-12 w-full'
            >
              {submitting ? 'Submitting…' : 'Join early access'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
