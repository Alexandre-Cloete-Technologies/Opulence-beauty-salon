'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  notice?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Gel Nails (Rubber Base)',
    description: 'Durable gel manicure with flexible rubber base for long-lasting shine and nail protection.',
    price: 'From R295',
    image: '/images/services/gel-nails.png'
  },
  {
    id: 2,
    title: 'Lash Extensions',
    description: 'Beautiful individual lash extensions for fuller, longer lashes that enhance your natural beauty.',
    price: 'From R290',
    image: '/images/services/pedicure.png'
  },
  {
    id: 3,
    title: 'Facial Waxing',
    description: 'Professional facial hair removal including eyebrows, upper lip, and chin for smooth skin.',
    price: 'From R85',
    image: '/images/services/waxing.png'
  },
  {
    id: 4,
    title: 'Body Waxing',
    description: 'Expert full-body or targeted waxing services for silky smooth skin using gentle techniques.',
    price: 'From R100',
    image: '/images/services/waxing.png'
  },
  {
    id: 5,
    title: 'Tinting',
    description: 'Eyebrow and eyelash tinting to enhance and define your features with semi-permanent color.',
    price: 'From R100',
    image: '/images/services/nail-art.png'
  },
  {
    id: 6,
    title: 'Nail Polish',
    description: 'Classic nail polish application in a wide range of colors for a fresh, polished look.',
    price: 'From R150',
    image: '/images/services/manicure.png'
  },
  {
    id: 7,
    title: 'Manicures & Pedicures',
    description: 'Complete nail care including filing, shaping, cuticle treatment, and polish application.',
    price: 'From R75',
    image: '/images/services/pedicure.png'
  },
  {
    id: 8,
    title: 'Kids Nails - Manicures',
    description: 'Gentle, fun manicure service designed especially for children with safe products.',
    price: 'From R65',
    image: '/images/services/manicure.png',
    notice: 'Service applicable to kids aged 13 and under'
  },
  {
    id: 9,
    title: 'Kids Nails - Pedicures',
    description: 'Relaxing pedicure for kids featuring gentle care and fun colors in a safe environment.',
    price: 'From R75',
    image: '/images/services/jelly-soak.png',
    notice: 'Service applicable to kids aged 13 and under'
  }
];

export function PremiumCare() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Get visible services for desktop (4 cards)
  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(services[(currentIndex + i) % services.length]);
    }
    return visible;
  };

  return (
    <section id="services" className="py-20 bg-background flex justify-center">
      <div className="w-full max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold tracking-tight" style={{ color: 'var(--color-rose-8, #1B0D14)' }}>
              Premium Care
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-rose-45, #9A4C73)' }}>
              Choose from our selection of top-tier services designed to pamper you.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="w-full relative">
            {/* Desktop View - 4 cards */}
            <div className="hidden lg:block">
              <div className="flex gap-6 transition-opacity duration-300" style={{ opacity: isAnimating ? 0.5 : 1 }}>
                {getVisibleServices().map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>

            {/* Tablet View - 2 cards */}
            <div className="hidden md:block lg:hidden">
              <div className="flex gap-6 transition-opacity duration-300" style={{ opacity: isAnimating ? 0.5 : 1 }}>
                {[services[currentIndex % services.length], services[(currentIndex + 1) % services.length]].map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>

            {/* Mobile View - 1 card */}
            <div className="md:hidden">
              <div className="transition-opacity duration-300" style={{ opacity: isAnimating ? 0.5 : 1 }}>
                <ServiceCard service={services[currentIndex % services.length]} />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10 border border-[#E7CFDB]"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--color-rose-55, #EE2B8C)' }} />
            </button>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10 border border-[#E7CFDB]"
              aria-label="Next services"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--color-rose-55, #EE2B8C)' }} />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 300);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#f1f1f1]' 
                    : 'bg-[#f1f1f1f1] hover:bg-[#9A4C73]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* View Full Menu Button */}
          <a
            href="https://www.fresha.com/a/opulence-strand-cape-town-hibernian-tower-beach-road-yqr0r0du?pId=466547"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-md"
            style={{
              border: '1px solid var(--color-rose-55, #EE2B8C)',
              color: 'var(--color-rose-55, #EE2B8C)',
              fontWeight: 700,
              fontSize: '14px'
            }}
          >
            View Full Service Menu
          </a>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex-1 bg-white rounded-2xl overflow-hidden border border-[#E7CFDB] hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-rose-8, #1B0D14)' }}>
          {service.title}
        </h3>
        <p className="text-sm mb-4 flex-1" style={{ color: 'var(--color-azure-34, #4B5563)', lineHeight: '1.625' }}>
          {service.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-[#E7CFDB]">
          <div className="flex flex-col">
            <span className="text-lg font-bold" style={{ color: 'var(--color-rose-55, #EE2B8C)' }}>
              {service.price}
            </span>
            <span className="text-xs" style={{ color: 'var(--color-azure-34, #4B5563)' }}>
              {service.notice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
