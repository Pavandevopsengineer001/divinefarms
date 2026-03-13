"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Project Info */}
          <div className="space-y-5">

            <Link href="/" className="flex items-center gap-3 w-fit">

              <Image
                src="/divinefarms.png"
                alt="Divine Farms Logo"
                width={200}
                height={100}
                className="object-contain"
              />

            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Premium farm plots near Kolanupaka, Aler. Experience a peaceful
              lifestyle surrounded by nature with modern amenities.
            </p>

            <div className="flex gap-3">

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                <Facebook size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
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
                    className="text-white/70 hover:text-accent transition"
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
                  className="text-white/70 hover:text-accent transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-accent transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-accent transition"
                >
                  Terms & Conditions
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
                className="flex items-center gap-3 text-white/70 hover:text-accent transition"
              >
                <Phone size={18} />
                +91 6309123731
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:info@divinefarms.in"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition"
              >
                <Mail size={18} />
                info@divinefarms.in
              </motion.a>

              <div className="flex items-start gap-3 text-white/70">

                <MapPin size={18} className="mt-0.5" />

                <span>
                  Near Kolanupaka, Aler  
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