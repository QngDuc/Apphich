import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";

// Mock data - Thay đổi thành data từ Supabase sau
const featuredMovie = {
  title: "Phim Lẻ Hay Nhất",
  description:
    "Một câu chuyện tuyệt vời về những người anh hùng phi thường với sức mạnh siêu nhiên.",
  imageUrl:
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&h=600&fit=crop",
};

const trendingMovies = [
  {
    id: "1",
    title: "Phim Hành Động",
    thumbnailUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=500&fit=crop",
    rating: 8.5,
  },
  {
    id: "2",
    title: "Phim Tình Cảm",
    thumbnailUrl: "https://images.unsplash.com/photo-1571847360313-9e85b2af4988?w=400&h=500&fit=crop",
    rating: 7.8,
  },
  {
    id: "3",
    title: "Phim Kinh Dị",
    thumbnailUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=500&fit=crop",
    rating: 7.5,
  },
  {
    id: "4",
    title: "Phim Hành Động 2",
    thumbnailUrl: "https://images.unsplash.com/photo-1516306684040-ccb5bb0873f1?w=400&h=500&fit=crop",
    rating: 8.2,
  },
  {
    id: "5",
    title: "Phim Hài",
    thumbnailUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    rating: 7.9,
  },
];

export default function BrowsePage() {
  return (
    <div className="min-h-screen w-full bg-netflix">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner
        title={featuredMovie.title}
        description={featuredMovie.description}
        imageUrl={featuredMovie.imageUrl}
        onPlay={() => console.log("Play clicked")}
        onMoreInfo={() => console.log("More info clicked")}
      />

      {/* Content Rows */}
      <div className="space-y-8 py-8">
        <MovieRow title="🔥 Đang Phổ Biến" movies={trendingMovies} />
        <MovieRow title="⭐ Xếp Hạng Cao" movies={trendingMovies} />
        <MovieRow title="🎬 Hành Động" movies={trendingMovies} />
        <MovieRow title="💕 Tình Cảm" movies={trendingMovies} />
      </div>

      {/* Footer Padding */}
      <div className="h-32" />
    </div>
  );
}
