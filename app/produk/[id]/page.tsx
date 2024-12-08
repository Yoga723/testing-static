// import { FC } from "react";
import ProductList from "@/public/data/product"; // Adjust the path if necessary
// import { ProductProps } from "@/public/data/product";

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  // Find the product by ID
  const product = ProductList.find((p) => p.id === parseInt(params.toString()));

  // Handle case when the product is not found
  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>The product with ID {params.toString()} does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Author: {product.author}</p>
      <p>Category: {product.kategori}</p>
      <p>Price: {product.price}</p>
      <p>
        Discount: {product.discountValue} ({product.discountPercentage}%)
      </p>
      <p dangerouslySetInnerHTML={{ __html: product.deskripsi }} />
      <div>
        <h3>Images:</h3>
        {product.gambar.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.title}
            style={{ width: "200px", marginRight: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

// Generate static paths based on the product data
export async function generateStaticParams() {
  return ProductList.map((product) => ({
    id: product.id.toString(),
  }));
}

export default Page;
