"use client"

import { createProduct, FormState } from "../actions/products";
import { Submit } from "../components/Submit";
import { useActionState, useState } from "react";

export default function AddProductPage() {
    const initialState: FormState = {
        errors: {}
    }
    const [state, formAction] = useActionState(createProduct, initialState);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [descr, setDescr] = useState('');

    return (
        <form action={formAction} className="p-4 space-y-4 max-w-96 bg-white dark:bg-gray-900 rounded shadow-md">
            <div>
                <label className="block text-gray-700 dark:text-gray-200">
                    Title
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name="title"
                        className="block w-full p-2 mt-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter title"
                    />
                </label>
                {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
            </div>

            <div>
                <label className="block text-gray-700 dark:text-gray-200">
                    Price
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                        name="price"
                        className="block w-full p-2 mt-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter price"
                    />
                </label>
                {state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
            </div>

            <div>
                <label className="block text-gray-700 dark:text-gray-200">
                    Description
                    <textarea
                        value={descr}
                        onChange={(e) => setDescr(e.target.value)}
                        name="description"
                        className="block w-full p-2 mt-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter description"
                    />
                </label>
                {state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
            </div>

            <Submit />
        </form>
    )
}