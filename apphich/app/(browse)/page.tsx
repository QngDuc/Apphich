import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import { supabase } from "@/lib/supabase";
import type { Movie } from "@/types/movie";

const defaultHero = {
  title: "Áp Phích - Phim Hot Hôm Nay",
  description:
    "Khám phá danh sách phim được yêu thích, cập nhật liên tục với nội dung chất lượng.",
  imageUrl:
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=1200&h=600&fit=crop",
};

type SupabaseMovie = {
  id: string;
  title: string | null;
  description: string | null;
  thumbnail_url: string | null;
  video_url: string | null;
  category: string | null;
  rating: number | null;
};

async function getMovies() {
  const { data, error } = await supabase
    .from("movies")
    .select("id, title, description, thumbnail_url, video_url, category, rating")
    .order("rating", { ascending: false });

  if (error) {
    return { movies: [] as Movie[], error };
  }

  const movies: Movie[] = (data ?? []).map((movie: SupabaseMovie) => ({
    id: movie.id,
    title: movie.title ?? "Không tên",
    description: movie.description ?? "",
    thumbnailUrl: movie.thumbnail_url ?? "",
    videoUrl: movie.video_url ?? "",
    category: movie.category ?? "Khác",
    rating: movie.rating ?? 0,
  }));

  return { movies, error: null };
}

export default async function BrowsePage() {
  const { movies, error } = await getMovies();
  const heroData = movies[0]
    ? {
        title: movies[0].title,
        description: movies[0].description ?? defaultHero.description,
        imageUrl: movies[0].thumbnailUrl,
      }
    : defaultHero;

  const categories = Array.from(
    new Set(movies.map((movie) => movie.category))
  ).slice(0, 4);

  return (
    <div className="min-h-screen w-full bg-netflix">
      <Navbar />

      <HeroBanner
        title={heroData.title}
        description={heroData.description}
        imageUrl={heroData.imageUrl}
        onPlay={() => console.log("Play clicked")}
        onMoreInfo={() => console.log("More info clicked")}
      />

      <div className="space-y-8 py-8">
        {error && (
          <div className="mx-auto max-w-6xl px-8 text-sm text-red-300 sm:px-12 lg:px-16">
            Có lỗi khi tải dữ liệu phim. Vui lòng kiểm tra cấu hình Supabase hoặc dữ liệu trong bảng `movies`.
          </div>
        )}

        {movies.length === 0 ? (
          <div className="mx-auto max-w-6xl px-8 text-sm text-netflix-gray-light sm:px-12 lg:px-16">
            Không tìm thấy phim nào. Hãy đảm bảo bảng `movies` trong Supabase có dữ liệu và biến môi trường đã được cấu hình đúng.
          </div>
        ) : (
          categories.map((category) => (
            <MovieRow
              key={category}
              title={category}
              movies={movies.filter((movie) => movie.category === category)}
            />
          ))
        )}
      </div>

      <div className="h-32" />
    </div>
  );
}
