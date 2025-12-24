'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import WaitlistDialog from '@/components/waitlist-dialog'
import { faqsData } from '@/lib/faq'
import { linkifyEmails } from '@/lib/linkify-emails'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Eye, Heart, Target } from 'lucide-react'
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

const initialFaqCount = 4

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showMore, setShowMore] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleShowMore = () => {
    setShowMore((prev) => !prev)
    setOpenIndex(null)
  }

  const visibleFaqs = showMore ? faqsData : faqsData.slice(0, initialFaqCount)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className=' '>
      <section
        id='early-access'
        className='relative py-16 md:px-10 overflow-hidden w-full lg:px-16 px-5  grid grid-cols-1 lg:grid-cols-2 gap-5'
      >
        <div className='gap-4 w-full flex flex-col justify-center items-start xl:max-w-4xl 3xl:max-w-4xl lg:max-w-4xl 2xl:max-w-4xl'>
          {/* Main heading with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-4xl/snug md:text-5xl/snug 2xl:text-[70px]/snug 3xl:text-[80px]/snug xl:text-5xl/snug lg:text-5xl/snug font-bold'
          >
            <span className='bg-linear-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent'>
              Learning designed for
            </span>{' '}
            <span className='dark:text-white text-black'>
              how your mind works
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-gray-600 dark:text-gray-400 text-lg lg:text-lg 2xl:text-xl leading-relaxed'
          >
            Accessible digital skills pathways for autistic and ADHD learners.
            Built for clarity, confidence, and real outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col sm:flex-row items-center justify-start gap-4 pt-4 w-full lg:w-fit'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full lg:w-fit'
            >
              <Button
                onClick={() => setDialogOpen(true)}
                size='lg'
                className='rounded-full h-12 w-full lg:w-fit px-10 text-white dark:text-black text-sm font-semibold'
              >
                Join early access
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full lg:w-fit'
            >
              <Link href='/science'>
                <Button
                  size='lg'
                  variant='outline'
                  className='rounded-full h-12 w-full lg:w-fit px-10 text-sm dark:text-white font-semibold hover:bg-muted/10! hover:border-muted/20! hover:text-black dark:hover:text-white bg-muted/5! transition-all'
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
            className='flex flex-col lg:flex-row items-start flex-wrap justify-center lg:justify-start gap-5 text-sm text-muted-foreground'
          >
            <div className='flex items-center gap-2'>
              <Heart className='size-4 text-primary fill-primary dark:text-primary dark:fill-primary' />
              <span className='font-medium'>Neuroinclusive by design</span>
            </div>
            <div className='flex items-center gap-2'>
              <Heart className='size-4 text-primary fill-primary dark:text-primary dark:fill-primary' />
              <span className='font-medium'>
                Structured for focus and clarity{' '}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Heart className='size-4 text-primary fill-primary dark:text-primary dark:fill-primary' />
              <span className='font-medium'>Built for real-world outcomes</span>
            </div>
          </motion.div>
        </div>

        <div className='absolute xl:-right-36 top-0 3xl:w-[50%] 2xl:w-[55%] xl:w-[50%] lg:w-[50%] h-full hidden lg:block'>
          <Image
            src={'/hero-light.png'}
            alt='hero image'
            priority
            fill
            className='object-contain block dark:hidden'
          />
          <Image
            src={'/hero-dark.png'}
            alt='hero image'
            priority
            fill
            className='object-contain hidden dark:block'
          />
        </div>
      </section>

      <section className='space-y-10 px-5 lg:px-0 py-16 lg:py-24 bg-primary'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='prose mx-auto w-full lg:max-w-4xl text-center space-y-3'
        >
          <h2 className='text-4xl lg:text-5xl font-bold dark:text-black text-white'>
            Why We Exist
          </h2>
          <p className='text-lg lg:text-xl dark:text-gray-800 text-white'>
            Most learning systems were not designed with different ways of
            thinking in mind. They reward speed, conformity, and endurance,
            often mistaking these for ability. For autistic and ADHD learners,
            this can mean being overlooked, misunderstood, or excluded, not
            because of a lack of talent, but because the environment was never
            built to support how they learn and work.
          </p>
          <p className='text-lg lg:text-xl dark:text-gray-800 text-white'>
            Desables exists to challenge that pattern.
          </p>
          <p className='text-lg lg:text-xl dark:text-gray-800 text-white'>
            We believe that when learning environments are designed with
            intention, care, and respect for neurodivergent experiences, ability
            becomes visible. Barriers are reduced. Confidence grows. And
            learning can once again become a pathway to opportunity rather than
            a source of frustration.
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
            <Card className='group dark:bg-light-foreground bg-black shadow-none hover:scale-105 w-full transition-all duration-300 border border-gray-700 hover:border-primary/20 h-full'>
              <CardHeader className='flex flex-col gap-4'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='bg-primary size-14 rounded-xl flex justify-center items-center text-white dark:text-black shadow-sm'
                >
                  <Target className='size-7' />
                </motion.div>
                <CardTitle className='text-2xl lg:text-3xl text-white'>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white leading-relaxed'>
                  To design neuroinclusive learning pathways that respect how
                  different minds focus, process, and grow, enabling autistic
                  and ADHD learners to develop meaningful digital skills and
                  progress toward opportunities on their own terms.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className='md:col-span-1'>
            <Card className='group dark:bg-light-foreground bg-black shadow-none hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-primary/20 h-full'>
              <CardHeader className='flex flex-col gap-4'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='bg-primary size-14 rounded-xl flex justify-center items-center text-white dark:text-black shadow-sm'
                >
                  <Eye className='size-7' />
                </motion.div>
                <CardTitle className='text-2xl lg:text-3xl text-white'>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white leading-relaxed'>
                  A future where access to digital skills education is not
                  determined by how well someone fits traditional systems, but
                  by the quality of the environments created to support diverse
                  ways of thinking, learning, and contributing.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className='md:col-span-2 lg:col-span-1'
          >
            <Card className='group dark:bg-light-foreground bg-black shadow-none hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-primary/20 h-full'>
              <CardHeader className='flex flex-col gap-4'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='bg-primary size-14 rounded-xl flex justify-center items-center text-white dark:text-black shadow-sm'
                >
                  <Heart className='size-7' />
                </motion.div>
                <CardTitle className='text-2xl lg:text-3xl text-white'>
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='list-disc list-inside space-y-1 text-left text-white'>
                  <li>Design with, not for</li>
                  <li>Ability over conformity</li>
                  <li>Care before scale</li>
                  <li>Dignity in learning </li>
                  <li>Progress that leads somewhere</li>
                </ul>
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
              <p className='text-gray-600 dark:text-gray-300 text-lg'>
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
                  className={`border dark:border-gray-700 rounded-xl overflow-hidden transition-colors ${
                    openIndex === index
                      ? 'dark:bg-[#262626] bg-muted/5 border-primary/20'
                      : 'bg-transparent hover:border-primary/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
                      openIndex === index ? '' : 'hover:bg-primary/5'
                    }`}
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className={`font-semibold text-base pr-8 ${
                        openIndex === index ? 'text-primary' : ''
                      }`}
                    >
                      {faq.title}
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
                          <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                            {linkifyEmails(faq.answer)}
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
                  className='inline-flex items-center gap-2 dark:text-black h-12 rounded-4xl w-40 px-5 font-semibold'
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
