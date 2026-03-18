"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground relative">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* 🔥 TOP CTA BAR */}
        <div className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-green-600/20 to-green-400/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-xl font-semibold text-green-400">
  Ready to visit Divine Farms?
</h3>
            <p className="text-sm text-white/70">
              Book your site visit today and experience nature + investment.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">

            {/* Call */}
            <a
              href="tel:6309123731"
              className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition text-white text-sm font-medium flex items-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916309123731"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-white text-sm font-medium flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Logo + About */}
          <div className="space-y-5">

            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image
                src="/divinefarmss.png"
                alt="Divine Farms Logo"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Premium farm plots near Kolanupaka, Aler. Peaceful lifestyle +
              smart investment with modern amenities.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/share/1Gz6EbUE9v/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                <Facebook size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/thedivinefarms"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://youtu.be/8B3hRUk3qiM"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                <Youtube size={18} />
              </motion.a>

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-5 text-lg">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "home",
                "highlights",
                "amenities",
                "location",
                "gallery",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="text-white/70 hover:text-green-400 transition"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
{/* Developer */}
<div>
  <h4 className="font-serif font-bold mb-5 text-lg">
    SRLN Infra Developers
  </h4>

  <ul className="space-y-3 text-sm">

    <li>
      <Link
        href="#about"
        className="text-white/70 hover:text-green-400 transition"
      >
        About Us
      </Link>
    </li>

    <li>
      <Link
        href="#location"
        className="text-white/70 hover:text-green-400 transition"
      >
        Project Location
      </Link>
    </li>

    <li>
      <Link
        href="#contact"
        className="text-white/70 hover:text-green-400 transition"
      >
        Get in Touch
      </Link>
    </li>

  </ul>
</div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-5 text-lg">
              Contact
            </h4>

            <div className="space-y-4 text-sm">

              <motion.a
                whileHover={{ x: 5 }}
                href="tel:6309123731"
                className="flex items-center gap-3 text-white/70 hover:text-green-400 transition"
              >
                <Phone size={18} />
                +91 6309123731
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:info@thedivinefarms.in"
                className="flex items-center gap-3 text-white/70 hover:text-green-400 transition"
              >
                <Mail size={18} />
                info@thedivinefarms.in
              </motion.a>

              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="mt-0.5" />
                <span>
                  Kolanupaka, Aler <br />
                  Telangana, India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6">

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 gap-4">

            <p>
              © {currentYear} The Divine Farms by SRLN Infra Developers.
            </p>

            <p className="text-xs">
              Project promotional website. Contact us for complete details.
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}