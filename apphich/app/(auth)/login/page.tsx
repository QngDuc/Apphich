"use client";

// NHẬP CÁC THƯ VIỆN VÀ MODULE CẦN THIẾT
import { supabase } from "@/lib/supabase";
// Sử dụng useState để quản lý trạng thái email và mật khẩu của người dùng
import { useState } from "react";
// Sử dụng useRouter để điều hướng người dùng sau khi đăng nhập thành công
import { useRouter } from "next/navigation";

// Định nghĩa thành phần trang đăng nhập
export default function LoginPage() {
  // Khởi tạo trạng thái cho email và mật khẩu
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Khởi tạo trạng thái cho lỗi đăng nhập (nếu có)
  const [ error, setError] = useState<string | null>(null);
  
  // Khởi tạo trạng thái để theo dõi quá trình đăng nhập (đang tải hay không)
  const [loading,setLoading] = useState(false);

  // Sử dụng useRouter để điều hướng người dùng sau khi đăng nhập thành công
  const router = useRouter();

  // Hàm xử lý đăng ký
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    setLoading(true); // Bắt đầu quá trình đăng ký, đặt trạng thái loading thành true
    setError(null); // Đặt lỗi về null trước khi bắt đầu đăng ký
    
    const { error } = await supabase.auth.signUp({
        email,
        password,
    });

    //Kiểm tra nếu có lỗi xảy ra trong quá trình đăng ký
    if (error) {
        //Gửi thông báo lỗi cho người dùng nếu có lỗi xảy ra
        setError(error.message);
    }
    //Nếu không có lỗi, thông báo đăng ký thành công và yêu cầu người dùng kiểm tra email để xác nhận tài khoản
    else{
        //Cảnh báo người dùng rằng đăng ký thành công và yêu cầu họ kiểm tra email để xác nhận tài khoản
        alert("Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản.");
    }
    setLoading(false);
};
// Hàm xử lý đăng nhập
const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    setLoading(true); // Bắt đầu quá trình đăng nhập, đặt trạng thái loading thành true
    setError(null); // Đặt lỗi về null trước khi bắt đầu đăng nhập
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        setError(error.message);
    } else {
        router.push("/dashboard");
    }
    setLoading(false);
};

// Giao diện người dùng cho trang đăng nhập
return (
    // Container chính với chiều cao tối thiểu bằng chiều cao
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật Khẩu</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {loading ? "Đang đăng nhập..." : "Đăng Nhập"}
                </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
                Chưa có tài khoản?{" "}
                <button
                    onClick={handleSignUp}
                    disabled={loading}
                    className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Đăng Ký
                </button>   
            </p>
        </div>
    </div>
);
}

