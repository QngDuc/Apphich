//NHẬP KIỂU NGƯỜI DÙNG TỪ THƯ VIỆN SUPABASE
import {createClient} from '@supabase/supabase-js';

// LẤY URL VÀ ANON KEY TỪ BIẾN MÔI TRƯỜNG ĐƯỢC ĐỊNH NGHĨA TRONG .ENV.LOCAL
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// TẠO VÀ XUẤT ĐỐI TƯỢNG SUPABASE CLIENT SỬ DỤNG URL VÀ ANON KEY
export const supabase = createClient(supabaseURL, supabaseAnonKey);