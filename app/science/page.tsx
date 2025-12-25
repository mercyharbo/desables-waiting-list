'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import {
  Atom,
  Brain,
  Briefcase,
  Building,
  Calendar,
  GraduationCap,
  Handshake,
  List,
  MessageSquare,
  Moon,
  Puzzle,
  Watch,
  Waves,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
    <main className='w-full space-y-10 '>
      {/* Enhanced Hero Section */}
      <section className='relative text-center bg-primary dark:bg-primary-alt 3xl:h-[70vh] 2xl:h-[70vh] xl:h-[80vh] lg:h-[80vh] md:h-[60vh] h-[90vh] overflow-hidden'>
        {/* Phone mockup (center bottom) */}
        <div className='absolute left-1/2 bottom-0 w-full md:w-auto mx-auto transform -translate-x-1/2 z-0 pointer-events-none'>
          <Image
            src='/desables-phone--light-mode.png'
            width={700}
            height={640}
            alt='Desables phone'
            className='object-cover w-175 h-75 md:w-175 lg:w-175  '
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-6 relative h-full flex flex-col justify-start items-center z-10 px-6 py-16'
        >
          {/* Overlay behind text */}
          <div className='absolute inset-0 bg-black/65 h-full w-full dark:bg-black/65 -z-10' />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'
          >
            The Science Behind Desables
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='relative z-20 flex items-center justify-center gap-2'
          >
            <div className='h-px w-20 bg-white rounded-full' />
            <div className='size-3 bg-white rounded-full  shrink-0' />
            <div className='h-px w-20 bg-white rounded-full ' />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='text-base md:text-lg lg:text-base text-white leading-relaxed max-w-3xl mx-auto'
          >
            Desables is built on decades of evidence from cognitive science,
            neurodiversity research, and inclusive education design. These
            fields show that learning environments matter as much as — if not
            more than — individual talent. We build learning environments based
            on how people actually focus, process information, and develop
            skills, not on assumptions about how learning should work. Below are
            key principles that shape Desables’ design, each with a link to
            trusted research or frameworks.
          </motion.p>
        </motion.div>
      </section>

      <section className='mx-auto lg:max-w-7xl w-[90%]  border-l-4 border-primary rounded-r-xl px-8 py-12 bg-muted/5 dark:bg-black/20 shadow-sm'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <h3 className='text-2xl lg:text-3xl font-bold dark:text-white text-black'>
            Neurodiversity as Natural Cognitive Variation
          </h3>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Modern psychology and education research increasingly recognise
            neurodiversity as a natural form of human variation rather than a
            deficit. Autism and ADHD are understood as differences in cognitive
            processing, attention, and sensory experience — not indicators of
            reduced intelligence or motivation. This perspective is supported by
            organisations such as Harvard Health, which frames neurodiversity as
            a strengths-based concept rather than a disorder-focused one{' '}
            <Link
              href='https://www.health.harvard.edu/blog/what-is-neurodiversity-202111162645'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.health.harvard.edu/blog/what-is-neurodiversity-202111162645
            </Link>
            , as well as the British Psychological Society, which emphasises
            that challenges often arise from environmental mismatch rather than
            individual limitation{' '}
            <Link
              href='https://www.bps.org.uk/psychologist/neurodiversity'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.bps.org.uk/psychologist/neurodiversity
            </Link>
            .
          </p>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Research and advocacy organisations including the National Autistic
            Society further reinforce that autistic cognition should be
            understood through difference, not deficiency{' '}
            <Link
              href='https://www.autism.org.uk/advice-and-guidance/what-is-autism/neurodiversity'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.autism.org.uk/advice-and-guidance/what-is-autism/neurodiversity
            </Link>
            .
          </p>

          <h4 className='text-xl font-semibold dark:text-white text-black pt-2'>
            How Desables applies this
          </h4>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Desables treats neurodivergent cognition as a starting point for
            design, not an exception to be accommodated. The platform avoids
            deficit-based language and does not frame learners as needing to
            “catch up” to a norm. Learning pathways are designed to support
            depth, pattern recognition, and nonlinear thinking, allowing
            learners to engage with material in ways that align with how their
            minds naturally work. Progress is measured by capability and
            understanding, not by speed or constant engagement.
          </p>
        </motion.div>
      </section>

      <section className='mx-auto lg:max-w-7xl w-[90%] rounded-2xl px-8 py-12 bg-muted/5 dark:bg-black/20 shadow-lg'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <h3 className='text-2xl lg:text-3xl font-bold dark:text-white text-black'>
            Cognitive Load and Learning Effectiveness
          </h3>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Cognitive Load Theory explains that learning is disrupted when
            working memory is overloaded by unnecessary complexity, unclear
            structure, or excessive stimuli. Educational psychology research
            consistently shows that reducing extraneous cognitive load improves
            comprehension, retention, and persistence in learning. Clear
            explanations of this theory are widely published by cognitive
            science educators such as Simply Psychology{' '}
            <Link
              href='https://www.simplypsychology.org/cognitive-load-theory.html'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.simplypsychology.org/cognitive-load-theory.html
            </Link>{' '}
            and by research-led education groups like The Learning Scientists{' '}
            <Link
              href='https://www.learningscientists.org/blog/2017/7/20/cognitive-load'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.learningscientists.org/blog/2017/7/20/cognitive-load
            </Link>
            .
          </p>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            These findings are particularly relevant for digital learning
            environments, where interface design and information density can
            either support or hinder learning.
          </p>

          <h4 className='text-xl font-semibold dark:text-white text-black pt-2'>
            How Desables applies this
          </h4>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Desables is intentionally designed to minimise unnecessary cognitive
            effort. Interfaces are calm and predictable, instructions are
            explicit, and learning is broken into manageable stages. Learners
            are not presented with excessive choices or dense information all at
            once. Time pressure is avoided, allowing learners to focus on
            understanding and skill development rather than managing overwhelm.
          </p>
        </motion.div>
      </section>

      <section className='mx-auto lg:max-w-7xl w-[90%] border-t-4 border-primary rounded-b-xl px-8 py-12 bg-muted/5 dark:bg-black/20 shadow-sm'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <h3 className='text-2xl lg:text-3xl font-bold dark:text-white text-black'>
            Attention, Executive Function, and ADHD
          </h3>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Research into ADHD highlights differences in executive functioning,
            including task initiation, sustained attention, and time perception.
            These differences are widely recognised by institutions such as the
            Centers for Disease Control and Prevention (CDC){' '}
            <Link
              href='https://www.cdc.gov/adhd/features/executive-function.html'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.cdc.gov/adhd/features/executive-function.html
            </Link>{' '}
            and education-focused organisations like Understood.org, which
            emphasise that executive function challenges are not a lack of
            ability, but a difference in cognitive regulation{' '}
            <Link
              href='https://www.understood.org/en/articles/executive-functioning-issues-what-you-need-to-know'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.understood.org/en/articles/executive-functioning-issues-what-you-need-to-know
            </Link>
            .
          </p>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Traditional learning systems often exacerbate these challenges
            through rigid deadlines, constant notifications, and penalty-driven
            progression.
          </p>

          <h4 className='text-xl font-semibold dark:text-white text-black pt-2'>
            How Desables applies this
          </h4>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Desables supports executive function differences by designing for
            continuity rather than enforcement. Learning pathways allow flexible
            pacing, pauses without penalty, and clear re-entry points after
            breaks. Progress is guided through milestones rather than constant
            deadlines, helping learners initiate and sustain engagement without
            pressure or shame.
          </p>
        </motion.div>
      </section>

      <section className='mx-auto lg:max-w-7xl w-[90%] rounded-2xl px-8 py-12 bg-muted/5 dark:bg-black/30 shadow-md'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <h3 className='text-2xl lg:text-3xl font-bold dark:text-white text-black'>
            Universal Design for Learning (UDL)
          </h3>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Universal Design for Learning (UDL) is an internationally recognised
            framework developed by CAST, which demonstrates that learning
            environments designed for diversity improve outcomes for all
            learners. UDL principles are widely adopted across education systems
            and endorsed by global bodies focused on inclusive education{' '}
            <Link
              href='https://www.cast.org/impact/universal-design-for-learning-udl'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.cast.org/impact/universal-design-for-learning-udl
            </Link>
            .
          </p>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            UNESCO’s work on inclusive education further reinforces that
            accessibility and flexibility are foundational to equitable learning
            environments{' '}
            <Link
              href='https://www.unesco.org/en/inclusive-education'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.unesco.org/en/inclusive-education
            </Link>
            .
          </p>

          <h4 className='text-xl font-semibold dark:text-white text-black pt-2'>
            How Desables applies this
          </h4>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Desables incorporates UDL principles throughout the platform.
            Learners are offered multiple ways to engage with content,
            flexibility in how they move through learning pathways, and choice
            in how they demonstrate understanding. There is no single “correct”
            learning route. Accessibility is embedded into the structure of the
            platform rather than added as a feature.
          </p>
        </motion.div>
      </section>

      <section className='mx-auto lg:max-w-7xl w-[90%] border-r-4 border-primary rounded-l-xl px-8 py-12 bg-muted/5 dark:bg-black/20 shadow-sm'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <h3 className='text-2xl lg:text-3xl font-bold dark:text-white text-black'>
            Skills, Capability, and the Future of Work
          </h3>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Global labour market research increasingly shows a shift toward
            skills-based evaluation and lifelong learning. The World Economic
            Forum highlights that employers are placing greater value on
            demonstrable skills rather than traditional credentials alone{' '}
            <Link
              href='https://www.weforum.org/reports/the-future-of-jobs-report-2025'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.weforum.org/reports/the-future-of-jobs-report-2025
            </Link>
            . Similarly, the OECD emphasises the importance of skills
            development and adaptability in modern economies{' '}
            <Link
              href='https://www.oecd.org/skills/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.oecd.org/skills/
            </Link>
            .
          </p>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            This research underscores the importance of learning experiences
            that translate into real capability.
          </p>

          <h4 className='text-xl font-semibold dark:text-white text-black pt-2'>
            How Desables applies this
          </h4>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Desables focuses on building and making visible real skills.
            Learning pathways prioritise application, confidence, and the
            ability to articulate what has been learned. Progress is connected
            to capability rather than completion alone, supporting learners to
            move toward opportunities when they are ready.
          </p>
        </motion.div>
      </section>

      <section className='mx-auto lg:max-w-7xl w-[90%] border border-primary/20 rounded-xl px-8 py-12 shadow-md hover:shadow-lg transition-shadow'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <h3 className='text-2xl lg:text-3xl font-bold dark:text-white text-black'>
            Inclusive Education and Learner Retention
          </h3>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Research into inclusive education consistently shows that
            neurodivergent learners are more likely to persist when learning
            environments are predictable, respectful, and psychologically safe.
            UK-based bodies such as the Office for Students highlight the
            importance of inclusive design in improving outcomes for disabled
            learners{' '}
            <Link
              href='https://www.officeforstudents.org.uk/advice-and-guidance/promoting-equal-opportunities/disability/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline block w-full whitespace-normal wrap-break-word break-all md:inline md:w-auto md:whitespace-nowrap md:break-normal'
            >
              https://www.officeforstudents.org.uk/advice-and-guidance/promoting-equal-opportunities/disability/
            </Link>
            .
          </p>

          <h4 className='text-xl font-semibold dark:text-white text-black pt-2'>
            How Desables applies this
          </h4>

          <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
            Desables prioritises learner dignity as a core principle. There are
            no public rankings or competitive pressure mechanisms. Language
            across the platform respects autonomy and agency, and community
            spaces are designed for support rather than comparison. Retention is
            not enforced — it emerges naturally when learners feel safe,
            respected, and supported.
          </p>
        </motion.div>
      </section>

      <section className='mx-auto lg:max-w-7xl w-[90%] px-5 py-20'>
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
              <h2 className='text-3xl lg:text-4xl font-bold text-black dark:text-white'>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className='bg-muted/5 dark:bg-black/20 border rounded-xl p-6 lg:p-8 space-y-4'
            >
              <h4 className='text-xl font-semibold dark:text-white text-black'>
                The Problem
              </h4>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                We kept seeing the same pattern.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                Autistic and ADHD learners with clear ability and genuine
                interest were not falling behind because they lacked
                intelligence or motivation. They were struggling because the
                systems designed to teach digital and creative skills were not
                built around how they think, focus, regulate energy, or process
                information.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                Most learning platforms still prioritise speed, constant
                engagement, and cognitive endurance. They assume learners can
                navigate dense interfaces, unclear expectations, rigid
                timelines, and high-pressure assessments without cost. Even when
                rewards are added, they are often tied to completion and
                visibility rather than understanding or sustainability.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                For many neurodivergent learners, this misalignment leads to
                exhaustion, disengagement, or leaving education altogether. Not
                because learning is inaccessible, but because the environment
                is.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed font-semibold'>
                The problem was not the learner. <br />
                It was the system.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className='bg-primary/10 border-l-4 border-primary rounded-r-2xl p-6 lg:p-8 space-y-4'
            >
              <h4 className='text-xl font-semibold dark:text-white text-black'>
                The Solution
              </h4>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                Desables was created to redesign the learning environment
                itself.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                Rather than pushing learners to adapt, Desables adapts to how
                learners actually think and learn. The platform is built around
                clarity, flexibility, and dignity, reducing cognitive overload
                and supporting focus, pacing, and confidence.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                Progress on Desables is not measured by speed or constant
                activity. Learners are recognised for understanding, applied
                skills, and meaningful growth. Badges and certificates are not
                used to pressure or compete, they serve as evidence of
                capability that learners can trust and carry forward.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed font-semibold'>
                Learning becomes sustainable, visible, and aligned with real
                outcomes.
              </p>
            </motion.div>

            {/* Founder’s Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className='bg-muted/5 dark:bg-black/20 border rounded-xl p-6 lg:p-8 space-y-4'
            >
              <h4 className='text-xl font-semibold dark:text-white text-black'>
                The Founder&apos;s Story
              </h4>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                I didn&apos;t turn to Desables because I wanted to build a
                platform. I came to it because I kept seeing the same outcome.
                Desables grew from years of working alongside neurodivergent
                learners.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                Again and again, the same truths became clear. When the
                environment was supportive, these learners thrived. When it was
                rigid or overwhelming, the same learners disengaged, not from
                lack of ability, but from systems that misunderstood them.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                The issue was never effort or intelligence. It was design.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed font-semibold'>
                Desables exists because too many capable people are excluded not
                by their minds, but by systems that refuse to make space for
                difference.
              </p>
            </motion.div>

            {/* Our Big Bet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='bg-primary/10 border-l-4 border-primary rounded-r-2xl p-6 lg:p-8 space-y-4'
            >
              <h4 className='text-xl font-semibold dark:text-white text-black'>
                Our Big Bet
              </h4>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                We believe that ability flourishes when learning environments
                respect cognitive diversity.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed'>
                Our belief is simple. When systems are designed with clarity,
                flexibility, and care, neurodivergent learners do not need to be
                fixed, pushed, or motivated. They succeed because the
                environment finally fits.
              </p>

              <p className='text-base dark:text-gray-300 text-gray-700 leading-relaxed font-semibold'>
                Desables is built on the belief that inclusive design is not a
                compromise, it is a competitive advantage, for learners,
                employers, and the future of work.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Our Story/Promise Section */}
      <section className='bg-primary py-20 space-y-20'>
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
                    <GraduationCap className='size-8 dark:text-black text-white -rotate-12' />
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
                  className='text-base lg:text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto'
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
                  className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 pt-8'
                >
                  <div className='space-y-3 text-center transform transition-transform duration-300 hover:scale-105'>
                    <div className='flex justify-center'>
                      <div className='size-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary'>
                        <Brain className='size-6 text-primary' />
                      </div>
                    </div>
                    <h3 className='text-white font-bold text-base'>
                      Built for different minds{' '}
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Designed for different ways of thinking, from the ground
                      up.
                    </p>
                  </div>

                  <div className='space-y-3 text-center transform transition-transform duration-300 hover:scale-105'>
                    <div className='flex justify-center'>
                      <div className='size-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary'>
                        <MessageSquare className='size-6 text-primary' />
                      </div>
                    </div>
                    <h3 className='text-white font-bold text-base'>
                      Learners Shape Desables
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Your voice shapes how we design, improve, and evolve the
                      platform.
                    </p>
                  </div>

                  <div className='space-y-3 text-center transform transition-transform duration-300 hover:scale-105'>
                    <div className='flex justify-center'>
                      <div className='size-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary'>
                        <Briefcase className='size-6 text-primary' />
                      </div>
                    </div>
                    <h3 className='text-white font-bold text-base'>
                      Skills That Travel With You
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Skills that unlock real opportunities, recognised beyond
                      Desables.
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

        <div className='space-y-5 flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center mx-auto max-w-7xl'>
          <h1 className='text-2xl lg:text-3xl font-medium text-white dark:text-black text-left pt-12'>
            Who We Serve
          </h1>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 gap-10 lg:grid-cols-3 md:gap-16 lg:gap-5 px-5 w-full lg:max-w-6xl'
          >
            <motion.div
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ rotate: { duration: 0.35, ease: 'easeInOut' } }}
            >
              <Card className='group bg-black shadow-none hover:scale-105 w-full transition-all duration-300 border border-muted/20! hover:border-primary/20 h-full'>
                <CardHeader className='flex flex-col gap-4'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-primary size-11 rounded-xl flex justify-center items-center dark:text-black text-white shadow-sm'
                  >
                    <GraduationCap className='size-6' />
                  </motion.div>
                  <CardTitle className='text-xl text-white'>Learners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-300 leading-relaxed'>
                    Disabled and neurodivergent learners seeking accessible,
                    practical digital skills training. We design courses that
                    work with your abilities, not against them, ensuring you can
                    learn effectively and build real-world skills.
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
              <Card className='group bg-black shadow-none hover:scale-105 w-full transition-all duration-300 border border-muted/20! hover:border-primary/20 h-full'>
                <CardHeader className='flex flex-col gap-4'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-primary size-11 rounded-xl flex justify-center items-center dark:text-black text-white shadow-sm'
                  >
                    <Building className='size-6' />
                  </motion.div>
                  <CardTitle className='text-xl text-white'>
                    Partners & Creators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-300 leading-relaxed'>
                    Disability organisations, educators, and content creators
                    who share our vision. We collaborate to build better
                    accessibility standards and create content that serves the
                    disabled and neurodivergent communities.
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
              <Card className='group bg-black shadow-none hover:scale-105 w-full transition-all duration-300 border border-muted/20! hover:border-primary/20 h-full'>
                <CardHeader className='flex flex-col gap-4'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-primary size-11 rounded-xl flex justify-center items-center dark:text-black text-white shadow-sm'
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
        <div className='mx-auto max-w-3xl flex justify-center flex-col items-center gap-5'>
          <Tabs defaultValue='before' className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className='mx-auto'
            >
              <TabsList className='h-14 w-76 px-1.5 gap-3 bg-muted/10 dark:bg-muted/5 rounded-4xl  mx-auto '>
                <TabsTrigger
                  value='before'
                  className='text-black dark:text-white'
                >
                  Before
                </TabsTrigger>
                <TabsTrigger
                  value='after'
                  className='text-black dark:text-white'
                >
                  <Image
                    src={'/Favicon-2.png'}
                    width={100}
                    height={50}
                    alt='desables logo'
                    className='size-3'
                  />
                  With Desables
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
                  <Card className='rounded-xl h-full flex flex-col bg-light-foreground p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Atom className='size-5 text-gray-700' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-base font-semibold text-gray-300'>
                        Learning feels heavier than it should
                      </h3>
                      <p className='text-sm text-gray-300'>
                        You start with good intentions, but the learning
                        environment asks too much of you at once. There are too
                        many options, too many tabs, too many expectations.
                        Instead of focusing on the skill, your energy is spent
                        navigating the system.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-2 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-light-foreground p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Zap className='size-5 text-gray-700' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-base font-semibold text-gray-300'>
                        Decision fatigue sets in early
                      </h3>
                      <p className='text-sm text-gray-300'>
                        You’re constantly deciding what to learn next, where to
                        pick up from, or whether you’re even doing it “right.”
                        The mental effort of choosing outweighs the effort of
                        learning. By midday, momentum is gone.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-2 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-light-foreground p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Puzzle className='size-5 text-gray-700' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-base font-semibold text-gray-300'>
                        Attention is fragmented
                      </h3>
                      <p className='text-sm text-gray-300'>
                        Learning is broken into short, disconnected moments. You
                        jump between platforms, notes, reminders, and
                        half-finished tasks. Nothing feels contained, so focus
                        never fully settles.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-3 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-light-foreground p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <List className='size-5 text-gray-700' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-base font-semibold text-gray-300'>
                        Progress feels invisible
                      </h3>
                      <p className='text-sm text-gray-300'>
                        You’ve spent time and effort, but it’s hard to point to
                        what you’ve actually gained. Courses are started but not
                        completed. Confidence doesn’t grow, because the system
                        never makes your progress tangible.
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
                  <Card className='rounded-xl h-full flex flex-col bg-[#E4F6E9] p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Calendar className='size-5 text-black' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-base font-semibold text-black'>
                        One clear learning path
                      </h3>
                      <p className='text-sm text-black'>
                        You begin with structure that removes uncertainty.
                        There’s a clear sense of what you’re working on, why it
                        matters, and what comes next. You’re not faced with
                        endless choices, the platform guides you gently, without
                        rushing or restricting you.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-2 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-[#eeb6b7] p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Watch className='size-5 text-black' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-base font-semibold text-black'>
                        Learning starts with clarity, not pressure.
                      </h3>
                      <p className='text-sm text-black'>
                        Tasks and content meet you where your energy is, not
                        where a rigid timetable expects you to be. You’re
                        encouraged to engage deeply when you have capacity, and
                        to pause without penalty when you don’t.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-2 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-[#f6fddd] p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Moon className='size-5 text-black' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-base font-semibold text-black'>
                        The result isn’t more effort, it’s better timing.
                      </h3>
                      <p className='text-sm text-black'>
                        Distractions are reduced by design. You’re not pulled in
                        multiple directions or overwhelmed with information.
                        Learning sessions feel intentional and contained,
                        allowing your attention to settle and stay.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='sm:col-span-3 h-full'
                >
                  <Card className='rounded-xl h-full flex flex-col bg-[#e9fee4] p-5 border border-muted/20 shadow-none '>
                    <div className='bg-white rounded-full size-11 flex items-center justify-center shadow-none'>
                      <Waves className='size-5 text-black' />
                    </div>
                    <CardContent className='p-0 space-y-3 flex-1'>
                      <h3 className='text-base font-semibold text-black'>
                        For once, focus feels supported rather than demanded.
                      </h3>
                      <p className='text-sm text-black'>
                        Your effort translates into visible capability. Skills
                        build gradually, achievements are recognised, and your
                        learning journey makes sense when you look back on it.
                        Progress isn’t measured by speed or comparison, it’s
                        measured by understanding and confidence. You finish
                        learning sessions knowing what you’ve gained.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
