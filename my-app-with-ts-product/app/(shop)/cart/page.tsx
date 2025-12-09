"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@shared/components/Button";
import { RootState } from "@shared/store/store";
import { useAppDispatch } from "@shared/store/hooks";
import { clearCart, decreaseQty, increaseQty, removeItem } from "@shared/store/slices/admincartSlice";

export default function CartPage() {
    const cart = useSelector((state: RootState) => {
        return state.admincart.items;
    });

    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useAppDispatch();

    const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);


    const router = useRouter();

    const handleCheckout = () => {
        if (!user) {
            router.push("/login");
            return;
        }

        alert("Proceed to checkout...");
        dispatch(clearCart());
    };

    return (
        <div className="p-6 mt-16">
            <h1 className="text-xl font-bold mb-4">Your Cart</h1>

            {cart.length === 0 && <p>No items in cart</p>}


            <div className="space-y-4">
                {cart.map((item) => {
                    const { id, name, price, image, qty } = item;
                    return (
                        <div
                            key={id}
                            className="border p-4 rounded-xl shadow flex justify-between"
                        >
                            <div className="flex gap-5">
                                <Image
                                    src={image}
                                    alt={name}
                                    width={100}
                                    height={40}
                                    className="object-cover"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold">{name}</h2>
                                    <p className="text-green-600">Price: ${price}</p>
                                    <p className="font-semibold text-green-700">
                                        Per Total: ${(price * qty).toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <Button
                                    onClick={() => dispatch(decreaseQty(id))}
                                    title="-"
                                    buttonType="button"
                                    className="px-2 bg-green-600 hover:bg-green-800 rounded-lg"

                                />
                                <span>{qty}</span>
                                <Button
                                    title="+"
                                    buttonType="button"
                                    onClick={() => dispatch(increaseQty(id))}
                                    className="px-2 bg-green-600 hover:bg-green-800 rounded-lg"
                                />

                                <Button
                                    title="Remove"
                                    buttonType="button"
                                    onClick={() => dispatch(removeItem(id))}
                                    className="px-3 bg-red-500 hover:bg-red-800 text-white rounded "
                                />

                            </div>
                        </div>
                    )
                })}
            </div>

            {
                cart.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
                        <Button
                            title="Checkout"
                            buttonType="button"
                            onClick={handleCheckout}
                            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg  hover:bg-green-700"
                        />
                    </div>
                )
            }
        </div >
    );
}
