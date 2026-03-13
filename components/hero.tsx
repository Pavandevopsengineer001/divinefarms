"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown, MapPin, Calendar, Sparkles, Gift } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/divine-farms-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/20" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={floatAnimation}
        className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl hidden lg:block"
      />
      <motion.div
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        className="absolute bottom-40 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl hidden lg:block"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
      >
        {/* Offer Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/90 backdrop-blur-md rounded-full text-accent-foreground text-sm font-bold shadow-lg">
            <Gift size={18} className="animate-bounce" />
            FREE Resort Membership for Plot Buyers!
          </span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-accent font-medium tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 font-sans">
            SRLN Infra Developers Proudly Presents
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight text-balance"
          style={{ letterSpacing: "-0.02em", textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
        >
          THE DIVINE FARMS
        </motion.h1>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4">
          <Sparkles size={24} className="text-accent" />
          <p className="text-xl sm:text-2xl text-accent font-serif font-medium">
            A New Lifestyle Close to Nature
          </p>
          <Sparkles size={24} className="text-accent" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/90 mb-4 max-w-3xl mx-auto font-light leading-relaxed text-balance font-sans"
        >
          Premium Farm Plots with Clubhouse, Farm Cottage & Glam Pod, Swimming Pool, Beach View with Gazebo, and much more across 1.5 acres of amenities!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-white/80 mb-8"
        >
          <MapPin size={20} className="text-accent" />
          <span className="text-base sm:text-lg font-medium">Near Kolanupaka, Aler, Telangana</span>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["Mahogany & Fruit Plantation", "40 & 30 Ft Roads", "EMI Available", "Clear Title"].map((item, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/25 hover:bg-white/25 transition-all cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="tel:6309123731"
              className="inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground font-serif font-bold rounded-xl hover:shadow-2xl transition-all duration-300 text-lg tracking-wide shadow-lg"
            >
              Call Now: 6309123731
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#highlights"
              className="inline-block px-10 py-4 bg-white/15 backdrop-blur-md text-white font-serif font-bold rounded-xl hover:bg-white/25 transition-all duration-300 border border-white/30 text-lg tracking-wide"
            >
              Explore Project
            </Link>
          </motion.div>
        </motion.div>

        {/* Grand Launch Event CTA */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/95 to-primary/85 backdrop-blur-md rounded-xl border border-primary/50 shadow-xl"
          >
            <Calendar size={22} className="text-primary-foreground" />
            <span className="text-primary-foreground font-serif font-bold text-lg">
              Grand Launch Event - You're Invited!
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown size={36} className="text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
