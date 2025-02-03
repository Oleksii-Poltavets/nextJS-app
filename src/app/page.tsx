import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Home Page!</h1>
            <p><Link href="/blog">Blog</Link></p>
            <p><Link href="/products">Products</Link></p>
        </div>
    )
}
