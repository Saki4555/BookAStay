'use client'

import { motion } from 'motion/react'

const properties = [
  { id: 1, title: 'Cozy Beachside Cottage', location: 'Old Pier', price: '€65/night', beds: 2, guests: 4, img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80' },
  { id: 2, title: 'Modern Downtown Loft', location: 'City Center', price: '€95/night', beds: 3, guests: 6, img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80' },
  { id: 3, title: 'Mountain View Cabin', location: 'Highland Ridge', price: '€80/night', beds: 2, guests: 4, img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80' },
  { id: 4, title: 'Luxury Seaside Villa', location: 'Costa Blanca', price: '€150/night', beds: 4, guests: 8, img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80' },
]

export default function FeaturedProperties() {
  return (
    <section className="py-20 mt-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-2 tracking-wide uppercase text-sm"
            >
              Discover Your Next Stay
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Featured Properties
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="/properties" 
            className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
          >
            View All Properties
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        {/* Custom Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {properties.map((property, idx) => (
            <motion.article
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-md bg-card hover:shadow-2xl transition-shadow duration-500 ${
                idx === 0 ? 'md:col-span-2 row-span-1' : ''
              } ${
                idx === 1 ? 'md:col-span-1 row-span-1' : ''
              } ${
                idx === 2 ? 'md:col-span-1 row-span-1' : ''
              } ${
                idx === 3 ? 'md:col-span-2 row-span-1' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={property.img} 
                  alt={property.title}  
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Favorite Button */}
                <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                {/* Top Badge */}
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-foreground shadow-lg">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    Featured
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="space-y-4">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-white/90">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">{property.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {property.title}
                  </h3>
                  
                  {/* Property Details */}
                  <div className="flex items-center gap-4 text-sm text-white/90">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {property.guests} Guests
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div>
                      <p className="text-white/70 text-xs mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-white">{property.price}</p>
                    </div>
                    <a 
                      href={`/properties/${property.id}`}
                      className="group/btn flex items-center justify-center w-14 h-14 bg-primary rounded-full hover:w-auto hover:px-6 transition-all duration-300 overflow-hidden"
                    >
                      <span className="hidden group-hover/btn:inline-block text-primary-foreground font-semibold mr-2 whitespace-nowrap">Book Now</span>
                      <svg className="w-6 h-6 text-primary-foreground group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}