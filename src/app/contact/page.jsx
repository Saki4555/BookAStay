"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const contactData = t("contact");
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  }

  const iconMap = {
    "Call Us": Phone,
    "Email Us": Mail,
    "Visit Us": MapPin,
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
     


      {/* //! hero section 2 */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="Hotel managers and property maintenance team"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                  {contactData.hero.badge}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">
                {contactData.hero.title}
              </h1>

              <p className="text-lg md:text-xl text-secondary-foreground/90 leading-relaxed max-w-2xl">
                {contactData.hero.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-card p-8 md:p-10 rounded-2xl border-2 border-border shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {contactData.contactInfo.map((info, idx) => {
                  const IconComponent = iconMap[info.title] || Phone;
                  return (
                    <motion.a
                      key={idx}
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex flex-col items-center text-center space-y-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <div className="bg-primary/10 text-primary p-3 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-bold text-base mb-1 text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </div>
                        <div className="text-foreground font-medium text-sm mb-0.5">
                          {info.detail}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {info.subDetail}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Form and Map Section */}
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-5 items-start">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {contactData.form.header}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {contactData.form.description}
                </p>
              </div>

              <Card className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border-2 border-border">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">
                      {contactData.form.labels.name}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder={contactData.form.placeholders.name}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-base font-semibold"
                      >
                        {contactData.form.labels.email}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        placeholder={contactData.form.placeholders.email}
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-base font-semibold"
                      >
                        {contactData.form.labels.phone}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        placeholder={contactData.form.placeholders.phone}
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-base font-semibold"
                    >
                      {contactData.form.labels.subject}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={onChange}
                      placeholder={contactData.form.placeholders.subject}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-base font-semibold"
                    >
                      {contactData.form.labels.message}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={onChange}
                      required
                      placeholder={contactData.form.placeholders.message}
                      className="text-base resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || submitted}
                      className="w-full md:w-auto px-8 h-12 text-base font-semibold group"
                    >
                      {isSubmitting ? (
                        <>{contactData.form.button.processing}</>
                      ) : submitted ? (
                        <>{contactData.form.button.sent}</>
                      ) : (
                        <>
                          {contactData.form.button.send}
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary/10 border-2 border-primary/30 text-primary px-6 py-4 rounded-xl"
                    >
                      <p className="font-semibold">
                        {contactData.form.confirmation.title}
                      </p>
                      <p className="text-sm mt-1 text-primary/80">
                        {contactData.form.confirmation.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>

            {/* Sidebar - Business Hours & Map */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Business Hours Card */}
              <Card className="bg-card p-8 rounded-2xl border-2 border-border shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl">
                    <Clock className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-xl text-foreground">
                    {contactData.sidebar.hours.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {contactData.sidebar.hours.schedule.map((sch, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground font-medium">
                        {sch.day}
                      </span>
                      <span className={`font-semibold ${sch.highlight ? "text-destructive" : "text-foreground"}`}>
                        {sch.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> {contactData.sidebar.hours.note}
                  </p>
                </div>
              </Card>

              {/* Map Card */}
              <Card className="bg-card p-6 rounded-2xl border-2 border-border shadow-lg overflow-hidden">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  {contactData.sidebar.map.title}
                </h3>
                <div className="rounded-xl overflow-hidden border-2 border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.95430941113!2d-119.74188842089844!3d34.42083400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e914c4c93884d9%3A0xdc8c5a4453c3b911!2sSanta%20Barbara%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Blue Coast Vacations Location"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  {contactData.sidebar.map.address}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
