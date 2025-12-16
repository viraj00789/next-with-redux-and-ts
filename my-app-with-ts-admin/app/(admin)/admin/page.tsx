"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@shared/store/store";
import { updateField, addProduct, resetForm } from "@shared/store/slices/adminFormSlice";
import { Button } from "@shared/components/Button";

export default function AdminProductForm() {
    const dispatch = useDispatch();

    const { form, products } = useSelector((state: RootState) => state.adminForm);


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        dispatch(updateField({ field: name as keyof typeof form, value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addProduct());

    };

    return (
        <div className="max-w-5xl mx-auto border border-green-500 p-6 rounded-xl shadow-lg mt-20">
            <h2 className="text-2xl font-bold mb-6 text-green-600">Add New Product</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* GRID OF 3 COLUMNS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Product Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter Product Name"
                            className="border p-2 w-full rounded  border-gray-500 placeholder:text-gray-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Category</label>
                        <input
                            required
                            type="text"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            placeholder="Enter Category"
                            className="border p-2 w-full rounded  border-gray-500 placeholder:text-gray-500"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Price</label>
                        <input
                            required
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            placeholder="Enter Price"
                            className="border p-2 w-full rounded  border-gray-500 placeholder:text-gray-500"
                        />
                    </div>

                    {/* Unit */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Unit</label>
                        <input
                            required
                            type="text"
                            name="unit"
                            placeholder="kg, pieces, etc"
                            value={form.unit}
                            onChange={handleChange}
                            className="border p-2 w-full rounded  border-gray-500 placeholder:text-gray-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Image URL</label>
                        <input
                            required
                            type="text"
                            name="image"
                            value={form.image}
                            onChange={handleChange}
                            placeholder="Enter Image URL"
                            className="border p-2 w-full rounded  border-gray-500 placeholder:text-gray-500"
                        />
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">stock</label>
                        <input
                            required
                            type="number"
                            name="stock"
                            value={form.stock}
                            onChange={handleChange}
                            placeholder="Enter stock"
                            className="border p-2 w-full rounded  border-gray-500 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Full Width Description */}
                <div>
                    <label className="block text-sm font-semibold mb-1">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="border p-2 w-full rounded  border-gray-500 placeholder:text-gray-500"
                        rows={3}
                        placeholder="Enter Description"
                        required
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <Button
                        buttonType="submit"
                        title="Add Product"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    />

                    <Button
                        buttonType="button"
                        onClick={() => dispatch(resetForm())}
                        title="Reset"
                        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                    />
                </div>
            </form>

            {/* Product List */}
            <h3 className="text-xl font-bold mt-8 mb-3 text-green-600">
                Products ({products.length})
            </h3>

            <ul className="space-y-2">
                {products.map((p) => (
                    <li key={p.id} className="border p-3 rounded shadow">
                        <strong>{p.name}</strong> — ${p.price} ({p.unit})
                    </li>
                ))}
            </ul>
        </div>
    );
}
