import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, ExternalLink, Download, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { GoldCoinSvg, StackedBarsSvg } from './FloatingShapes';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Copy email to clipboard with toast
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Form field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Field validation
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.company.trim()) {
      errs.company = 'Please specify your company or role.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message of at least 10 characters.';
    }
    return errs;
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            companyOrRole: formData.company,
            message: formData.message,
            _subject: `New portfolio inquiry from ${formData.name} (${formData.company})`,
          })
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          // If endpoint failed, fallback to mailto
          triggerMailto();
          setIsSubmitted(true);
        }
      } catch {
        triggerMailto();
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback directly to mailto when VITE_FORM_ENDPOINT is not set
      setTimeout(() => {
        triggerMailto();
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 600);
    }
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Hello Meenal,\n\nMy name is ${formData.name} from ${formData.company}.\n\n${formData.message}\n\nYou can reach me back at ${formData.email}.`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Faint Floating Shapes in Background behind heading */}
      <div className="absolute top-12 left-10 opacity-20 pointer-events-none select-none blur-[1px]">
        <GoldCoinSvg size={80} />
      </div>
      <div className="absolute top-20 right-10 opacity-20 pointer-events-none select-none blur-[1px]">
        <StackedBarsSvg size={80} />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title={PORTFOLIO_DATA.contact.heading}
          subtitle="Let's connect regarding cost accounting, financial analysis, or internal audit opportunities."
        />

        {/* Two Columns on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* LEFT COLUMN: INTRO, STATUS BADGE, 3 BUTTONS, LOCATION */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              {/* Green-dot Status Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-ink-navy/90 dark:text-slate-300">
                {PORTFOLIO_DATA.personal.contactIntro}
              </p>

              <div className="flex items-center text-sm font-medium text-ink-muted dark:text-slate-400 pt-2">
                <MapPin className="w-4 h-4 text-accent-teal mr-2 shrink-0" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>

            {/* THREE ACTION BUTTONS */}
            <div className="space-y-3 pt-2">
              {/* 1. Copy Email Button with Toast Indicator */}
              <div className="relative">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border shadow-soft hover:border-accent-teal/60 dark:hover:border-accent-teal/60 transition-all text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                >
                  <div className="flex items-center space-x-3 truncate mr-2">
                    <div className="w-10 h-10 rounded-xl bg-accent-teal/10 dark:bg-accent-teal/20 text-accent-teal dark:text-teal-300 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[11px] font-medium text-ink-muted dark:text-slate-400">
                        Primary Email (Click to copy)
                      </span>
                      <span className="font-semibold text-sm text-ink-navy dark:text-white truncate block">
                        {PORTFOLIO_DATA.personal.email}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-cream-100 dark:bg-slate-800 text-ink-navy dark:text-white shrink-0 group-hover:bg-accent-teal group-hover:text-white transition-colors">
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </div>
                </button>

                {/* Toast Notification */}
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-ink-navy text-white text-xs font-semibold shadow-md flex items-center space-x-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Email copied to clipboard!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. LinkedIn Button */}
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border shadow-soft hover:border-accent-teal/60 dark:hover:border-accent-teal/60 transition-all text-left group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 font-bold text-sm">
                    in
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium text-ink-muted dark:text-slate-400">
                      Professional Network
                    </span>
                    <span className="font-semibold text-sm text-ink-navy dark:text-white">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-cream-100 dark:bg-slate-800 text-ink-navy dark:text-white shrink-0 group-hover:bg-accent-teal group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* 3. Download Resume Button */}
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Meenal_P_Resume.pdf"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border shadow-soft hover:border-accent-teal/60 dark:hover:border-accent-teal/60 transition-all text-left group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-highlight-amber flex items-center justify-center shrink-0">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium text-ink-muted dark:text-slate-400">
                      Curriculum Vitae
                    </span>
                    <span className="font-semibold text-sm text-ink-navy dark:text-white">
                      Download Resume (PDF)
                    </span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-cream-100 dark:bg-slate-800 text-ink-navy dark:text-white shrink-0 group-hover:bg-accent-teal group-hover:text-white transition-colors">
                  <Download className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: VALIDATED CONTACT FORM CARD */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border shadow-soft-xl p-6 sm:p-10 relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-highlight-green mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-ink-navy dark:text-white">
                    {PORTFOLIO_DATA.contact.formSuccess}
                  </h3>
                  <p className="text-sm text-ink-muted dark:text-slate-400 max-w-md mx-auto">
                    Your inquiry has been received. I look forward to reviewing your requirements and following up promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-cream-100 dark:bg-slate-800 text-ink-navy dark:text-white hover:bg-cream-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-cream-200 dark:border-darkbg-border pb-4 mb-2">
                    <h3 className="font-heading font-bold text-xl text-ink-navy dark:text-white">
                      {PORTFOLIO_DATA.contact.formTitle}
                    </h3>
                    <p className="text-xs text-ink-muted dark:text-slate-400 mt-1">
                      Fill out the form below or write directly to <span className="font-medium text-accent-teal">{PORTFOLIO_DATA.personal.email}</span>.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-ink-navy dark:text-slate-200 mb-1.5">
                      Your Name <span className="text-highlight-coral">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50/70 dark:bg-slate-800/80 text-ink-navy dark:text-white focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-cream-300 dark:border-slate-700 focus:ring-accent-teal'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-500 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Company fields (2 columns on sm+) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-ink-navy dark:text-slate-200 mb-1.5">
                        Your Email <span className="text-highlight-coral">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50/70 dark:bg-slate-800/80 text-ink-navy dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-cream-300 dark:border-slate-700 focus:ring-accent-teal'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Company or Role */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-ink-navy dark:text-slate-200 mb-1.5">
                        Company or Role <span className="text-highlight-coral">*</span>
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        placeholder="e.g. Tata Consultancy Services / Recruiter"
                        value={formData.company}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? "company-error" : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50/70 dark:bg-slate-800/80 text-ink-navy dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.company
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-cream-300 dark:border-slate-700 focus:ring-accent-teal'
                        }`}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-xs text-red-500 mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-ink-navy dark:text-slate-200 mb-1.5">
                      Message <span className="text-highlight-coral">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Share details about the role, your team, or a project..."
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50/70 dark:bg-slate-800/80 text-ink-navy dark:text-white focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-cream-300 dark:border-slate-700 focus:ring-accent-teal'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm bg-accent-teal text-white hover:bg-accent-teal-dark active:scale-[0.99] disabled:opacity-70 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span>Send message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
