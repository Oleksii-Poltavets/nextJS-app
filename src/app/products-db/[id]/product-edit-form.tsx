"use client"

import { editProduct, FormState } from "@/app/actions/products";
import { Submit } from "@/app/components/Submit";
import { Product } from "@/app/products-db/page";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function EditProductForm({ product }: { product: Product }) {
    const initialState: FormState = {
        errors: {}
    }

    const editProductWithId = editProduct.bind(null, product.id);
    const [state, formAction] = useActionState(editProductWithId, initialState);

    return (
        <>
            <form action={formAction} className="p-4 space-y-4 max-w-96 bg-white dark:bg-gray-900 rounded shadow-md">
                <div>
                    <label className="block text-gray-700 dark:text-gray-200">
                        Title
                        <input
                            type="text"
                            name="title"
                            className="block w-full p-2 mt-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            placeholder="Enter title"
                            defaultValue={product.title}
                        />
                    </label>
                    {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-200">
                        Price
                        <input
                            type="number"
                            name="price"
                            className="block w-full p-2 mt-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            placeholder="Enter price"
                            defaultValue={product.price}
                        />
                    </label>
                    {state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-200">
                        Description
                        <textarea
                            name="description"
                            className="block w-full p-2 mt-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            placeholder="Enter description"
                            defaultValue={product.description ?? ''}
                        />
                    </label>
                    {state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
                </div>

                <Submit />
            </form>
            <Link href={'/products-db'}>Back to products &gt;</Link >
        </>
    )
}