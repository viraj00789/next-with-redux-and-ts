import { Product } from "../../../dataFile/dataFileTypes/productTypes";

export interface CartItem extends Product {
  qty: number;
}

export interface CartState {
  items: CartItem[];
}
