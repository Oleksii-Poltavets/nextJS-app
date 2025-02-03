import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: {
        absolute: 'Leopolt blog'
    }
}

export default function Blog() {
    return (
        <div>
            <p><Link href="/">Home</Link></p>
            <h1>Blog page</h1>
        </div>
    )
}
