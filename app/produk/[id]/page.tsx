import ProductList from "@/data/product"; // Adjust path based on where you moved the file
import Image from "next/image";

interface PageProps {
  params: { id: string };
}


const Page = ({ params }: PageProps) => {
  const { id } = params;

  const product = ProductList.find((p) => p.id === parseInt(id));
  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>The product with ID {id} does not exist.</p>
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
          <Image
            key={img.id}
            src={img.src}
            alt={img.title}
            width={200}
            height={200}
            style={{ marginRight: "10px" }}
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
