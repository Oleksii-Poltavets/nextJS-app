import React from 'react'

export default async function Reviews({ params }: {
    params: {
        productId: string
    }
}) {
    const { productId } = await params;

    return (
        <div>
            <h1>Reviews page for product {productId}</h1>
            <h2>Review 1</h2>
            <h2>Review 2</h2>
            <h2>Review 3</h2>
        </div>
    )
}
