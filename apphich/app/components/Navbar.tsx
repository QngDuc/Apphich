"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-netflix/80 backdrop-blur-md shadow-netflix-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 transition hover:opacity-80">
            <span className="text-2xl font-bold text-netflix-red">Áp Phích</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/browse" className="text-netflix-gray-light transition hover:text-white">
              Trang chủ
            </Link>
            <Link href="/trending" className="text-netflix-gray-light transition hover:text-white">
              Phổ biến
            </Link>
            <Link href="/new" className="text-netflix-gray-light transition hover:text-white">
              Mới
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button title="Tìm kiếm" className="rounded-lg p-2 transition hover:bg-netflix-black-lighter">
              <svg
                className="h-5 w-5 text-netflix-gray-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-netflix-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-netflix-red-dark"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
