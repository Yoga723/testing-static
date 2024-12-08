// import Image from "next/image";
import ProductList from "@/public/data/product";
import Link from "next/link";

export default function Home() {
  const products = ProductList;

  if (!products) {
    return (
      <div>
        <h2>Error data not found</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {products.map((produk, index) => (
          <div key={index}>
            <Link href={`/produk/${produk.id}`}>
              {" "}
              <h4>{produk.title}</h4>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
