"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "@shared/store/hooks";
import { login } from "@shared/store/slices/authSlice";
import { Button } from "@shared/components/Button";


export default function LoginPage() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const user = useSelector((state: RootState) => {
        return state.auth.user;
    });
    console.log("🚀 ~ LoginPage ~ user:", user);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (user) router.push("/");
    }, [user]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ name: "User", email: form.email }));

        // router.push("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg p-8 rounded-xl w-96"
            >
                <h2 className="text-2xl font-bold mb-5 text-center text-green-500">
                    Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-green-500 p-2 rounded mb-3 text-black placeholder:text-gray-500"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded mb-3 text-black border-green-500 placeholder:text-gray-500"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <Button
                    buttonType="submit"
                    className="w-full py-2"
                    title="login"
                />
            </form>
        </div>
    );
}
