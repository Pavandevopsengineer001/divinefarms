"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Highlights", href: "#highlights" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-md supports-[backdrop-filter]:bg-white/95 border-b border-border shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }}>
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
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">

            <motion.a
              href="tel:6309123731"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
            >
              <Phone size={18} />
              <span className="hidden md:inline">6309123731</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden pb-4 space-y-2 border-t border-border pt-4 bg-background/50 backdrop-blur-sm"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/30 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:6309123731"
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground font-bold rounded-lg shadow-lg transition-all mt-3"
            >
              <Phone size={18} />
              <span>Call: 6309123731</span>
            </a>

          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}