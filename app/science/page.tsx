'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import {
  Atom,
  Building,
  Calendar,
  GraduationCap,
  Handshake,
  List,
  Moon,
  Puzzle,
  Watch,
  Waves,
  Zap,
} from 'lucide-react'

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

export default function page() {
  return (
    <main className='space-y-10 pt-16'>
      {/* Enhanced Hero Section */}
      <section className='relative mx-auto max-w-5xl text-center px-6 py-28'>
        {/* Decorative corner accents */}
        <div className='absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-primary rounded-tl-2xl' />
        <div className='absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-primary rounded-br-2xl' />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='inline-flex items-center gap-2 px-4 py-2 border-2 border-primary rounded-full'
          >
            {/* <div className='size-2 bg-primary rounded-full animate-pulse' /> */}
            <span className='text-sm font-semibold text-primary'>
              The Science Behind Desables
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'
          >
            About Desables
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='relative'
          >
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-1/3 h-px bg-primary/30' />
            </div>
            <div className='relative flex justify-center'>
              <div className='size-3 bg-primary rounded-full' />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto'
          >
            Desables is an abilities-first learning platform for practical
            digital skills. We co-design with disabled creators, deliver
            accessible courses by default, and issue portable, employer
            recognised credentials that lead to real work.
          </motion.p>
        </motion.div>
      </section>
      {/* Enhanced Our Story/Promise Section */}
      <section className='bg-primary py-20'>
        <div className='mx-auto max-w-7xl px-5'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='relative'
          >
            {/* Main Card */}
            <div className='relative bg-black rounded-3xl overflow-hidden border-4 border-white/10'>
              <div className='relative p-8 lg:p-16 space-y-10'>
                {/* Header with icon */}
                <div className='flex flex-col items-center text-center space-y-4'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='size-16 bg-primary rounded-2xl flex items-center justify-center rotate-12'
                  >
                    <GraduationCap className='size-8 text-black -rotate-12' />
                  </motion.div>
                  <h2 className='text-3xl lg:text-4xl font-bold text-white'>
                    Our Promise to Learners
                  </h2>
                </div>

                {/* Main Promise */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='text-lg lg:text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto'
                >
                  We put you at the centre. We listen first, design with you,
                  and ensure accessibility is non-negotiable. Your progress
                  remains yours. Your learning travels with you. And the skills
                  you gain are recognised, valued, and ready for the world
                  beyond the platform.
                </motion.p>

                {/* Key Pillars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='grid sm:grid-cols-3 gap-6 lg:gap-8 pt-8'
                >
                  <div className='space-y-3 text-center'>
                    <div className='flex justify-center'>
                      <div className='size-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary'>
                        <div className='size-3 bg-primary rounded-full' />
                      </div>
                    </div>
                    <h3 className='text-white font-bold text-lg'>
                      Learner-Centered
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Your voice shapes every decision we make
                    </p>
                  </div>

                  <div className='space-y-3 text-center'>
                    <div className='flex justify-center'>
                      <div className='size-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary'>
                        <div className='size-3 bg-primary rounded-full' />
                      </div>
                    </div>
                    <h3 className='text-white font-bold text-lg'>
                      Accessible First
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Built for everyone, from the ground up
                    </p>
                  </div>

                  <div className='space-y-3 text-center'>
                    <div className='flex justify-center'>
                      <div className='size-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary'>
                        <div className='size-3 bg-primary rounded-full' />
                      </div>
                    </div>
                    <h3 className='text-white font-bold text-lg'>
                      Career-Ready
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Skills that unlock real opportunities
                    </p>
                  </div>
                </motion.div>

                {/* Divider */}
                <div className='flex items-center justify-center gap-2 pt-4'>
                  <div className='h-px w-20 bg-primary/40' />
                  <div className='size-2 bg-primary rounded-full' />
                  <div className='h-px w-20 bg-primary/40' />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/*who we serve section  */}
      <section className='bg-primary py-20'>
        <div className='space-y-5 flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center mx-auto max-w-7xl'>
          <h1 className='text-2xl lg:text-3xl font-medium text-black text-left pt-12'>
            Who We Serve
          </h1>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 gap-5 lg:grid-cols-3 px-5 w-full lg:max-w-6xl'
          >
            <motion.div
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ rotate: { duration: 0.35, ease: 'easeInOut' } }}
            >
              <Card className='group bg-black shadow-none hover:scale-105 w-full transition-all duration-300 border border-gray-300 hover:border-primary/20 h-full'>
                <CardHeader className='flex flex-col gap-4'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-primary size-11 rounded-xl flex justify-center items-center text-black shadow-sm'
                  >
                    <GraduationCap className='size-6' />
                  </motion.div>
                  <CardTitle className='text-xl text-white'>Learners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-300 leading-relaxed'>
                    People with disabilities seeking accessible, practical
                    digital skills training. We design courses that work with
                    your abilities, not against them, ensuring you can learn
                    effectively and build real-world skills.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20, rotate: 3 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ rotate: { duration: 0.35, ease: 'easeInOut' } }}
            >
              <Card className='group bg-black shadow-none hover:scale-105 w-full transition-all duration-300 border border-gray-300 hover:border-primary/20 h-full'>
                <CardHeader className='flex flex-col gap-4'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-primary size-11 rounded-xl flex justify-center items-center text-black shadow-sm'
                  >
                    <Building className='size-6' />
                  </motion.div>
                  <CardTitle className='text-xl text-white'>
                    Employers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-300 leading-relaxed'>
                    Organizations looking to build diverse, inclusive teams. Our
                    portable credentials help you identify talent with real
                    skills, while our platform ensures your workforce
                    development is accessible to everyone.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ rotate: { duration: 0.35, ease: 'easeInOut' } }}
            >
              <Card className='group bg-black shadow-none hover:scale-105 w-full transition-all duration-300 border border-gray-300 hover:border-primary/20 h-full'>
                <CardHeader className='flex flex-col gap-4'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-primary size-11 rounded-xl flex justify-center items-center text-black shadow-sm'
                  >
                    <Handshake className='size-6' />
                  </motion.div>
                  <CardTitle className='text-xl text-white'>
                    Partners & Creators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-300 leading-relaxed'>
                    Disability organizations, educators, and content creators
                    who share our vision. We collaborate to build better
                    accessibility standards and create content that serves the
                    entire disability community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Before and after section */}
      <section className='mx-auto max-w-7xl px-5'>
        <div className='mx-auto max-w-2xl flex justify-center flex-col items-center gap-5'>
          <Tabs defaultValue='before' className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className='mx-auto'
            >
              <TabsList className='h-11 w-40 bg-muted/20  mx-auto '>
                <TabsTrigger value='before' className='text-white!'>
                  Before
                </TabsTrigger>
                <TabsTrigger value='after' className='text-white!'>
                  After
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value='before' className='text-sm text-gray-300'>
              <motion.div
                variants={staggerContainer}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='grid grid-cols-1 lg:grid-cols-5 gap-5'
              >
                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-3 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-light-dark p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Atom className='size-5 text-gray-700' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-lg font-semibold text-gray-300'>
                        8-hour workday, only 3 that matter.
                      </h3>
                      <p className='text-sm text-gray-300'>
                        Most people get just 3 hours of true focus a day. The
                        rest vanishes into email, chat, and busywork.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-2 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-light-dark p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Zap className='size-5 text-gray-700' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-lg font-semibold text-gray-300'>
                        Decision fatigue by noon
                      </h3>
                      <p className='text-sm text-gray-300'>
                        Up to 40% of productive time is lost simply deciding
                        what to do next.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-2 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-light-dark p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Puzzle className='size-5 text-gray-700' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-lg font-semibold text-gray-300'>
                        Scattered attention
                      </h3>
                      <p className='text-sm text-gray-300'>
                        The average worker changes screens or tasks every
                        minute, making work feel fragmented.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-3 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-light-dark p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <List className='size-5 text-gray-700' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-lg font-semibold text-gray-300'>
                        Endless lists
                      </h3>
                      <p className='text-sm text-gray-300'>
                        4 in 10 tasks never get finished, so the backlog grows
                        faster than the done list.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value='after' className='text-sm text-gray-300'>
              <motion.div
                variants={staggerContainer}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='grid grid-cols-1 sm:grid-cols-5 gap-5'
              >
                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-3 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-blue-50 p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Calendar className='size-5 text-blue-600' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-lg font-semibold text-blue-700'>
                        One clear plan
                      </h3>
                      <p className='text-sm text-blue-600'>
                        Start your day with a clear ranked list; and not a blank
                        page or messy backlog.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-2 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-purple-50 p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Watch className='size-5 text-purple-600' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-lg font-semibold text-purple-700'>
                        Energy-aligned Work
                      </h3>
                      <p className='text-sm text-purple-600'>
                        The right task surfaces at the right time, no decision
                        fatigue or wasted effort.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-2 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-amber-50 p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Moon className='size-5 text-amber-700' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-lg font-semibold text-amber-800'>
                        Protected focus
                      </h3>
                      <p className='text-sm text-amber-700'>
                        Deep work is carved out in your peak hours, not squeezed
                        into scraps of time.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-3 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-pink-50 p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Waves className='size-5 text-pink-600' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-lg font-semibold text-pink-700'>
                        Daily improved efficiency
                      </h3>
                      <p className='text-sm text-pink-600'>
                        Close each day with a &apos;done&apos; list instead of
                        backlog guilt—small wins compound.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Enhanced Our Story Section */}
      <section className='mx-auto max-w-7xl px-5 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='space-y-12'
        >
          {/* Section Header */}
          <div className='text-center space-y-4'>
            <div className='flex items-center justify-center gap-4'>
              <div className='h-px w-12 bg-primary' />
              <h2 className='text-3xl lg:text-4xl font-bold text-white'>
                Our Story
              </h2>
              <div className='h-px w-12 bg-primary' />
            </div>
            <p className='text-xl text-primary font-semibold'>
              Building accessibility into the architecture
            </p>
          </div>

          {/* Story Content in Sections */}
          <div className='space-y-10'>
            {/* Opening Statement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='relative pl-6 border-l-4 border-primary'
            >
              <p className='text-lg lg:text-xl text-white leading-relaxed'>
                The internet gave us a door, but lots of people never got a key.
                We started Desables after watching brilliant people stall—not
                for lack of talent, but because the product didn&apos;t fit
                them.
              </p>
            </motion.div>

            {/* Grid of Key Points */}
            <div className='grid lg:grid-cols-2 gap-8'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='space-y-4'
              >
                <div className='flex items-start gap-3'>
                  <div className='size-2 bg-primary rounded-full shrink-0 mt-2' />
                  <div className='space-y-2'>
                    <h3 className='text-white font-bold text-lg'>
                      Co-Design, Not Retrofit
                    </h3>
                    <p className='text-gray-300 leading-relaxed'>
                      From the first sketch to the final release, we co-design
                      with disabled creators. Every course is shaped by lived
                      experience, not retrofitted to tick a box.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='space-y-4'
              >
                <div className='flex items-start gap-3'>
                  <div className='size-2 bg-primary rounded-full shrink-0 mt-2' />
                  <div className='space-y-2'>
                    <h3 className='text-white font-bold text-lg'>
                      Rigorous Standards
                    </h3>
                    <p className='text-gray-300 leading-relaxed'>
                      Nothing goes live until it clears an accessibility gate
                      aligned to WCAG 2.2 AA. Assessment is flexible but
                      rigorous—we care about evidence, not watch-time.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='space-y-4'
              >
                <div className='flex items-start gap-3'>
                  <div className='size-2 bg-primary rounded-full shrink-0 mt-2' />
                  <div className='space-y-2'>
                    <h3 className='text-white font-bold text-lg'>
                      Portable Credentials
                    </h3>
                    <p className='text-gray-300 leading-relaxed'>
                      Learners leave with portable, verifiable credentials that
                      travel beyond our walls, so opportunity doesn&apos;t end
                      at the edge of the platform.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='space-y-4'
              >
                <div className='flex items-start gap-3'>
                  <div className='size-2 bg-primary rounded-full shrink-0 mt-2' />
                  <div className='space-y-2'>
                    <h3 className='text-white font-bold text-lg'>
                      Human-Centered Learning
                    </h3>
                    <p className='text-gray-300 leading-relaxed'>
                      Progress is steady, human, and shame-free. Pause without
                      penalty, switch formats without friction, and try again
                      without losing face.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Highlighted Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='relative bg-light-dark border-2 border-primary/30 rounded-2xl p-8 lg:p-10'
            >
              <div className='absolute top-0 left-8 -translate-y-1/2'>
                <div className='bg-primary px-4 py-1 rounded-full'>
                  <span className='text-black font-bold text-sm'>
                    Our Philosophy
                  </span>
                </div>
              </div>
              <div className='space-y-6 pt-4'>
                <p className='text-gray-300 leading-relaxed'>
                  Feedback is supportive and specific; nudges are gentle and
                  optional; wellbeing is designed in with quiet modes,
                  motion-reduced celebrations, and sensible breaks. Community
                  spaces are moderated with care, so encouragement outnumbers
                  anxiety.
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  Our gamification is purposeful, not performative. We use
                  quests that map to real skills, XP for evidence-based
                  milestones, and streaks that never punish a missed day. Badges
                  are earned by shipping work, not by clicking through videos.
                </p>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='bg-primary/10 border-l-4 border-primary rounded-r-2xl p-6 lg:p-8 space-y-4'
            >
              <p className='text-white leading-relaxed text-lg'>
                We registered as a{' '}
                <span className='text-primary font-bold'>
                  Community Interest Company
                </span>{' '}
                to anchor our mission: opening high-value digital skills to
                people mainstream platforms overlook, and making those skills
                count in real hiring.
              </p>
              <p className='text-gray-300 leading-relaxed italic'>
                This isn&apos;t charity; it&apos;s better product. When the
                product fits more people, more people finish, and more people
                get hired. That&apos;s the point.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>{' '}
    </main>
  )
}
