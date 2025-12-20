'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Marquee from '@/components/ui/marquee'
import WaitlistDialog from '@/components/waitlist-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Eye, Heart, Target } from 'lucide-react'
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

const extraFaqs = [
  {
    question: 'How can I join the waitlist?',
    answer:
      'You can join the waitlist by adding your name and email in the form above — we’ll email you when early access opens.',
  },
  {
    question: 'Will Desables offer certificates?',
    answer:
      'Yes — we plan to provide certificates for completed courses, with extra options on premium tiers.',
  },
  {
    question: 'What accessibility standards do you follow?',
    answer:
      'We follow WCAG guidance and test with assistive technologies and users with disabilities throughout development.',
  },
  {
    question: 'Can organisations partner with Desables?',
    answer:
      'Yes — we welcome partnerships. Reach out to partnerships@desables.org to start a conversation.',
  },
]

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showMore, setShowMore] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleShowMore = () => {
    setShowMore((prev) => !prev)
    setOpenIndex(null)
  }

  const visibleFaqs = showMore ? faqData.concat(extraFaqs) : faqData

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className=' '>
      <section
        id='early-access'
        className='relative py-20 lg:py-32 overflow-hidden mx-auto max-w-7xl px-6'
      >
        <div className='mx-auto max-w-5xl text-center space-y-8'>
          {/* Decorative badge */}
          <Marquee>
            <span className='text-sm font-semibold uppercase text-primary'>
              Now accepting early access applications
            </span>
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
            <span className='text-white'>for people with disabilities</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed'
          >
            We are building a digital learning platform that equips people with
            disabilities with accessible and personalised tech skills. We
            believe that ability should always come first.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setDialogOpen(true)}
                size='lg'
                className='rounded-full h-14 px-10 text-black text-sm font-semibold'
              >
                Get early access
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href='/science'>
                <Button
                  size='lg'
                  variant='outline'
                  className='rounded-full h-14 px-10 text-sm text-white font-semibold hover:bg-muted/10! hover:border-muted/20! hover:text-white bg-muted/5! transition-all'
                >
                  Science behind Desables
                </Button>
              </Link>
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
              <Heart className='size-4 text-primary-dark fill-primary-dark' />
              <span className='font-medium'>
                Built with accessibility first
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Heart className='size-4 text-primary-dark fill-primary-dark' />
              <span className='font-medium'>
                Built with accessibility first
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Heart className='size-4 text-primary-dark fill-primary-dark' />
              <span className='font-medium'>
                Built with accessibility first
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='space-y-10 py-16 lg:py-24 bg-primary-dark'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='prose mx-auto w-full lg:max-w-4xl text-center space-y-3'
        >
          <h2 className='text-4xl lg:text-5xl font-bold text-white'>
            Why We Exist
          </h2>
          <p className='text-lg lg:text-xl text-gray-300'>
            Inspiring Learners Begins With You— Join Desables
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl px-6'
        >
          <motion.div variants={fadeInUp} className='md:col-span-1'>
            <Card className='group bg-black shadow-none hover:scale-105 w-full transition-all duration-300 border border-gray-700 hover:border-primary/20 h-full'>
              <CardHeader className='flex flex-col gap-4'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='bg-primary size-14 rounded-xl flex justify-center items-center text-black shadow-sm'
                >
                  <Target className='size-7' />
                </motion.div>
                <CardTitle className='text-2xl lg:text-3xl text-white'>
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-300 leading-relaxed'>
                  We put you at the centre. We listen first, design with you,
                  and ensure accessibility is non-negotiable. Your progress
                  remains yours. Your learning travels with you.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className='md:col-span-1'>
            <Card className='group bg-black shadow-none hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-primary/20 h-full'>
              <CardHeader className='flex flex-col gap-4'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='bg-primary size-14 rounded-xl flex justify-center items-center text-black shadow-sm'
                >
                  <Eye className='size-7' />
                </motion.div>
                <CardTitle className='text-2xl lg:text-3xl text-white'>
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-300 leading-relaxed'>
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
            <Card className='group bg-black shadow-none hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-primary/20 h-full'>
              <CardHeader className='flex flex-col gap-4'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='bg-primary size-14 rounded-xl flex justify-center items-center text-black shadow-sm'
                >
                  <Heart className='size-7' />
                </motion.div>
                <CardTitle className='text-2xl lg:text-3xl text-white'>
                  Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-300 leading-relaxed'>
                  Accessibility first. Evidence over credentials. Community over
                  competition. Your skills are recognised, valued, and ready for
                  the world beyond the platform.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <section className='w-full '>
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
              <p className='text-gray-300 text-lg'>
                Everything you need to know about Desables
              </p>
            </div>

            <div className='space-y-6'>
              {visibleFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border border-gray-700 rounded-xl overflow-hidden transition-colors ${
                    openIndex === index
                      ? 'bg-[#262626] border-primary/20'
                      : 'bg-transparent hover:border-primary/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
                      openIndex === index ? '' : 'hover:bg-primary-dark/5'
                    }`}
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className={`font-semibold text-base pr-8 ${
                        openIndex === index ? 'text-primary' : ' text-white'
                      }`}
                    >
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
                          <p className='text-gray-300 leading-relaxed'>
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <div className='text-center'>
                <Button
                  onClick={toggleShowMore}
                  aria-expanded={showMore}
                  className='inline-flex items-center gap-2 text-black h-12 rounded-4xl w-40 px-5 font-semibold'
                >
                  {showMore ? 'See less' : 'See more'}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  )
}
