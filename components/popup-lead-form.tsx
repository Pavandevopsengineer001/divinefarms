"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Gift, CheckCircle, AlertCircle, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function PopupLeadForm() {

  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {

    if (!mounted) return

    const seen = sessionStorage.getItem("divine_popup_seen")

    if (seen) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000) // change to 30000 later

    return () => clearTimeout(timer)

  }, [mounted])


  useEffect(() => {

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }

    window.addEventListener("keydown", esc)

    return () => window.removeEventListener("keydown", esc)

  }, [])


  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("divine_popup_seen", "true")
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    if (error) setError("")
  }


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    setLoading(true)
    setError("")

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          message: "Lead from popup form",
        }),
      })

      if (!res.ok) {
        throw new Error("Submission failed")
      }

      setSubmitted(true)

      sessionStorage.setItem("divine_popup_seen", "true")

      setTimeout(() => {
        setIsOpen(false)
        setSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          email: "",
        })
      }, 2500)

    } catch {
      setError("Submission failed. Please call 6309123731")
    } finally {
      setLoading(false)
    }

  }


  if (!mounted) return null


  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleClose}
        >

          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}

            <div className="bg-gradient-to-r from-green-800 to-green-700 p-6 text-white relative">

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:opacity-70"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold mb-2">
                <Sparkles size={18} />
                EXCLUSIVE OFFER
              </div>

              <h3 className="text-2xl font-bold tracking-tight">
                THE DIVINE FARMS
              </h3>

              <p className="text-white/90 text-sm mt-1">
                Get launch pricing & free resort membership
              </p>

              <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500 text-black rounded-full text-sm font-bold shadow-md">
                <Gift size={16} />
                FREE Resort Membership
              </div>

            </div>


            {/* FORM */}

            <div className="p-6">

              {submitted ? (

                <div className="text-center py-8">

                  <CheckCircle size={40} className="mx-auto text-green-600 mb-3" />

                  <h4 className="text-lg font-bold">
                    Thank You!
                  </h4>

                  <p className="text-sm text-gray-600">
                    Our team will contact you shortly.
                  </p>

                </div>

              ) : (

                <form onSubmit={handleSubmit} className="space-y-4">

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
                  />

                  <button
                    disabled={loading}
                    className="w-full py-3 bg-green-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-800 transition"
                  >
                    <Send size={16} />
                    {loading ? "Submitting..." : "Get Exclusive Pricing"}
                  </button>

                </form>

              )}

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}