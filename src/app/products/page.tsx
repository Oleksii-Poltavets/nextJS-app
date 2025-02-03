import Link from "next/link";

export default function Products() {
    const id = 111;
    return (
        <div>
            <h1>Products list</h1>
            <h2><Link href={`/products/1`}>Product 1</Link></h2>
            <h2><Link href={`/products/2`}>Product 2</Link></h2>
            <h2><Link href={`/products/3`} replace>Product 3</Link></h2>
            <h2><Link href={`/products/${id}`}>Product {id}</Link></h2>
        </div>
    )
}
