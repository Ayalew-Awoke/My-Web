import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // anti-spam
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Please enter a subject.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!validate()) return;

    // Honeypot spam check
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Try Web3Forms first if access key is available
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (accessKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `[Portfolio Contact] ${formData.subject}`,
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
            name: formData.name,
            email: formData.email,
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setStatus("success");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            honeypot: "",
          });
          return;
        }
      }

      // Fallback to mailto if Web3Forms not available or fails
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`,
      )}&body=${encodeURIComponent(
        `Hello Ayalew,

My name is ${formData.name} (${formData.email}).

${formData.message}`,
      )}`;

      window.location.href = mailtoUrl;
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      console.error("Contact form submission error:", err);
      // Final fallback to mailto
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`,
      )}&body=${encodeURIComponent(
        `Hello Ayalew,

My name is ${formData.name} (${formData.email}).

${formData.message}`,
      )}`;

      window.location.href = mailtoUrl;
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    }
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || "Inquiry regarding Engineering / Software Opportunity",
  )}&body=${encodeURIComponent(
    `Hello Ayalew,

My name is ${formData.name || ""} (${formData.email || ""}).

${formData.message || ""}`,
  )}`;

  return (
    <section id="contact" className="section-container contact-section">
      <div className="section-inner max-w-7xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle-tag">
            <MessageSquare size={16} />
            <span>Let's Build Something Meaningful</span>
          </div>
          <h2 className="section-title">Contact</h2>
          <p className="section-description max-w-3xl">
            I’m always open to connecting with people, organizations, and teams
            working on meaningful ideas and opportunities. Whether you have an
            engineering role, software project, collaboration, or simply want to
            discuss technology, feel free to get in touch.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info & Professional Links */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <h3 className="contact-card-title">Direct Information</h3>

              <div className="contact-meta-list">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-meta-item"
                >
                  <div className="contact-meta-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="contact-meta-label">Email</span>
                    <span className="contact-meta-val">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="contact-meta-item"
                >
                  <div className="contact-meta-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="contact-meta-label">Phone</span>
                    <span className="contact-meta-val">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="contact-meta-item">
                  <div className="contact-meta-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="contact-meta-label">Location</span>
                    <span className="contact-meta-val">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="professional-links-block mt-8">
                <h4 className="professional-links-title">Professional Links</h4>
                <div className="contact-social-buttons">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-tech w-full"
                  >
                    <span>Connect on LinkedIn</span>
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-tech w-full"
                  >
                    <span>Explore GitHub Profile</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Actual Working Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="contact-card-title">Send Me a Message</h3>

              {status === "success" && (
                <div className="alert-box alert-success mb-6">
                  <CheckCircle2 size={22} className="text-green" />
                  <div>
                    <h5 className="font-semibold text-green-900">
                      Message Prepared Successfully!
                    </h5>
                    <p className="text-sm text-green-700">
                      Your email client has been opened with your message ready
                      to send. Just click send in your email app to complete
                      delivery.
                    </p>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-tech mt-3"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData({ ...formData, honeypot: e.target.value })
                  }
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name <span className="text-red">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`form-input ${errors.name ? "input-error" : ""}`}
                    disabled={status === "submitting"}
                  />
                  {errors.name && (
                    <span className="field-error-msg">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-red">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`form-input ${errors.email ? "input-error" : ""}`}
                    disabled={status === "submitting"}
                  />
                  {errors.email && (
                    <span className="field-error-msg">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="text-red">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Enter the subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    className={`form-input ${errors.subject ? "input-error" : ""}`}
                    disabled={status === "submitting"}
                  />
                  {errors.subject && (
                    <span className="field-error-msg">{errors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={`form-textarea ${errors.message ? "input-error" : ""}`}
                    disabled={status === "submitting"}
                  />
                  {errors.message && (
                    <span className="field-error-msg">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn btn-primary-tech btn-lg w-full contact-submit-btn"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="spin-anim" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
