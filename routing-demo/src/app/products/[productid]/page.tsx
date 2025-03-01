export default async function ProductDetails(
    {
        params,
    }:{
    params: Promise<{productid: string}>;
}) {
    const productId = (await params).productid;
    return <h1>Hello Product {productId}! How do you do</h1>;
}