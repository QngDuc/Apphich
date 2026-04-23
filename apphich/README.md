# Áp Phích - Netflix Clone

Ứng dụng này là một dự án Next.js với giao diện kiểu Netflix, sử dụng Tailwind CSS và Supabase để lưu dữ liệu phim và xác thực.

## Chạy ứng dụng

1. Cài đặt phụ thuộc:

```bash
npm install
```

2. Tạo file môi trường:

```bash
cp .env.local.example .env.local
```

3. Điền giá trị Supabase vào `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

4. Khởi động ứng dụng:

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Luồng chính

- `/` sẽ tự động chuyển hướng đến `/browse`
- `/auth/login` là trang đăng nhập/đăng ký
- `/browse` là trang chính sau khi đăng nhập

## Những gì đã cập nhật

- Thêm `app/page.tsx` để tránh thiếu route gốc
- Thêm `middleware.ts` để bảo vệ route `/browse`, `/watch` và `/my-list`
- Cập nhật `app/(browse)/page.tsx` để lấy dữ liệu phim từ Supabase thay vì dùng mock
- Thêm nút `Đăng xuất` trong `Navbar`
- Bổ sung `tailwind.config.ts` để hỗ trợ các lớp gradient và `scrollbar-hide`
- Thêm `.env.local.example` và kiểm tra biến môi trường Supabase trong `src/lib/supabase.ts`

## Triển khai

Dùng Vercel hoặc nền tảng hỗ trợ Next.js. Nhớ cấu hình biến môi trường trên Vercel giống như `.env.local`.
