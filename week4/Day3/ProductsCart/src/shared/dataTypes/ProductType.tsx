export type Data = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[]; //
};

export type ResponseData = {
  products: Data[];
  total: number;
  skip: number;
  limit: number;
};

export type ProductData = Omit<Data, "images">;
