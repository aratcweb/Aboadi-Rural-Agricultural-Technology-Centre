"use client";

import { useState } from "react";
import Image from "next/image";
import * as Icons from "lucide-react";

const categories = ["All", "Agricultural Production", "Livelihood Skills", "Community Outreach"];

const galleryItems = [
  // Agricultural Production
  {
    src: "/gallery-images/aquaculture-releasing-fingerlings.webp",
    category: "Agricultural Production",
    title: "Aquaculture: Releasing Fingerlings",
    description: "Trainer demonstrating fingerlings release into a mobile tarpaulin fish tank during a practical session."
  },
  {
    src: "/gallery-images/aquaculture-tarpaulin-tanks.webp",
    category: "Agricultural Production",
    title: "Mobile Aquaculture Tanks",
    description: "Tarpaulin fish ponds set up outdoors for hands-on aquaculture training."
  },
  {
    src: "/gallery-images/aquaculture-mobile-tanks-farmers.webp",
    category: "Agricultural Production",
    title: "Farmer Training",
    description: "Farmers learning maintenance and management of mobile aquaculture tanks."
  },
  {
    src: "/gallery-images/aquaculture-mobile-tanks-outdoor.webp",
    category: "Agricultural Production",
    title: "Aquaculture Workshop",
    description: "Participants gathered around mobile fish ponds for field training."
  },
  {
    src: "/gallery-images/beekeeping-hive-setup-farm.webp",
    category: "Agricultural Production",
    title: "Beekeeping: Hive Installation",
    description: "Setting up a wooden beehive on a local farm to establish honey production."
  },
  {
    src: "/gallery-images/ruminant-rearing-sheep-goat-pen.webp",
    category: "Agricultural Production",
    title: "Ruminants: Livestock Rearing",
    description: "Trainee showing constructed shelter and feeding pen for sheep and goats."
  },
  {
    src: "/gallery-images/ruminant-wooden-pen-outdoor.webp",
    category: "Agricultural Production",
    title: "Small Ruminants Pen",
    description: "Outdoor wooden small animal shelter built for community livestock husbandry."
  },
  {
    src: "/gallery-images/pig-farming-concrete-pen.webp",
    category: "Agricultural Production",
    title: "Livestock: Pig Farming",
    description: "Tending to piglets in a clean, concrete pig pen with sawdust bedding."
  },
  {
    src: "/gallery-images/livestock-snail-pens-outdoor.webp",
    category: "Agricultural Production",
    title: "Snail Farming Cages",
    description: "Constructed wire mesh pens for small-space snail rearing enterprises."
  },
  {
    src: "/gallery-images/nursery-potted-plants-training.webp",
    category: "Agricultural Production",
    title: "Nursery & Propagation",
    description: "Outdoor crop propagation nursery with potted seedlings for trainees."
  },
  {
    src: "/gallery-images/image-10.webp",
    category: "Agricultural Production",
    title: "Poultry Coop Construction",
    description: "Trainees and coordinators inspecting a newly constructed poultry coop built for project beneficiaries."
  },
  {
    src: "/gallery-images/image-12.webp",
    category: "Agricultural Production",
    title: "Shade House Nursery Setup",
    description: "Inspectors checking crop propagation systems inside a shaded greenhouse structure."
  },
  {
    src: "/gallery-images/image-15.webp",
    category: "Agricultural Production",
    title: "Intensive Fish Rearing Pond",
    description: "Coordinators monitoring fish feeding and water quality in an intensive concrete rearing pond."
  },
  {
    src: "/gallery-images/image-21.webp",
    category: "Agricultural Production",
    title: "Cabbage Field Inspection",
    description: "Field officers inspecting growth and crop health in a community cabbage farm."
  },
  {
    src: "/gallery-images/image-24.webp",
    category: "Agricultural Production",
    title: "Ginger Crop Cultivation",
    description: "Trainee learning root crop management on a ginger farming plot."
  },

  // Livelihood Skills
  {
    src: "/gallery-images/soap-making-exhibition-graduation.webp",
    category: "Livelihood Skills",
    title: "Soap Exhibition",
    description: "Display of finished, packaged liquid soaps and bar soaps crafted by participants."
  },
  {
    src: "/gallery-images/soap-making-starter-kits-truck.webp",
    category: "Livelihood Skills",
    title: "Starter Kits Distribution",
    description: "Distributing Jerrycans, raw materials, and starter packages to women's groups from a supply truck."
  },
  {
    src: "/gallery-images/soap-making-kits-distribution.webp",
    category: "Livelihood Skills",
    title: "Soap Enterprise Hand-over",
    description: "Cooperative members receiving soap mixing kits and starter supplies."
  },
  {
    src: "/gallery-images/soap-making-practical-mixing.webp",
    category: "Livelihood Skills",
    title: "Soap Mixing Session",
    description: "Hands-on formulation session with trainees learning correct mixing procedures."
  },
  {
    src: "/gallery-images/soap-making-pouring-molds.webp",
    category: "Livelihood Skills",
    title: "Soap Casting",
    description: "Pouring newly formulated liquid soap into wooden curing molds."
  },
  {
    src: "/gallery-images/soap-making-products-display.webp",
    category: "Livelihood Skills",
    title: "Finished Products Display",
    description: "Display tables featuring packaged bar soap and bottled liquid soaps ready for marketing."
  },

  // Community Outreach
  {
    src: "/gallery-images/military-livelihood-classroom-training.webp",
    category: "Community Outreach",
    title: "Military Livelihood Lecture",
    description: "Classroom lecture on enterprise formation for retiring military personnel."
  },
  {
    src: "/gallery-images/military-compost-rearing-training.webp",
    category: "Community Outreach",
    title: "Field Demonstration",
    description: "Showing organic compost mixtures and farming techniques to military officers."
  },
  {
    src: "/gallery-images/military-partnership-award.webp",
    category: "Community Outreach",
    title: "Military Partnership Award",
    description: "ARATC leadership presenting appreciation award plaque to military officers."
  },
  {
    src: "/gallery-images/community-agricultural-training-hall.webp",
    category: "Community Outreach",
    title: "Agricultural Training Workshop",
    description: "Community training session with local farmers in a local hall."
  },
  {
    src: "/gallery-images/community-workshop-laptop-presentation.webp",
    category: "Community Outreach",
    title: "Interactive Training",
    description: "Trainees engaged during an interactive workshop presentation in the hall."
  },
  {
    src: "/gallery-images/community-training-library.webp",
    category: "Community Outreach",
    title: "Community Library Session",
    description: "Training facilitator addressing local community participants in a library hall."
  },
  {
    src: "/gallery-images/aquaculture-fingerlings-presentation.webp",
    category: "Community Outreach",
    title: "Aquaculture Slide Presentation",
    description: "Visual classroom guide explaining aquaculture fingerling introduction."
  },
  {
    src: "/gallery-images/image-28.webp",
    category: "Community Outreach",
    title: "Coastal Landscapes Workshop",
    description: "Trainees attending a Coastal Sustainable Landscapes Project workshop sponsored by USAID / Feed the Future."
  },
  {
    src: "/gallery-images/image-31.webp",
    category: "Community Outreach",
    title: "Technical Planning Session",
    description: "ARATC technical directors and advisors conducting a quarterly project review session."
  }
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center sm:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-green-900 text-white shadow-md shadow-green-900/20 scale-105"
                : "bg-cream text-green-950 hover:bg-green-100 hover:text-green-900 cursor-pointer"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.src}
            onClick={() => openLightbox(index)}
            className="group relative rounded-3xl overflow-hidden bg-cream border border-green-100/60 aspect-square cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
              <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1.5">
                {item.category}
              </span>
              <h3 className="font-bold text-lg mb-1 leading-snug">{item.title}</h3>
              <p className="text-xs text-green-100/80 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center gap-1.5 mt-3 text-xs text-gold/90 font-medium">
                <Icons.Maximize2 className="w-3.5 h-3.5" />
                Click to Enlarge
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 select-none"
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-50 cursor-pointer"
          >
            <Icons.X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-white hover:text-gold transition-colors p-3 bg-white/5 hover:bg-white/15 rounded-full z-40 cursor-pointer"
          >
            <Icons.ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-[4/3] max-h-[75vh] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl"
          >
            <Image
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            {/* Caption Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 text-white">
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                {filteredItems[lightboxIndex].category}
              </span>
              <h4 className="font-bold text-xl mt-1">{filteredItems[lightboxIndex].title}</h4>
              <p className="text-sm text-zinc-300 mt-2 max-w-3xl leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-white hover:text-gold transition-colors p-3 bg-white/5 hover:bg-white/15 rounded-full z-40 cursor-pointer"
          >
            <Icons.ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}
