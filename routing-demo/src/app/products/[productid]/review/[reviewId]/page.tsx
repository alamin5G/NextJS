export default async function ProductReview(
    {
        params,
    }: {
        params: Promise<{productid: string, reviewId: string}>;
    }) {
        const {productid, reviewId} = await params;

        return <h1>Hello Product {productid} Review {reviewId}! How do you do</h1>;

    }