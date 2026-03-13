"use client"

import { motion } from "framer-motion"
import {
  MapPin,
  Navigation,
  Car,
  Plane,
  Building,
  Route,
  Church,
  Star,
} from "lucide-react"

const distances = [
  { place: "Warangal Highway", time: "5 Mins", icon: Route },
  { place: "Yadadri Temple", time: "15 Mins", icon: Church },
  { place: "Komuravelli Temple", time: "15 Mins", icon: Church },
  { place: "RRR (Regional Ring Road)", time: "18 Mins", icon: Route },
  { place: "AIIMS Hospital", time: "20 Mins", icon: Building },
  { place: "Warangal Textile Park & Airport", time: "60 Mins", icon: Plane },
]

const locationHighlights = [
  "Adjacent to Aler – Siddipet Highway",
  "Near Someshwara Swamy Temple",
  "Near 2000+ year old Kolanupaka Jain Temple",
  "Adjacent to proposed KYKK Road (Keesara–Yadadri–Kolanpaka–Komuravelli)",
  "Upcoming infrastructure developments in the region",
  "Peaceful countryside environment with clean air and water",
]

export function LocationSection() {
  return (
    <section
      id="location"
      className="py-20 sm:py-28 bg-secondary/20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
            <MapPin size={16} />
            Prime Location Advantage
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Near Kolanupaka, Aler
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategically located with excellent connectivity to highways,
            temples, and upcoming infrastructure developments.
          </p>

        </motion.div>

        {/* Distance Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {distances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary hover:shadow-xl transition-all"
            >

              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon size={22} className="text-primary" />
              </div>

              <p className="text-xl font-serif font-bold text-primary mb-1">
                {item.time}
              </p>

              <p className="text-xs text-muted-foreground">
                {item.place}
              </p>

            </motion.div>
          ))}
        </div>

        {/* Location Content */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border"
          >

            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-accent" />
              <h3 className="text-2xl font-serif font-bold">
                Location Highlights
              </h3>
            </div>

            <div className="space-y-4">

              {locationHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star size={16} className="text-accent mt-1" />
                  <p className="text-muted-foreground">
                    {highlight}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-xl flex items-center gap-2 text-primary font-semibold">
              <Navigation size={18} />
              Near Kolanupaka, Aler – Telangana
            </div>

          </motion.div>

          {/* Why Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
          >

            <h3 className="text-2xl font-serif font-bold mb-8">
              Why This Location?
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Church size={18} className="text-accent" />
                  Spiritual Hub
                </h4>

                <p className="text-primary-foreground/80">
                  Close to famous temples like Yadadri Temple,
                  Komuravelli Temple, Someshwara Swamy Temple,
                  and the historic Kolanupaka Jain Temple.
                </p>
              </div>

              <div>
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Route size={18} className="text-accent" />
                  Excellent Connectivity
                </h4>

                <p className="text-primary-foreground/80">
                  Near Warangal Highway and upcoming KYKK Road,
                  connecting major temple and tourism corridors.
                </p>
              </div>

              <div>
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Car size={18} className="text-accent" />
                  Easy Access
                </h4>

                <p className="text-primary-foreground/80">
                  Quick access to RRR Road, AIIMS Hospital,
                  and Warangal Textile Park & Airport.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-8">
            Explore Location on Map
          </h3>

          <div className="rounded-2xl overflow-hidden border border-border shadow-xl h-80 sm:h-96">

            <iframe
              src="https://www.google.com/maps?q=Kolanupaka,Telangana&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Divine Farms Location"
            />

          </div>

          <p className="text-muted-foreground text-sm mt-4">
            Exact project coordinates will be shared during site visit booking.
          </p>

        </motion.div>

      </div>
    </section>
  )
}