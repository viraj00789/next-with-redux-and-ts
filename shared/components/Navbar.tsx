"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { logout } from "../store/slices/authSlice";
import { useAppDispatch } from "../store/hooks";
import { Button } from "./Button";

export default function Navbar({
    showCartAndLogin = true,
}) {

    const cart = useSelector((state: RootState) => state.admincart.items);
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="w-full bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md fixed top-0 z-10 mb-10">
                <Link href="https://next-with-ts-product.vercel.app" className="text-4xl font-bold">
                    FreshMarket
                </Link>

                <div className="flex gap-6 items-center">
                    {user?.email && (
                        <p className="text-white font-normal text-xl">{user?.email}</p>
                    )}
                    {!showCartAndLogin && <Link href="http://next-with-ts-admin.vercel.app" className="hover:text-yellow-300">
                        Admin
                    </Link>}
                    {showCartAndLogin && <Link href="https://next-with-ts-product.vercel.app/cart" className="hover:text-yellow-300">
                        Cart ({cart.length})
                    </Link>}

                    {showCartAndLogin ?
                        user ? (
                            <Button
                                onClick={() => dispatch(logout())}
                                className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-400 text-white"
                                buttonType="button"
                                title="Logout"
                            />

                        ) : (
                            <Link
                                href="/login"
                                className="bg-yellow-400 text-black px-4 py-1 rounded-lg hover:bg-yellow-300"
                            >
                                Login
                            </Link>
                        ) : null}
                </div>
            </div >
        </>
    );
}
