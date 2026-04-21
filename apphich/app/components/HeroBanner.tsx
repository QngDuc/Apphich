"use client";

interface HeroBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  onPlay: () => void;
  onMoreInfo: () => void;
}

export default function HeroBanner({
  title,
  description,
  imageUrl,
  onPlay,
  onMoreInfo,
}: HeroBannerProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-netflix-overlay" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-start justify-end px-8 py-20 sm:px-12 sm:py-24 lg:px-16">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mb-8 line-clamp-3 text-sm text-netflix-gray-light sm:text-base lg:text-lg">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            {/* Play Button */}
            <button
              onClick={onPlay}
              className="flex items-center gap-2 rounded-lg bg-netflix-red px-8 py-3 font-bold text-white transition hover:bg-netflix-red-dark"
            >
              <svg className="h-5 w-5 fill-white" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Phát
            </button>

            {/* More Info Button */}
            <button
              onClick={onMoreInfo}
              className="flex items-center gap-2 rounded-lg bg-netflix-gray-dark px-8 py-3 font-bold text-white transition hover:bg-netflix-gray-medium"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
