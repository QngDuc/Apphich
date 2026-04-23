export interface Movie {
  id: string;
  title: string;
  description?: string | null;
  thumbnailUrl: string;
  videoUrl?: string | null;
  category: string;
  rating: number;
}
