import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-netflix/80 backdrop-blur-md shadow-netflix-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition hover:opacity-80">
            <span className="text-2xl font-bold text-netflix-red">Áp Phích</span>
          </Link>

          {/* Navigation Links */}
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

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
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

            {/* Profile Button */}
            <button title="Hồ sơ" className="rounded-lg p-2 transition hover:bg-netflix-black-lighter">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
