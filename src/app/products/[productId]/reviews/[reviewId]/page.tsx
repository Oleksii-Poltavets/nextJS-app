import React from 'react';
import { notFound } from 'next/navigation';

export default function SpecificReview({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    } else {
        return (
            <div>
                <h1>Review {params.reviewId} for product {params.productId}</h1>
            </div>
        )
    }
}
