"use client"

import { motion } from "framer-motion"
import {
  Award,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  Users,
  Handshake,
  Phone,
} from "lucide-react"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-bold text-sm mb-6">
            <Building2 size={16} />
            About The Developer
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            SRLN Infra Developers
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creating premium lifestyle destinations where nature,
            investment potential, and modern amenities come together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Company Card */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 p-8 text-primary-foreground shadow-2xl">

              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

              <div className="relative z-10">

                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Building2 size={32} />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                  SRLN Infra Developers
                </h3>

                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  SRLN Infra Developers is dedicated to building
                  premium farmland and lifestyle projects that blend
                  natural living with modern infrastructure. Our goal
                  is to create peaceful destinations where families
                  can invest, relax, and reconnect with nature.
                </p>

                {/* Trust Points */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">

                  <div className="text-center">
                    <Users size={24} className="mx-auto mb-2 text-accent" />
                    <p className="text-sm">Happy Clients</p>
                  </div>

                  <div className="text-center">
                    <Handshake size={24} className="mx-auto mb-2 text-accent" />
                    <p className="text-sm">Trust & Integrity</p>
                  </div>

                  <div className="text-center">
                    <Award size={24} className="mx-auto mb-2 text-accent" />
                    <p className="text-sm">Quality Projects</p>
                  </div>

                </div>

              </div>

            </div>

            {/* Contact Card */}
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition">

              <p className="text-sm text-muted-foreground mb-2">
                For inquiries about THE DIVINE FARMS
              </p>

              <a
                href="tel:6309123731"
                className="flex items-center gap-2 text-xl font-serif font-bold text-primary"
              >
                <Phone size={20} />
                +91 6309123731
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Mission */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">

              <div className="flex gap-4">

                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target size={24} className="text-primary" />
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">
                    Our Mission
                  </h4>

                  <p className="text-muted-foreground">
                    To develop high-quality farmland communities
                    offering modern amenities, sustainable living,
                    and long-term investment value.
                  </p>
                </div>

              </div>

            </div>

            {/* Vision */}
            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">

              <div className="flex gap-4">

                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Eye size={24} className="text-accent" />
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">
                    Our Vision
                  </h4>

                  <p className="text-muted-foreground">
                    To become one of Telangana’s most trusted
                    developers in farmland and lifestyle
                    communities.
                  </p>
                </div>

              </div>

            </div>

            {/* Values */}
            <div className="p-6 rounded-xl bg-secondary/30 border border-border">

              <div className="flex gap-4">

                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Award size={24} className="text-primary" />
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">
                    Our Values
                  </h4>

                  <p className="text-muted-foreground">
                    Transparency, trust, sustainable development,
                    and customer satisfaction guide everything
                    we build.
                  </p>
                </div>

              </div>

            </div>

            {/* Why Choose */}
            <div>

              <h4 className="text-xl font-serif font-bold mb-4">
                Why SRLN Infra Developers?
              </h4>

              <ul className="space-y-3">

                {[
                  "Transparent business practices",
                  "Clear legal documentation",
                  "Premium farmland developments",
                  "Focus on nature-based communities",
                  "Customer-first approach",
                  "Reliable post-sale support",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}