import { Product } from "@shared/dataFile/dataFileTypes/productTypes";

export interface AdminForm {
  name: string;
  category: string;
  price: string;
  unit: string;
  image: string;
  stock: string;
  description: string;
  qty?: string;
}

export interface AdminFormState {
  form: AdminForm;
  products: Product[];
}
