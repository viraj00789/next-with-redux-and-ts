"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addToCart, decreaseQty, increaseQty } from "../store/slices/admincartSlice";
import { useAppDispatch } from "../store/hooks";
import { Product } from "../dataFile/dataFileTypes/productTypes";
import { Button } from "./Button";

interface ProductCardProps {
    item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
    const dispatch = useAppDispatch();

    const cartItem = useSelector((state: RootState) =>
        state.admincart.items.find((i) => i.id === item.id)
    );

    return (
        <div className="border rounded-xl shadow hover:shadow-lg p-4 bg-black border-green-600">
            <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={100}
                className="object-cover w-full h-52 rounded-md"
                loading="lazy"
            />
            <div className="space-y-2.5 w-fit">
                <h2 className="text-xl font-semibold mt-3 text-white">
                    {item.name}
                </h2>
                <p className="text-white-600 bg-green-600 w-fit px-3 py-1 rounded-md">
                    {item.category}
                </p>
                <p className="text-yellow-600">{item.description}</p>
            </div>

            <div className="flex justify-between mt-3 items-center">
                <span className="text-green-700 font-bold text-lg">${item.price}</span>

                {/* Check if item exists in cart */}
                {cartItem && cartItem.qty > 0 ? (
                    <div className="flex items-center gap-3">
                        <Button
                            title="-"
                            buttonType="button"
                            onClick={() => dispatch(decreaseQty(item.id))}
                            className="px-3 py-1 bg-green-600 rounded-md hover:bg-green-600 cursor-pointer"
                        />

                        <span className="text-lg font-semibold text-green-700">
                            {cartItem.qty}
                        </span>

                        <Button
                            title="+"
                            buttonType="button"
                            onClick={() => dispatch(increaseQty(item.id))}
                            className="px-3 py-1 bg-green-600 rounded-md hover:bg-green-600 cursor-pointer"
                        />

                    </div>
                ) : (
                    <Button
                        title="Add"
                        buttonType="button"
                        onClick={() => dispatch(addToCart(item))}
                        className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-600 text-xl"
                    />
                )}
            </div>
        </div >
    );
}
