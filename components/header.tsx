"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("#home")
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Highlights", href: "#highlights" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      )

      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        if (!section) return
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(navItems[index].href)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-md"
        } border-b border-border`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.08 }}>
                <Image
                  src="/divinefarms.png"
                  alt="Divine Farms Logo"
                  width={180}
                  height={80}
                  priority
                  className="object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium relative transition ${
                    active === item.href
                      ? "text-green-600"
                      : "text-foreground hover:text-green-500"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                      active === item.href ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">

              <motion.a
                href="tel:6309123731"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 px-5 py-2 bg-green-700 text-white rounded-lg text-sm font-semibold hover:bg-green-800 transition"
              >
                <Phone size={16} />
                <span className="hidden md:inline">Call Now</span>
              </motion.a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2"
              >
                <Menu size={24} />
              </button>

            </div>
          </div>
        </div>
      </motion.header>

      {/* 🔥 Overlay + Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl p-6 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button onClick={() => setIsOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium ${
                      active === item.href
                        ? "text-green-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <a
                href="tel:6309123731"
                className="mt-auto flex items-center justify-center gap-2 px-4 py-3 bg-green-700 text-white rounded-lg font-semibold"
              >
                <Phone size={18} />
                Call Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}