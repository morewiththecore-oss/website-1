import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INITIAL = { name: "", email: "", company: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim() || form.message.trim().length < 5)
      e.message = "Tell us a little more (min 5 characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const { data } = await axios.post(`${API}/contact`, {
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim() || null,
        message: form.message.trim(),
      });
      setSuccess(data);
      setForm(INITIAL);
      toast.success("Brief received. We'll be in touch within one business day.");
    } catch (err) {
      const detail =
        err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-36 bg-[#050914] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[#2563EB]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#60A5FA]">
                Partner With Us
              </span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Bring us the problem that won't wait.
            </h2>
            <p className="font-body text-lg text-white/65 mt-8 leading-relaxed">
              Share the context. We respond within one business day with a
              point of view — and, if it fits, a path forward.
            </p>

            <div className="mt-12 space-y-6 border-t border-white/10 pt-10">
              {[
                ["Response time", "Within 1 business day"],
                ["Engagements", "Selective · 4–12 weeks per phase"],
                ["Posture", "Embedded · operator-first"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 w-32 shrink-0">
                    {k}
                  </div>
                  <div className="font-display text-white text-base md:text-lg">
                    {v}
                  </div>
                </div>
              ))}

              <div className="flex items-baseline gap-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 w-32 shrink-0">
                  Email
                </div>
                <a
                  href="mailto:morewiththecore@gmail.com"
                  data-testid="contact-email-link"
                  className="font-display text-white text-base md:text-lg link-underline hover:text-[#60A5FA] transition-colors break-all"
                >
                  morewiththecore@gmail.com
                </a>
              </div>

              <div className="flex items-baseline gap-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 w-32 shrink-0">
                  LinkedIn
                </div>
                <a
                  href="https://www.linkedin.com/company/coremore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-linkedin-link"
                  className="font-display text-white text-base md:text-lg link-underline hover:text-[#60A5FA] transition-colors inline-flex items-center gap-2"
                >
                  linkedin.com/company/coremore
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {success ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="contact-success"
                className="border border-[#2563EB]/40 bg-[#2563EB]/5 p-10 md:p-12"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#60A5FA] mb-4">
                  Brief received — Ref #{success.id.slice(0, 8).toUpperCase()}
                </div>
                <h3 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight">
                  Thank you. The work begins.
                </h3>
                <p className="font-body text-white/70 mt-6 text-lg leading-relaxed">
                  {success.message ||
                    "A Coremore partner will be in touch within one business day."}
                </p>
                <button
                  onClick={() => setSuccess(null)}
                  data-testid="contact-send-another"
                  className="mt-10 font-display text-sm uppercase tracking-[0.15em] border border-white/25 text-white hover:bg-white/5 px-6 py-3"
                >
                  Send another brief
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                data-testid="contact-form"
                noValidate
                className="border border-white/10"
              >
                <Field
                  id="name"
                  label="Your Name"
                  value={form.name}
                  onChange={update("name")}
                  error={errors.name}
                  placeholder="Jane Operator"
                  testId="contact-input-name"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                  placeholder="jane@company.com"
                  testId="contact-input-email"
                />
                <Field
                  id="company"
                  label="Company (optional)"
                  value={form.company}
                  onChange={update("company")}
                  error={errors.company}
                  placeholder="Company Inc."
                  testId="contact-input-company"
                />
                <div className="border-t border-white/10">
                  <label
                    htmlFor="message"
                    className="block px-6 md:px-8 pt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-white/45"
                  >
                    The Brief
                  </label>
                  <textarea
                    id="message"
                    data-testid="contact-input-message"
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="What outcome are you trying to move?"
                    className="w-full bg-transparent px-6 md:px-8 py-4 font-body text-white placeholder-white/30 text-lg focus:outline-none resize-none"
                  />
                  {errors.message && (
                    <div className="px-6 md:px-8 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-red-400">
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit-button"
                  className="w-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed py-6 font-display font-semibold uppercase tracking-[0.18em] text-sm transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.55)]"
                >
                  {submitting ? "Sending…" : "Send Brief"}
                  {!submitting && <span aria-hidden>→</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, value, onChange, error, type = "text", placeholder, testId }) {
  return (
    <div className="border-b border-white/10 px-6 md:px-8 py-5">
      <label
        htmlFor={id}
        className="block font-mono text-[11px] uppercase tracking-[0.25em] text-white/45"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={testId}
        className="w-full bg-transparent border-0 mt-2 font-body text-white placeholder-white/30 text-lg md:text-xl focus:outline-none"
      />
      {error && (
        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-red-400">
          {error}
        </div>
      )}
    </div>
  );
}
