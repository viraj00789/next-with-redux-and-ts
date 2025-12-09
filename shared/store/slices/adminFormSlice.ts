import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminForm, AdminFormState } from "./sliceTypes/adminFormTypes";
import { Product } from "../../dataFile/dataFileTypes/productTypes";
import { products } from "../../dataFile/fruitAndVegetables";
import { ws } from "../../../my-app-with-ts-admin/app/page";
const initialState: AdminFormState = {
  form: {
    name: "",
    category: "",
    price: "",
    unit: "",
    image: "",
    stock: "",
    description: "",
  },
  products: [...products],
};

const adminFormSlice = createSlice({
  name: "adminForm",
  initialState,
  reducers: {
    // Update a single field
    updateField(
      state,
      action: PayloadAction<{ field: keyof AdminForm; value: string }>
    ) {
      const { field, value } = action.payload;
      state.form[field] = value;
    },

    // Reset form
    resetForm(state) {
      state.form = initialState.form;
    },

    // Add product from form
    addProduct(state) {
      const { name, category, price, unit, image, stock, description } =
        state.form;

      // Prevent empty product from being added
      if (!name || !price || !image) {
        return;
      }

      const newId =
        state.products.length > 0
          ? state.products[state.products.length - 1].id + 1
          : 1;

      const newProduct: Product = {
        id: newId,
        name,
        category,
        price: Number(price),
        unit,
        image,
        stock: Number(stock),
        description,
        qty: 0,
      };

      state.products.unshift(newProduct);

      state.form = initialState.form;

      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(
          JSON.stringify({
            type: "addProduct",
            payload: newProduct,
          })
        );
      }
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addProductFromWS(state, action: PayloadAction<Product>) {
      state.products.unshift(action.payload);
    },
  },
});

export const {
  updateField,
  resetForm,
  addProduct,
  setProducts,
  addProductFromWS,
} = adminFormSlice.actions;

export default adminFormSlice.reducer;
