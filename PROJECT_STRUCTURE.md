# Cấu trúc dự án Apphich sau khi tổ chức lại (2026-04-21)

## 📁 Cây thư mục

```
d:\Apphich/
├── apphich/                          ← Main Next.js application
│   ├── app/
│   │   ├── (auth)/                   ← Auth-related pages
│   │   │   └── login/
│   │   │       └── page.tsx
│   │   ├── (browse)/                 ← Browse/Home pages
│   │   ├── components/               ← Reusable UI components
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── src/
│   │   ├── lib/                      ← Utility libraries
│   │   │   └── supabase.ts           ← Supabase client config
│   │   ├── types/                    ← TypeScript type definitions
│   │   └── hooks/                    ← Custom React hooks
│   ├── public/                       ← Static assets
│   ├── node_modules/                 ← Dependencies (auto-installed)
│   ├── package.json                  ← Project dependencies
│   ├── tsconfig.json                 ← TypeScript config
│   ├── next.config.ts                ← Next.js config
│   ├── tailwind.config.ts            ← Tailwind CSS config
│   ├── postcss.config.mjs
│   ├── eslint.config.mjs
│   └── README.md
├── TODO                              ← Project todo list
├── .gitignore                        ← Git ignore file
└── package-lock.json (nếu dùng npm)
```

## 🗑️ File/Folder được xóa

- ❌ Root `package.json` (dependencies không cần thiết)
- ❌ Root `package-lock.json`
- ❌ Root `node_modules/` 
- ❌ `apphich/src/node_modules/`
- ❌ `app/components/` (empty folder)
- ❌ `app/utils/` (empty folder)
- ❌ `src/types/` (empty folder - đã tạo lại)

## 📝 Folder được tạo/di chuyển

- ✅ `app/(auth)/` - Nhóm các trang liên quan auth
- ✅ `app/(browse)/` - Nhóm các trang browse/home
- ✅ `app/components/` - Tạo lại cho UI components
- ✅ `src/types/` - Tạo lại cho type definitions
- ✅ `src/hooks/` - Custom React hooks
- ✅ `.gitignore` - Tập tin ignore

## 🎯 Hướng phát triển tiếp theo

1. **app/(auth)/login/** - Tạo form đăng nhập
2. **app/components/** - Tạo components: Navbar, HeroBanner, MovieCard, Row
3. **src/types/** - Định nghĩa types: `Movie`, `User`, `WatchList`
4. **src/hooks/** - Custom hooks: `useAuth()`, `useMovies()`, `useWatchList()`
5. **app/(browse)/** - Tạo trang browse/home chính

## ✨ Lợi ích cấu trúc mới

- 🧹 **Clean**: Loại bỏ file rác, folder trống
- 📊 **Organized**: Phân loại rõ ràng theo chức năng
- 🚀 **Scalable**: Dễ mở rộng khi project lớn
- 🎯 **Convention**: Tuân theo Next.js 13+ best practices
