"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SOCIAL_LINKS, getWhatsAppUrl } from "@/data/navigation";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappUrl = React.useMemo(() => {
    const hasName = formData.name.trim().length > 0;
    const hasMessage = formData.message.trim().length > 0;

    if (!hasName && !hasMessage) {
      return SOCIAL_LINKS.whatsapp;
    }

    const greeting = hasName
      ? `Hello HandySof team, my name is ${formData.name.trim()}.`
      : "Hello HandySof team!";

    const details = hasMessage
      ? `I would like to discuss: ${formData.message.trim()}`
      : "I would like to inquire about your software development services and discuss a project.";

    const emailNote = formData.email.trim()
      ? `\nEmail: ${formData.email.trim()}`
      : "";

    return getWhatsAppUrl(`${greeting}\n\n${details}${emailNote}`);
  }, [formData.name, formData.message, formData.email]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      /*
        -------------------------------------------------------------
        API / EMAIL SERVICE INTEGRATION PLACEHOLDER:
        -------------------------------------------------------------
        Submits to /api/contact by default. You can easily switch this
        to call Formspree, Resend, EmailJS, or your custom endpoint.
      */
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage(
          "Something went wrong. Please reach out to us directly via email or WhatsApp.",
        );
      }
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-28 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Have an Idea? Let's Build It."
          subtitle="Looking for a software solution or want to discuss an idea? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Contact Info & Quick Links */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl font-bold text-brand-blue-900 mb-2 sm:mb-3">
                Let&apos;s start a conversation
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                Whether you need a full web platform, a business tool, or
                technical guidance on an upcoming project, we are ready to
                assist.
              </p>

              {/* Direct channels cards */}
              <div className="space-y-3 sm:space-y-3.5">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 hover:border-brand-teal-500 hover:bg-brand-teal-50/20 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs font-medium text-slate-500 uppercase tracking-wider truncate">
                      Chat on WhatsApp
                    </div>
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-brand-blue-700 truncate">
                      Quick Project Consultation
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={SOCIAL_LINKS.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 hover:border-brand-blue-500 hover:bg-brand-blue-50/20 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs font-medium text-slate-500 uppercase tracking-wider truncate">
                      Email Us
                    </div>
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-brand-blue-700 truncate">
                      handysof@outlook.com
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 hover:border-brand-blue-500 hover:bg-brand-blue-50/20 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs font-medium text-slate-500 uppercase tracking-wider truncate">
                      Connect on LinkedIn
                    </div>
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-brand-blue-700 truncate">
                      HandySof
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response time note */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">
                Quick Response:
              </span>{" "}
              We typically respond within 24 hours during standard business
              hours.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/60 rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-transparent transition-all text-base sm:text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-transparent transition-all text-base sm:text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirements or ideas..."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-transparent transition-all text-base sm:text-sm resize-y"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Banner */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                    <span>
                      Thank you! Your message has been sent successfully. We
                      will get in touch with you shortly.
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto"
                    icon={
                      status === "loading" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                  >
                    {status === "loading"
                      ? "Sending Message..."
                      : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
