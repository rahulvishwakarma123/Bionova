import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ items, autoPlay = false, autoPlayInterval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(false);
  const [start, setStart] = useState(0);
  const [move, setMove] = useState(0);
  const timer = useRef();

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    if (autoPlay && !drag) {
      timer.current = setInterval(next, autoPlayInterval);
      return () => clearInterval(timer.current);
    }
  }, [autoPlay, autoPlayInterval, drag, index]);

  const startDrag = (e) => {
    setDrag(true);
    setStart(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const onDrag = (e) => {
    if (!drag) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setMove(x - start);
  };

  const endDrag = () => {
    if (!drag) return;
    if (move > 50) prev();
    else if (move < -50) next();
    setMove(0);
    setDrag(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(calc(-${index * 100}% + ${move}px))` }}
        onMouseDown={startDrag}
        onMouseUp={endDrag}
        onMouseMove={onDrag}
        onMouseLeave={endDrag}
        onTouchStart={startDrag}
        onTouchEnd={endDrag}
        onTouchMove={onDrag}
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-full select-none">
            {item.content}
          </div>
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2"
        onClick={prev}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2"
        onClick={next}
      >
        <ChevronRight />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-blue-600" : "w-2 bg-white/60"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Usage example:
export default function CarouselExample() {
  const items = [
    {
      id: 1,
      content: (
        <div className="flex h-[90vh] items-center justify-center bg-purple-600 text-3xl font-bold text-white">
          <img
            className="h-full w-full"
            src="images/slide1.jpg"
            alt="slide 1"
          />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex h-[90vh] items-center justify-center bg-blue-600 text-3xl font-bold text-white">
          <img
            className="h-full w-full"
            src="images/slide2.jpg"
            alt="slide 1"
          />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex h-[90vh] items-center justify-center bg-green-600 text-3xl font-bold text-white">
          <img
            className="h-full w-full"
            src="images/slide3.jpg"
            alt="slide 1"
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Carousel items={items} autoPlay={true} autoPlayInterval={4000} />
    </div>
  );
}
