"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Phone, Gift, Percent } from "lucide-react"
import { useState } from "react"

export function InlineLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
        body: JSON.stringify({
          ...formData,
          message: "Lead from landing page form",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Submission failed. Please try again.")
        return
      }

      setSubmitted(true)
    } catch {
      setError("Submission failed. Please call us at 6309123731")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    if (error) setError("")
  }

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Gift size={18} className="text-primary" />
              <span className="text-sm font-bold text-primary">
                Limited Launch Offer
              </span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Book Your Dream Farm Plot Today
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Invest in premium farmland at <strong>The Divine Farms</strong>.
              Enjoy peaceful weekend living with world-class amenities and
              excellent investment appreciation potential.
            </p>

            {/* Offer Highlights */}
            <div className="space-y-5 mb-8">

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Percent size={20} className="text-accent" />
                </div>

                <div>
                  <p className="font-bold text-foreground">
                    Easy EMI Options Available
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Flexible payment plans for buyers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Gift size={20} className="text-primary" />
                </div>

                <div>
                  <p className="font-bold text-foreground">
                    FREE Resort Membership
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Complimentary access for plot buyers
                  </p>
                </div>
              </div>

            </div>

            <a
              href="tel:6309123731"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <Phone size={20} />
              Call Now: 6309123731
            </a>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="bg-card rounded-2xl shadow-2xl border border-border p-8 sm:p-10">

              <div className="text-center mb-8">

                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Get Pricing Details
                </h3>

                <p className="text-muted-foreground text-sm">
                  Fill the form to receive project brochure and price details
                </p>

              </div>

              {submitted ? (

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >

                  <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                    <CheckCircle size={48} className="text-green-600" />
                  </div>

                  <h4 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Thank You!
                  </h4>

                  <p className="text-muted-foreground">
                    Our team will contact you shortly with pricing details.
                  </p>

                </motion.div>

              ) : (

                <form onSubmit={handleSubmit} className="space-y-5">

                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2"
                    >
                      <AlertCircle size={18} className="text-red-600" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      disabled={loading}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      disabled={loading}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10 digit mobile number"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      disabled={loading}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold rounded-xl hover:shadow-xl flex items-center justify-center gap-2 text-lg"
                  >
                    <Send size={20} />
                    {loading ? "Submitting..." : "Get Price Details"}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    Your details are secure and will never be shared.
                  </p>

                </form>

              )}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}