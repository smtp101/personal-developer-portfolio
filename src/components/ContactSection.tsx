import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Clock } from 'lucide-react';
import { ProfileInfo, ContactFormData, FormValidationErrors } from '../types';
import { validateContactForm } from '../utils/filterAndSearch';

interface ContactSectionProps {
  profile: ProfileInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real working asynchronous dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            <span>07</span>
            <span aria-hidden="true">·</span>
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Connect & Discuss Opportunities
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Interested in discussing an Operations, MIS leadership, or Data Management role?
            Feel free to send a message or connect directly across professional channels.
          </p>
        </div>

        {/* 2-Column Split: Contact Information & Validated Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400 mt-1 shrink-0" />
                  <div>
                    <div className="text-slate-500 dark:text-slate-400 text-xs">Email Address</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-slate-900 dark:text-slate-100 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-slate-500 dark:text-slate-400 mt-1 shrink-0" />
                  <div>
                    <div className="text-slate-500 dark:text-slate-400 text-xs">Direct Phone</div>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {profile.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400 mt-1 shrink-0" />
                  <div>
                    <div className="text-slate-500 dark:text-slate-400 text-xs">Location & Availability</div>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {profile.location}
                    </span>
                    <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-0.5">
                      {profile.availability}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400 mt-1 shrink-0" />
                  <div>
                    <div className="text-slate-500 dark:text-slate-400 text-xs">Response SLA</div>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      Within 24 business hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Professional Channels:
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900 dark:text-slate-100">{formData.fullName}</span>.
                    Your inquiry regarding "<span className="italic">{formData.subject}</span>" has been logged.
                    I will respond to <span className="font-mono">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g., Jennifer Miller"
                        className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-rose-400'
                            : 'border-slate-200 dark:border-slate-800 focus:ring-slate-400'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-600 dark:text-rose-400">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., j.miller@enterprise.com"
                        className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-400'
                            : 'border-slate-200 dark:border-slate-800 focus:ring-slate-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 dark:text-rose-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Subject / Purpose of Inquiry *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Operations Specialist Role / MIS Consultation"
                      className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:ring-rose-400'
                          : 'border-slate-200 dark:border-slate-800 focus:ring-slate-400'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-600 dark:text-rose-400">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Message Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the position scope, team requirements, or project details..."
                      className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 transition-colors ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-400'
                          : 'border-slate-200 dark:border-slate-800 focus:ring-slate-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-600 dark:text-rose-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-colors disabled:opacity-60 shadow-sm"
                    >
                      {isSubmitting ? (
                        <span>Validating & Dispatching...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
