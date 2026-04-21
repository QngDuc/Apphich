// Nhập tiện ích cấu hình ESLint
import { defineConfig, globalIgnores } from "eslint/config";
// Nhập quy tắc linting Core Web Vitals của Next.js
import nextVitals from "eslint-config-next/core-web-vitals";
// Nhập quy tắc linting TypeScript của Next.js
import nextTs from "eslint-config-next/typescript";

// Xác định và cấu hình quy tắc ESLint cho dự án
const eslintConfig = defineConfig([
  // Áp dụng quy tắc Core Web Vitals của Next.js (tiêu chuẩn hiệu suất và khả năng truy cập)
  ...nextVitals,
  // Áp dụng quy tắc TypeScript của Next.js (linting cụ thể cho TypeScript)
  ...nextTs,
  // Cấu hình những tệp/thư mục mà ESLint nên bỏ qua
  globalIgnores([
    // Những cái cần bỏ qua mặc định từ Next.js (loại trừ tạo tác xây dựng và tệp được tạo)
    ".next/**",      // Đầu ra xây dựng Next.js
    "out/**",       // Đầu ra xuất tĩnh
    "build/**",     // Tạo tác xây dựng
    "next-env.d.ts", // Các kiểu được tạo bởi Next.js
  ]),
]);

// Xuất cấu hình ESLint
export default eslintConfig;
