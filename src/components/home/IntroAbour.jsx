'use client'

import { motion } from 'motion/react'

export default function IntroAbout() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-background text-foreground">
      <motion.div
        className="max-w-2xl mx-auto text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold">Welcome to Our Rentals</h2>
        <p className="text-base md:text-lg text-muted-foreground">
          We are a small seaside-rental agency offering cozy, well-maintained houses near the shore.  
          Whether you're looking for a relaxed beach retreat or a family holiday stay, our homes deliver comfort, convenience, and a warm welcome.
        </p>
        <a href="/about" className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
          Learn more about us
        </a>
      </motion.div>
    </section>
  )
}
