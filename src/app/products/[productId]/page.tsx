import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params: Promise<{ productId: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Iphone ${id}`)
        }, 100)
    })

    return {
        title: `Product ${title}`
    }
}

export default async function ProductPage({ params }: Props) {
    const id = (await params).productId;
    return (
        <div>
            <h1>Description of the product number {id}</h1>
            <p><Link href='/products'>Back to products list</Link></p>
        </div>
    )
}
