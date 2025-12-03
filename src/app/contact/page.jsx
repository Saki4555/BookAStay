"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1520975698512-4d2b3f3c1b2f?auto=format&fit=crop&w=1600&q=80" alt="Modern office environment for contact call to action" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">Get In Touch</h1>

              <p className="text-lg md:text-xl text-secondary-foreground/90 leading-relaxed max-w-2xl">We would love to discuss your vacation rental needs — get a tailored plan to optimize listings, guest experience, and revenue.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 items-start">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full name</label>
                  <input name="name" value={form.name} onChange={onChange} required className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background" />
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <input name="phone" value={form.phone} onChange={onChange} className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <input name="subject" value={form.subject} onChange={onChange} className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <textarea name="message" rows={6} value={form.message} onChange={onChange} required className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background" />
                </div>

                <div>
                  <Button type="submit" className="w-fit">Send Message</Button>
                </div>

                {submitted && <div className="text-sm text-primary mt-2">Thank you! We will reach out to you shortly.</div>}
              </form>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.06 }}>
            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-md">
                    <IconPhone />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-muted-foreground text-sm">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-md">
                    <IconMail />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground text-sm">hello@bluecoastvacations.com</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-md">
                    <IconMapPin />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-muted-foreground text-sm">123 Seaside Ave, Santa Barbara, CA</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="font-semibold">Business Hours</div>
                <div className="text-muted-foreground text-sm mt-2">Mon - Fri: 9 AM - 6 PM</div>
                <div className="text-muted-foreground text-sm">Sat: 10 AM - 3 PM</div>
                <div className="text-muted-foreground text-sm">Sun: Closed</div>
              </div>
            </div>

            <div className="mt-6 bg-muted/20 p-6 rounded-lg">
              <div className="text-muted-foreground text-sm">Map (placeholder)</div>
              {/* <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="240" loading="lazy" /> */}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
