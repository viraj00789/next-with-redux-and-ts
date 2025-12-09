"use client";
import { useSelector } from "react-redux";
import ProductCard from "@shared/components/ProductCard";
import { RootState } from "@shared/store/store";


export default function Page() {
  const selector = useSelector((state: RootState) => state.auth);
  const products = useSelector((state: RootState) => state.adminForm.products
  );

  return (
    <>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
