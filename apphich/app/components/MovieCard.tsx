"use client";

interface MovieCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  rating: number;
}

export default function MovieCard({
  id,
  title,
  thumbnailUrl,
  rating,
}: MovieCardProps) {
  return (
    <div className="group relative h-60 w-40 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg bg-netflix-black-lighter transition hover:z-50 hover:scale-110">
      {/* Image */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="h-full w-full object-cover transition group-hover:brightness-75"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 flex flex-col items-end justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition group-hover:opacity-100">
        {/* Title */}
        <div className="w-full p-4">
          <h3 className="line-clamp-2 text-sm font-bold text-white">{title}</h3>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4 fill-netflix-gold" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-semibold text-netflix-gold">{rating}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-md bg-netflix-red px-2 py-2 text-xs font-bold text-white transition hover:bg-netflix-red-dark">
              ▶ Phát
            </button>
            <button className="rounded-md border border-netflix-gray-light px-2 py-2 transition hover:border-white hover:bg-netflix-black-light">
              <svg className="h-4 w-4 text-netflix-gray-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
