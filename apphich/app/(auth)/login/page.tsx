"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert("Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản.");
      setEmail("");
      setPassword("");
    }
    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/browse");
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (isSignUp) {
      handleSignUp(e);
    } else {
      handleSignIn(e);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-netflix">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-netflix-red/20 to-netflix-black opacity-80" />
      {/* Main container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-netflix-red">Áp Phích</h1>
            <p className="mt-2 text-sm text-netflix-gray-medium">
              Xem phim miễn phí - Make It Free
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-lg bg-black/70 px-8 py-10 shadow-netflix-xl backdrop-blur-md">
            <h2 className="mb-8 text-2xl font-bold text-white">
              {isSignUp ? "Đăng Ký" : "Đăng Nhập"}
            </h2>

            {/* Error Message */}
            {error && (
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-500/20 px-4 py-3 text-red-300">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-netflix-gray-light"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="mt-2 w-full rounded-lg bg-netflix-black-lighter px-4 py-3 text-white placeholder-netflix-gray-dark transition focus:outline-none focus:ring-2 focus:ring-netflix-red"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-netflix-gray-light"
                >
                  Mật Khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-lg bg-netflix-black-lighter px-4 py-3 text-white placeholder-netflix-gray-dark transition focus:outline-none focus:ring-2 focus:ring-netflix-red"
                  required
                />
              </div>

              {/* Primary Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-lg bg-netflix-red px-6 py-3 font-semibold text-white transition hover:bg-netflix-red-dark disabled:bg-netflix-gray-dark disabled:text-netflix-gray-medium"
              >
                {loading ? "Đang xử lý..." : isSignUp ? "Đăng Ký" : "Đăng Nhập"}
              </button>
            </form>

            {/* Toggle Sign Up / Sign In */}
            <div className="mt-6 text-center text-sm text-netflix-gray-medium">
              {isSignUp ? "Đã có tài khoản? " : "Chưa có tài khoản? "}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError(null);
                }}
                className="font-semibold text-white transition hover:text-netflix-red"
              >
                {isSignUp ? "Đăng Nhập" : "Đăng Ký"}
              </button>
            </div>

            {/* Demo Credentials */}
            {!isSignUp && (
              <div className="mt-6 border-t border-netflix-black-lighter pt-6">
                <p className="mb-3 text-xs text-netflix-gray-medium">
                  Demo tài khoản (tuỳ chọn):
                </p>
                <div className="space-y-2 rounded-lg bg-netflix-black-light px-3 py-2">
                  <p className="text-xs text-netflix-gray-light">
                    Email: <span className="font-mono">demo@example.com</span>
                  </p>
                  <p className="text-xs text-netflix-gray-light">
                    Password: <span className="font-mono">demo123456</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-netflix-gray-medium">
            <p>© 2024 Áp Phích - Make It Free</p>
          </div>
        </div>
      </div>
    </div>
  );
}

