import React from 'react';
import { notFound } from 'next/navigation';

export default async function SpecificReview({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {

    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 1000) {
        notFound();
    } else {
        return (
            <div>
                <h1>Review {reviewId} for product {productId}</h1>
            </div>
        )
    }
}
