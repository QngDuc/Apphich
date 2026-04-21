"use client";

import { useRef } from "react";
import MovieCard from "./MovieCard";

interface MovieRowProps {
  title: string;
  movies: Array<{
    id: string;
    title: string;
    thumbnailUrl: string;
    rating: number;
  }>;
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4 px-8 sm:px-12 lg:px-16">
      {/* Title */}
      <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>

      {/* Row Container */}
      <div className="group relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          title="Cuộn sang trái"
          className="absolute -left-12 top-1/2 z-40 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 transition hover:bg-black/75 group-hover:flex"
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Movie Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              thumbnailUrl={movie.thumbnailUrl}
              rating={movie.rating}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          title="Cuộn sang phải"
          className="absolute -right-12 top-1/2 z-40 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 transition hover:bg-black/75 group-hover:flex"
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
