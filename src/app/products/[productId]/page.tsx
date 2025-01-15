export default function ProductPage({ params }: {
    params: {
        productId: string
    }
}) {

    return (
        <div>
            <h1>Description of the product number {params.productId}</h1>
        </div>
    )
}
