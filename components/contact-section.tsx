"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Send, AlertCircle, CheckCircle, CreditCard, Gift } from "lucide-react"
import { useState } from "react"

function WhatsAppIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
    </svg>
  )
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.phone.length !== 10) {
      setError("Please enter a valid 10 digit mobile number")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to send message.")
        return
      }

      setSubmitted(true)

      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: "", email: "", phone: "", message: "" })
      }, 4000)
    } catch {
      setError("Submission failed. Please call us directly.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError("")
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Get In Touch
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto">
            Interested in <strong>The Divine Farms</strong>? Contact us today
            to know pricing, availability, and schedule your site visit.
          </p>
        </motion.div>

        {/* Offer badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">

          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 text-white">
            <CreditCard size={18} className="text-accent" />
            EMI Options Available
          </div>

          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold">
            <Gift size={18} />
            FREE Resort Membership
          </div>

        </div>

        {/* Contact cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">

          <a
            href="tel:6309123731"
            className="p-8 bg-white/12 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 transition"
          >
            <Phone size={34} className="text-white mb-4" />
            <h3 className="text-xl font-bold text-white">Call Us</h3>
            <p className="text-white/80 mt-1">+91 6309123731</p>
          </a>

          <a
            href="https://wa.me/916309123731?text=Hi! I'm interested in THE DIVINE FARMS project."
            target="_blank"
            className="p-8 bg-white/12 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 transition"
          >
            <WhatsAppIcon size={34} className="text-white mb-4" />
            <h3 className="text-xl font-bold text-white">WhatsApp</h3>
            <p className="text-white/80 mt-1">Chat instantly</p>
          </a>

          <div className="p-8 bg-white/12 backdrop-blur-xl rounded-2xl border border-white/20">
            <MapPin size={34} className="text-white mb-4" />
            <h3 className="text-xl font-bold text-white">Project Location</h3>
            <p className="text-white/80 mt-1">Near Kolanupaka, Aler</p>
          </div>

        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl p-8 space-y-6"
          >

            <h3 className="text-2xl font-bold text-center">
              Request a Callback
            </h3>

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle size={40} className="text-green-600 mx-auto mb-4" />
                <p className="text-lg font-semibold">Thank You!</p>
                <p className="text-muted-foreground">
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex gap-2">
                    <AlertCircle size={18} className="text-red-600" />
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {loading ? "Sending..." : "Request Callback"}
                </button>
              </>
            )}

          </form>

        </div>

      </div>
    </section>
  )
}