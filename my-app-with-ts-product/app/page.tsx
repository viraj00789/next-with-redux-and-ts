"use client";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "@shared/components/ProductCard";
import { RootState } from "@shared/store/store";
import { connectWS } from "@shared/websocket/ws-client";
import { useEffect } from "react";
import { listenWS } from "@shared/websocket/ws-event";
import { addProductFromWS } from "@shared/store/slices/adminFormSlice";

export let ws: WebSocket | null = null;

export default function Page() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.adminForm.products);

  useEffect(() => {
    ws = connectWS();
  }, []);

  useEffect(() => {
    listenWS((msg) => {
      if (msg.type === "addProduct") {
        dispatch(addProductFromWS(msg.payload));
      }
    });
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
