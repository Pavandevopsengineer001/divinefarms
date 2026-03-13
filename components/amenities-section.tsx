"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Home,
  Tent,
  Waves,
  Umbrella,
  CircleDot,
  Baby,
  Trees,
  Flame,
  PartyPopper,
  Volleyball,
  Camera,
  Car,
  Sparkles,
} from "lucide-react"

const amenities = [
  {
    name: "Clubhouse",
    icon: Building2,
    description: "Premium clubhouse designed for community gatherings and relaxation",
  },
  {
    name: "Farm Cottage",
    icon: Home,
    description: "Comfortable farm cottages for peaceful weekend stays",
  },
  {
    name: "Luxury Glam Pods",
    icon: Tent,
    description: "Modern glamping pods offering a unique luxury outdoor stay",
  },
  {
    name: "Swimming Pool",
    icon: Waves,
    description: "Large refreshing pool for relaxation and family fun",
  },
  {
    name: "Beach View Gazebo",
    icon: Umbrella,
    description: "Scenic beach-style seating with gazebo relaxation zones",
  },
  {
    name: "Box Cricket",
    icon: CircleDot,
    description: "Dedicated cricket box for sports lovers",
  },
  {
    name: "Kids Play Area",
    icon: Baby,
    description: "Safe play area designed for children entertainment",
  },
  {
    name: "Mahogany Plantation",
    icon: Trees,
    description: "High-value timber plantation across plots",
  },
  {
    name: "Fruit Plantation",
    icon: Sparkles,
    description: "Multiple fruit trees planted on every plot",
  },
  {
    name: "OAT with Campfire",
    icon: Flame,
    description: "Open air theatre experience with campfire evenings",
  },
  {
    name: "Party Lawn",
    icon: PartyPopper,
    description: "Spacious celebration lawn for gatherings and events",
  },
  {
    name: "Beach Volleyball",
    icon: Volleyball,
    description: "Volleyball court for recreation and outdoor fun",
  },
  {
    name: "Photo Session Lawn",
    icon: Camera,
    description: "Beautiful scenic lawns perfect for photography",
  },
  {
    name: "40 & 30 Ft Roads",
    icon: Car,
    description: "Wide internal roads for easy vehicle movement",
  },
]

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="py-20 sm:py-28 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-bold text-sm mb-6">
            <Sparkles size={16} />
            1.5 Acres Premium Amenities
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            World-Class Amenities
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Divine Farms offers an exceptional range of lifestyle amenities
            across <strong>1.5 acres</strong>, combining nature, leisure, and
            modern comfort for your perfect farmland experience.
          </p>

        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-xl transition-all"
            >

              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                <amenity.icon size={26} className="text-accent" />
              </div>

              <h3 className="text-base sm:text-lg font-serif font-bold text-foreground mb-1">
                {amenity.name}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>

            </motion.div>
          ))}
        </div>

        {/* Plot Features + Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >

          {/* Plot Features */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-xl">

            <h3 className="text-2xl font-serif font-bold mb-5">
              Farm Plot Features
            </h3>

            <ul className="space-y-3">
              {[
                "Mahogany plantation on every plot",
                "Fruit plantation included",
                "Curbing stones boundary marking",
                "40 & 30 feet wide internal roads",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Offers */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent to-accent/90 text-accent-foreground shadow-xl">

            <h3 className="text-2xl font-serif font-bold mb-5">
              Special Launch Offers
            </h3>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span><strong>FREE Resort Membership</strong> for buyers</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span><strong>Easy EMI Options</strong> available</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Clear and secure legal documentation</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Limited plots available – Book early!</span>
              </li>
            </ul>

          </div>

        </motion.div>

      </div>
    </section>
  )
}