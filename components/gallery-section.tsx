"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, Camera, ImageIcon } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    title: "Project Entrance",
    category: "Infrastructure",
    image: "/gallery-1-cottage-exterior.jpg",
    placeholder: true,
  },
  {
    id: 2,
    title: "Natural Landscapes",
    category: "Environment",
    image: "/gallery-2-resort-pool.jpg",
    placeholder: true,
  },
  {
    id: 3,
    title: "Internal Roads",
    category: "Infrastructure",
    image: "/gallery-3-garden-pathway.jpg",
    placeholder: true,
  },
  {
    id: 4,
    title: "Sunset Views",
    category: "Views",
    image: "/gallery-4-sunset-view.jpg",
    placeholder: true,
  },
  {
    id: 5,
    title: "Amenity Area",
    category: "Amenities",
    image: "/gallery-5-community-center.jpg",
    placeholder: true,
  },
  {
    id: 6,
    title: "Green Spaces",
    category: "Environment",
    image: "/gallery-6-nature-trail.jpg",
    placeholder: true,
  },
  {
    id: 7,
    title: "Plot Layouts",
    category: "Infrastructure",
    image: "/gallery-7-dining-area.jpg",
    placeholder: true,
  },
  {
    id: 8,
    title: "Nearby Temple",
    category: "Surroundings",
    image: "/gallery-8-wellness-center.jpg",
    placeholder: true,
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-serif font-medium tracking-[0.15em] uppercase text-xs sm:text-sm mb-6">
            Visual Journey
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight text-balance">
            Project Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Explore THE DIVINE FARMS through our collection of project images and surrounding views
          </p>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-accent/10 border border-accent/30 flex items-center gap-4 justify-center"
        >
          <Camera size={24} className="text-accent" />
          <p className="text-foreground font-medium">
            High-quality project photos and videos will be added soon. Contact us for site visit.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2.5 rounded-full font-serif font-bold text-sm transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group rounded-xl overflow-hidden cursor-pointer bg-muted border border-border hover:border-primary transition-all duration-300 ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "h-64 sm:h-full min-h-64" : "h-40 sm:h-48"}`}>
                {/* Placeholder State */}
                <div className="absolute inset-0 bg-primary/10 flex flex-col items-center justify-center p-4">
                  <ImageIcon size={index === 0 ? 48 : 32} className="text-primary/50 mb-2" />
                  <p className="text-sm font-serif font-bold text-foreground text-center">{image.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{image.category}</p>
                  <p className="text-xs text-primary/70 mt-2">Coming Soon</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center">
                    <p className="text-primary-foreground font-serif font-bold">{image.title}</p>
                    <p className="text-primary-foreground/80 text-sm mt-1">{image.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6 font-light">
            Want to see the project in person? Schedule a site visit today.
          </p>
          <a
            href="tel:6309123731"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-serif font-bold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-premium"
          >
            Schedule Site Visit
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-2xl w-full bg-card rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10 bg-background/80 rounded-full p-2"
            >
              <X size={24} />
            </button>
            <div className="aspect-video bg-primary/10 flex flex-col items-center justify-center p-8">
              <ImageIcon size={64} className="text-primary/50 mb-4" />
              <p className="text-2xl font-serif font-bold text-foreground text-center">{selectedImage.title}</p>
              <p className="text-muted-foreground mt-2">{selectedImage.category}</p>
              <p className="text-primary mt-4 font-medium">Photo Coming Soon</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
