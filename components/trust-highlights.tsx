"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Sparkles, Play } from "lucide-react"
import { useState } from "react"

export function TrustHighlights() {

  const [playing, setPlaying] = useState(false)

  return (

    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">

      {/* Background Decorations */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
            <Sparkles size={16} />
            Experience The Vision
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Your Dream Farmland Awaits
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Divine Farms combines nature, luxury amenities and strong investment potential.
          </p>

        </motion.div>

        {/* Media Section */}

        <div className="grid lg:grid-cols-2 gap-10 mb-20">

          {/* VIDEO */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
          >

            <div className="aspect-video relative">

              {!playing && (

                <div
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 cursor-pointer z-10"
                >

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Play size={34} className="text-accent-foreground ml-1" />
                  </motion.div>

                  <p className="text-white font-serif font-bold mt-4 text-lg">
                    Watch Project Overview
                  </p>

                </div>

              )}

              {playing && (

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/8B3hRUk3qiM?autoplay=1"
                  title="Divine Farms Project Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />

              )}

              <img
                src="/divine-farms-hero.jpg"
                className={`absolute inset-0 w-full h-full object-cover ${playing ? "hidden" : ""}`}
              />

            </div>

          </motion.div>

          {/* Right Grid */}

          <div className="grid grid-cols-2 gap-5">

            {[
              { title: "Farm Cottage", subtitle: "Relaxing Nature Stay" },
              { title: "Luxury Glam Pods", subtitle: "Glamping Experience" },
              { title: "Swimming Pool", subtitle: "Premium Recreation" },
              { title: "Beach View Gazebo", subtitle: "Scenic Relaxation" },
            ].map((item, index) => (

              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden relative shadow-xl"
              >

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/divine-farms-hero.jpg')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/40 flex flex-col items-center justify-center text-center p-4">

                  <p className="text-white font-serif font-bold text-lg">
                    {item.title}
                  </p>

                  <p className="text-white/80 text-sm mt-1">
                    {item.subtitle}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Trust Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            { value: "1.5", label: "Acres Amenities", detail: "Premium Facilities" },
            { value: "Clear", label: "Legal Titles", detail: "100% Verified" },
            { value: "Gated", label: "Community", detail: "Secure Layout" },
            { value: "FREE", label: "Resort Membership", detail: "Limited Offer" },
          ].map((stat, index) => (

            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary hover:shadow-xl transition-all"
            >

              <p className="text-4xl font-serif font-bold text-primary mb-2">
                {stat.value}
              </p>

              <p className="font-bold text-foreground">
                {stat.label}
              </p>

              <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mt-2">
                <CheckCircle2 size={14} className="text-accent" />
                {stat.detail}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}