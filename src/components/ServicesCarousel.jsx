import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      serviceKey: "aluminum-installation",
      title: "Aluminum Doors & Windows Installation",
      description: "Professional installation of aluminum doors and windows with precision fitting and weatherproofing.",
      features: ["Precision Fitting", "Weather Sealing", "Quality Hardware"],
      // icon: <Wrench className="w-8 h-8" />,
      image: "/images/aluminium_doors.jpeg"
    },
    {
      id: 2,
      serviceKey: "hardware-installation",
      title: "Door & Window Accessories Installation",
      description: "Complete installation of locks, handles, hinges, and all door/window accessories.",
      features: ["Professional Hardware", "Security Systems", "Smooth Operation"],
      // icon: <Shield className="w-8 h-8" />,
      image: "/images/window_accessories.jpeg"
    },
    {
      id: 3,
      serviceKey: "shower-installation",
      title: "Shower Cabinet Installation",
      description: "Expert installation of shower cabinets with proper waterproofing and drainage systems.",
      features: ["Waterproof Sealing", "Proper Drainage", "Modern Design"],
      // icon: <CheckCircle className="w-8 h-8" />,
      image: "/images/shower_cabinet2.jpg"
    },
    {
      id: 4,
      serviceKey: "concrete-installation",
      title: "Concrete Block Installation",
      description: "Professional laying of concrete hollow blocks and paving blocks for construction projects.",
      features: ["Structural Integrity", "Level Installation", "Durable Foundation"],
      // icon: <Clock className="w-8 h-8" />,
      image: "/images/concrete_block.jpeg"
    },
    {
      id: 5,
      serviceKey: "brick-installation",
      title: "Brick Wall & Retaining Wall Installation",
      description: "Expert installation of brick slips, wall tiles, and retaining wall concrete blocks.",
      features: ["Aesthetic Appeal", "Structural Support", "Long-lasting"],
      // icon: <Wrench className="w-8 h-8" />,
      image: "/images/brick_walls.jpeg"
    },
    {
      id: 6,
      serviceKey: "general-installation",
      title: "General Construction Services",
      description: "Complete construction and installation services for all your building needs.",
      features: ["Full Service", "Quality Assurance", "Timely Completion"],
      // icon: <Shield className="w-8 h-8" />,
      image: "/images/general_contractor.jpeg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleGetQuote = (serviceKey) => {
    navigate('/contact', {
      state: {
        preSelectedService: serviceKey,
        serviceTitle: services.find(s => s.serviceKey === serviceKey)?.title
      }
    });
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary-700">
            Professional Installation Services
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Beyond supplying quality materials, we provide expert installation services
            to ensure your projects are completed to perfection.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-slate-200">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  <div className="bg-white h-[400px] md:h-[350px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      {/* Content Side */}
                      <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                        <div className="flex-1">
                          <div className="flex items-start mb-3">
                            <div className="bg-primary-100 p-2 rounded-full text-primary-600 mr-3 flex-shrink-0">
                              {service.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-primary-700 leading-tight">
                              {service.title}
                            </h3>
                          </div>

                          <p className="text-slate-600 mb-3 leading-relaxed text-sm md:text-base">
                            {service.description}
                          </p>

                          <div className="space-y-1 mb-4">
                            {service.features.map((feature, index) => (
                              <div key={index}>
                                <span className="text-slate-700 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => handleGetQuote(service.serviceKey)}
                          className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg font-semibold transition w-fit text-sm"
                        >
                          Get Installation Quote
                        </button>
                      </div>

                      {/* Image Side */}
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 z-10"></div>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/images/construction-placeholder.jpg';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition z-20 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition z-20 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-600 scale-110'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
