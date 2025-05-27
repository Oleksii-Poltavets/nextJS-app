import { getProducts } from "@/prisma-db";
import Link from "next/link";
import { removeProduct } from "../actions/products";

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string | null
}

export default async function ProductsDBPage() {
    const products: Product[] = await getProducts();

    return (
        <>
            <ul className="space-y-4 p-4">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        <h2 className="text-xl font-semibold">
                            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
                        </h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium">${product.price}</p>
                        <form action={removeProduct.bind(null, product.id)}>
                            <button className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-sm">
                                Remove
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
            <Link href={'/products-db-create'} className="px-4 py-1.5 text-sm text-white bg-green-600 rounded hover:bg-green-700 transition">
                Create Product
            </Link>
        </>
    )
}