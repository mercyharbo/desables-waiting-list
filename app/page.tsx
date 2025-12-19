'use client'

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Marquee from '@/components/ui/marquee'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronDown,
  Eye,
  Heart,
  Instagram,
  Linkedin,
  Target,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const faqData = [
  {
    question: 'What is Desables?',
    answer:
      'Desables is a digital learning platform designed to provide accessible and personalized tech education for people with disabilities. We prioritize accessibility and ensure that ability always comes first.',
  },
  {
    question: 'When will Desables launch?',
    answer:
      'We are currently in development and plan to launch soon. Join our waitlist to be among the first to know when we go live and get early access to our platform.',
  },
  // {
  //   question: 'Is Desables free to use?',
  //   answer:
  //     'We will offer both free and premium tiers to ensure accessibility for everyone. More details about pricing will be shared closer to our launch date.',
  // },
  {
    question: 'What types of tech skills will be covered?',
    answer:
      'Our platform will cover a wide range of tech skills including web development, programming, data science, and more. All content is designed with accessibility in mind.',
  },
  {
    question: 'How is Desables different from other learning platforms?',
    answer:
      'Desables is built from the ground up with accessibility at its core. We design with users with disabilities, not just for them, ensuring that every feature is inclusive and adaptable to individual needs.',
  },
]

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <main className='mx-auto max-w-7xl px-6 pt-16'>
        <Header />

        <section
          id='early-access'
          className='relative py-20 lg:py-32 overflow-hidden'
        >
          <div className='mx-auto max-w-5xl text-center space-y-8'>
            {/* Decorative badge */}
            <Marquee>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/20 bg-primary/5 backdrop-blur-sm'
              >
                <span className='text-sm font-semibold text-primary'>
                  Now accepting early access applications
                </span>
              </motion.div>
            </Marquee>

            {/* Main heading with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-4xl/tight sm:text-5xl/tight lg:text-7xl/tight font-bold'
            >
              <span className='bg-linear-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent'>
                Accessible learning
              </span>
              <br />
              <span className='text-foreground'>
                for people with disabilities
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed'
            >
              We are building a digital learning platform that equips people
              with disabilities with accessible and personalised tech skills. We
              believe that ability should always come first.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  onClick={() => {
                    const el = document.getElementById('waitlist')
                    if (el)
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className='rounded-full h-14 px-10 text-base font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all'
                >
                  Get early access
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  variant='outline'
                  className='rounded-full h-14 px-10 text-base font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all'
                >
                  Learn more
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators or stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground'
            >
              <div className='flex items-center gap-2'>
                <Heart className='size-4 text-primary fill-primary' />
                <span className='font-medium'>
                  Built with accessibility first
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Heart className='size-4 text-primary fill-primary' />
                <span className='font-medium'>
                  Built with accessibility first
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Heart className='size-4 text-primary fill-primary' />
                <span className='font-medium'>
                  Built with accessibility first
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className='space-y-10 py-16 lg:py-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='prose mx-auto w-full lg:max-w-4xl text-center space-y-3'
          >
            <h2 className='text-4xl lg:text-5xl font-bold text-primary'>
              Why We Exist
            </h2>
            <p className='text-muted-foreground text-lg lg:text-xl'>
              Inspiring Learners Begins With You— Join Desables
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            <motion.div variants={fadeInUp} className='md:col-span-1'>
              <Card className='group shadow-none hover:scale-105 w-full transition-all duration-300 border-2 hover:border-primary/20 h-full'>
                <CardHeader className='flex flex-col gap-4'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-[#E0FFF4] size-14 rounded-xl flex justify-center items-center text-primary shadow-sm'
                  >
                    <Target className='size-7' />
                  </motion.div>
                  <CardTitle className='text-2xl lg:text-3xl'>
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground leading-relaxed'>
                    We put you at the centre. We listen first, design with you,
                    and ensure accessibility is non-negotiable. Your progress
                    remains yours. Your learning travels with you.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className='md:col-span-1'>
              <Card className='group shadow-none hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20 h-full'>
                <CardHeader className='flex flex-col gap-4'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-[#E0FFF4] size-14 rounded-xl flex justify-center items-center text-primary shadow-sm'
                  >
                    <Eye className='size-7' />
                  </motion.div>
                  <CardTitle className='text-2xl lg:text-3xl'>Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground leading-relaxed'>
                    To create a world where digital skills education is
                    universally accessible, and where ability, not disability,
                    defines opportunity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='md:col-span-2 lg:col-span-1'
            >
              <Card className='group shadow-none hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20 h-full'>
                <CardHeader className='flex flex-col gap-4'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-[#E0FFF4] size-14 rounded-xl flex justify-center items-center text-primary shadow-sm'
                  >
                    <Heart className='size-7' />
                  </motion.div>
                  <CardTitle className='text-2xl lg:text-3xl'>Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground leading-relaxed'>
                    Accessibility first. Evidence over credentials. Community
                    over competition. Your skills are recognised, valued, and
                    ready for the world beyond the platform.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <section
        id='waitlist'
        tabIndex={-1}
        className='w-full bg-primary text-white relative overflow-hidden'
      >
        <div className='mx-auto max-w-7xl px-6 py-20 lg:py-32 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='mx-auto w-full max-w-3xl text-center space-y-10'
          >
            <div className='flex flex-col gap-3'>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='lg:text-5xl/tight text-3xl font-bold'
              >
                Get Tips, Updates & Early Access
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-white/90 text-lg'
              >
                Be the first to know when we launch
              </motion.p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='flex flex-col gap-4 max-w-md mx-auto'
            >
              <Input
                aria-label='Name'
                name='name'
                type='text'
                placeholder='Your name'
                className='w-full bg-white/10 backdrop-blur-sm placeholder:text-white/70 text-white border-white/20 rounded-xl h-14 focus-visible:ring-white/50 focus-visible:border-white/50'
              />
              <Input
                aria-label='Email address'
                name='email'
                type='email'
                placeholder='Email address'
                className='w-full bg-white/10 backdrop-blur-sm placeholder:text-white/70 text-white border-white/20 rounded-xl h-14 focus-visible:ring-white/50 focus-visible:border-white/50'
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type='submit'
                  className='h-14 rounded-xl w-full bg-white text-primary font-semibold hover:bg-white/95 shadow-xl hover:shadow-2xl transition-all text-base'
                >
                  Join the Waitlist
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <section className='w-full bg-background'>
        <div className='mx-auto max-w-7xl px-6 py-20 lg:py-32'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mx-auto w-full max-w-3xl'
          >
            <div className='text-center space-y-3 pb-12'>
              <h2 className='text-4xl lg:text-5xl font-bold text-primary'>
                Frequently Asked Questions
              </h2>
              <p className='text-muted-foreground text-lg'>
                Everything you need to know about Desables
              </p>
            </div>

            <div className='space-y-4'>
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='border-2 rounded-xl overflow-hidden bg-card hover:border-primary/20 transition-colors'
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors'
                    aria-expanded={openIndex === index}
                  >
                    <span className='font-semibold text-lg pr-8'>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <ChevronDown className='size-5 text-primary shrink-0' />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: 'easeInOut' },
                          opacity: { duration: 0.2, ease: 'easeInOut' },
                        }}
                        className='overflow-hidden'
                      >
                        <div className='px-6 pb-5 pt-2'>
                          <p className='text-muted-foreground leading-relaxed'>
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className='w-full border-t bg-background'>
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
                  src='/desables.svg'
                  alt='Desables'
                  width={120}
                  height={40}
                  className='h-10 w-auto'
                />
              </Link>
            </motion.div>

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
                <Twitter className='size-5 text-muted-foreground group-hover:text-primary transition-colors' />
              </Link>
              <Link
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Follow us on Instagram'
                className='p-2 rounded-full hover:bg-primary/10 transition-colors group'
              >
                <Instagram className='size-5 text-muted-foreground group-hover:text-primary transition-colors' />
              </Link>
              <Link
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Follow us on LinkedIn'
                className='p-2 rounded-full hover:bg-primary/10 transition-colors group'
              >
                <Linkedin className='size-5 text-muted-foreground group-hover:text-primary transition-colors' />
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  )
}
