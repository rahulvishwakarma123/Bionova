import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "images/slide1.jpg",
    title: "Pioneers Of Solar And Renewable Energy",
    desc: "Empowering the world with clean and efficient energy solutions.",
    btnText: "Read More",
  },
  {
    id: 2,
    image: "images/slide2.jpg",
    title: "Building A Greener Tomorrow",
    desc: "Harnessing solar power to create a sustainable future.",
    btnText: "Explore",
  },
  {
    id: 3,
    image: "images/slide3.jpg",
    title: "Innovative Energy Solutions",
    desc: "Leading the transition towards renewable energy.",
    btnText: "Get Started",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="select-none relative w-full h-[90vh] overflow-hidden max-lg:h-[19vh]">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-center max-sm:bg-contain"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20"
      >
        <FaChevronRight />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={` cursor-pointer w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-purple-500 scale-110" : "bg-white/95"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
