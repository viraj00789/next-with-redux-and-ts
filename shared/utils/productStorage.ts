const STORAGE_KEY = "shared_products";

export function loadProducts() {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveProducts(products: any[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

export function clearProducts() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
