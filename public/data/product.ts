// Kita menggunakan Typescript yang sangat ketat sehingga untuk Property, Tambahkan tanya "?" untuk prop opsional. Contoh format?: "String"
export interface ProductProps {
    id: number;
    author: string;
    title: string;
    price: number;
    kategori: string;
    deskripsi: string;
    discountValue?: number;
    discountPercentage?: number;
    gambar: { id: number; title: string; src: string }[];
    availableFormat?: string[];
  }
  
  const ProductList: ProductProps[] = [
    {
      id: 1,
      author: "Claudia Gray",
      gambar: [
        {
          id: 0,
          title: "Book Cover",
          src: "https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg",
        },
        {
          id: 1,
          title: "Book Cover 2",
          src: "https://images.pexels.com/photos/29575458/pexels-photo-29575458/free-photo-of-autumn-forest-reflection-in-bolu-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ],
      title: "Ten Thousand Skies Above You",
      price: 100000,
      kategori: "Fiksi",
      availableFormat: ["PDF", "EPUB", ".txt", "docx"],
      deskripsi:
        "<p>Step into a <strong>multiverse</strong> of endless possibilities with <em>Ten Thousand Skies Above You</em>, a gripping sequel in the Firebird series.</p> <p>As Marguerite struggles with love, betrayal, and the burden of saving her dimension, she embarks on a heart-pounding journey through parallel worlds. With each universe unveiling new challenges and truths, Marguerite faces a pivotal question: <u>can she rewrite destiny without losing herself?</u></p> <ul><li>Perfect for fans of sci-fi</li><li>Romance</li><li>Thrilling adventures</li></ul> <p>This book will keep you turning the pages late into the night.</p>",
      discountValue: 15000,
      discountPercentage: 15,
    },
    {
      id: 2,
      author: "John Doe",
      gambar: [
        {
          id: 0,
          title: "Book Cover",
          src: "https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg",
        },
        {
          id: 1,
          title: "Book Cover 2",
          src: "https://images.pexels.com/photos/12079147/pexels-photo-12079147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          title: "Book Cover 3",
          src: "https://images.pexels.com/photos/28943665/pexels-photo-28943665/free-photo-of-traditional-market-woman-in-vibrant-sari.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
      title: "Valll Push Test",
      price: 150000,
      kategori: "Non-Fiksi",
      availableFormat: ["PDF", "EPUB", ".txt", "docx"],
      deskripsi: "Hello World !",
      discountValue: 5000,
      discountPercentage: 15,
    },
    {
      id: 3,
      author: "John Wick",
      gambar: [
        {
          id: 0,
          title: "Book Cover 1",
          src: "https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg",
        },
        {
          id: 1,
          title: "Nature 2",
          src: "https://images.pexels.com/photos/29575461/pexels-photo-29575461/free-photo-of-autumn-reflections-at-yedigoller-national-park-lake.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ],
      title: "The Road Less Traveled",
      price: 80000,
      kategori: "Fiksi",
      availableFormat: ["PDF"],
      deskripsi: "Hello World !",
      discountValue: 0,
      discountPercentage: 0,
    },
    {
      id: 4,
      author: "John Wick",
      gambar: [
        {
          id: 0,
          title: "Book Cover",
          src: "https://images-na.ssl-images-amazon.com/images/I/7167iiDUeAL.jpg",
        },
      ],
      title: "Thinking, Fast and Slow",
      price: 180000,
      kategori: "Non-Fiksi",
      // availableFormat: ["PDF"],
      deskripsi: "Hello World !",
      discountValue: 8000,
      discountPercentage: 0,
    },
    {
      id: 5,
      author: "John Wick",
      gambar: [
        {
          id: 0,
          title: "Book Cover",
          src: "https://images-na.ssl-images-amazon.com/images/I/91M4E+SURUL.jpg",
        },
      ],
      title: "The Power of Habit",
      price: 250000,
      kategori: "Non-Fiksi",
      availableFormat: ["PDF"],
      deskripsi: "Hello World !",
      discountValue: 10000,
      discountPercentage: 10,
    },
    {
      id: 6,
      author: "John Wick",
      gambar: [
        {
          id: 0,
          title: "Book Cover",
          src: "https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX327_BO1,204,203,200_.jpg",
        },
      ],
      title: "The Alchemist",
      price: 90000,
      kategori: "Fiksi",
      availableFormat: ["PDF"],
      deskripsi: "Hello World !",
      discountValue: 2000,
      discountPercentage: 0,
    },
    {
      id: 7,
      author: "John Wick",
      gambar: [
        {
          id: 0,
          title: "Book Cover",
          src: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
        },
      ],
      title: "Atomic Habits",
      price: 120000,
      kategori: "Non-Fiksi",
      availableFormat: ["PDF"],
      deskripsi: "Hello World !",
      discountValue: 4000,
      discountPercentage: 0,
    },
    {
      id: 8,
      author: "John Wick",
      gambar: [
        {
          id: 0,
          title: "Book Cover",
          src: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
        },
      ],
      title: "Sapiens: A Brief History of Humankind",
      price: 280000,
      kategori: "Non-Fiksi",
      availableFormat: ["PDF"],
      deskripsi: "Hello World !",
      discountValue: 15000,
      discountPercentage: 0,
    },
    {
      id: 9,
      author: "John Wick",
      gambar: [
        {
          id: 0,
          title: "Book Cover",
          src: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
        },
      ],
      title: "The Catcher in the Rye",
      price: 95000,
      kategori: "Fiksi",
      availableFormat: ["PDF"],
      deskripsi: "Hello World !",
      discountValue: 5000,
      discountPercentage: 0,
    },
  ];
  
  export default ProductList;
  