import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import services from "../services";

export default function ServiceCarouselCard() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);
//Get quote button handler function
  const handleGetQuote = (serviceKey) => {
    // console.log("^^^^^>>>>>>>:",serviceKey);
    navigate('/contact', {
      state: {
        preSelectedService: serviceKey,
        serviceTitle: services.find(s => s.serviceKey === serviceKey)?.title
      }
    });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Slides wrapper */}
      <div className="relative md:h-[380px] overflow-hidden rounded-xl shadow-xl border border-slate-200">
        {services.map((service, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={service.id}
              className={`
                transition-opacity duration-1000 ease-in-out
                ${isActive ? "opacity-100 z-20" : "opacity-0 z-10"}
                md:absolute md:inset-0
                ${isActive ? "block md:block" : "hidden md:hidden"}
              `}
            >

              {/* Slide container */}
              <div className="bg-white flex flex-col relative h-auto md:h-[380px]">
                <div className="grid grid-cols-1 md:grid-cols-2 flex-grow">
                  {/* Image first on mobile */}
                  <div className="relative h-56 md:h-full order-1 md:order-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/images/construction-placeholder.jpg";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col order-2 md:order-1">
                    <div className="flex-1">
                      <div className="flex items-start mb-3">
                        {service.icon && (
                          <div className="bg-primary-100 p-2 rounded-full text-primary-600 mr-3 flex-shrink-0">
                            {service.icon}
                          </div>
                        )}
                        <h3 className="text-lg md:text-xl font-bold text-primary-700 leading-tight">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 mb-3 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>

                      <div className="space-y-1 mb-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx}>
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile button */}
                    <div className="block md:hidden mt-4">
                      <button
                        onClick={() => handleGetQuote(service.serviceKey)}
                        className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition w-full"
                      >
                        Get Installation Quote
                      </button>
                    </div>
                  </div>
                </div>

                {/* Desktop floating button */}
                <div className="hidden md:block absolute bottom-4 left-4">
                  <button
                    onClick={() => handleGetQuote(service.serviceKey)}
                    className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition"
                  >
                    Get Installation Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-30"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-30"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

