import { Product } from "./dataFileTypes/productTypes";

export const products: Product[] = [
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    price: 2.5,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    stock: 120,
    description: "Fresh and crispy organic apples.",
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruit",
    price: 1.2,
    unit: "dozen",
    image:
      "https://images.unsplash.com/photo-1668762924684-a9753a0a887c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 200,
    description: "Sweet ripe bananas packed with energy.",
  },
  {
    id: 3,
    name: "Orange",
    category: "Fruit",
    price: 2.0,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JhbmdlfGVufDB8fDB8fHww",
    stock: 180,
    description: "Juicy oranges rich in vitamin C.",
  },
  {
    id: 4,
    name: "Grapes",
    category: "Fruit",
    price: 3.5,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1631299106224-aae61c217164?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JhcGVzfGVufDB8fDB8fHww",
    stock: 95,
    description: "Seedless green grapes with natural sweetness.",
  },
  {
    id: 5,
    name: "Pineapple",
    category: "Fruit",
    price: 2.8,
    unit: "piece",
    image:
      "https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGluZWFwcGxlfGVufDB8fDB8fHww",
    stock: 50,
    description: "Fresh tropical pineapple with rich flavor.",
  },
  {
    id: 6,
    name: "Mango",
    category: "Fruit",
    price: 4.5,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 80,
    description: "Premium sweet mangoes perfect for juice or dessert.",
  },
  {
    id: 7,
    name: "Papaya",
    category: "Fruit",
    price: 2.4,
    unit: "piece",
    image:
      "https://images.unsplash.com/photo-1623492229905-ebc1202e8904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFwYXlhfGVufDB8fDB8fHww",
    stock: 60,
    description: "Soft and sweet papayas rich in fiber.",
  },
  {
    id: 8,
    name: "Strawberry",
    category: "Fruit",
    price: 5.5,
    unit: "box",
    image:
      "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
    stock: 70,
    description: "Fresh red strawberries, perfect for desserts.",
  },
  {
    id: 9,
    name: "Watermelon",
    category: "Fruit",
    price: 3.0,
    unit: "piece",
    image:
      "https://images.unsplash.com/photo-1708982553355-794739c6693e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdhdGVybWVsb258ZW58MHx8MHx8fDA%3D",
    stock: 40,
    description: "Refreshing and hydrating watermelons.",
  },

  // ---------- VEGETABLES ----------
  {
    id: 11,
    name: "Carrot",
    category: "Vegetable",
    price: 1.0,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fycm90fGVufDB8fDB8fHww",
    stock: 150,
    description: "Crunchy orange carrots perfect for salads.",
  },
  {
    id: 12,
    name: "Tomato",
    category: "Vegetable",
    price: 1.8,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    stock: 130,
    description: "Farm-fresh red tomatoes.",
  },
  {
    id: 13,
    name: "Potato",
    category: "Vegetable",
    price: 1.2,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG90YXRvfGVufDB8fDB8fHww",
    stock: 250,
    description: "Organic potatoes ideal for cooking.",
  },
  {
    id: 14,
    name: "Onion",
    category: "Vegetable",
    price: 1.4,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1683355739329-cea18ba93f02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE9uaW9ufGVufDB8fDB8fHww",
    stock: 220,
    description: "Golden onions with strong flavor.",
  },
  {
    id: 15,
    name: "Cucumber",
    category: "Vegetable",
    price: 1.5,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
    stock: 110,
    description: "Crispy cucumbers perfect for salads.",
  },
  {
    id: 16,
    name: "Spinach",
    category: "Vegetable",
    price: 1.7,
    unit: "bunch",
    image:
      "https://images.unsplash.com/photo-1578283326173-fbb0f83b59b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
    stock: 90,
    description: "Leafy spinach high in iron.",
  },
  {
    id: 17,
    name: "Broccoli",
    category: "Vegetable",
    price: 2.2,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1587351177732-5b0739d1bd44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJyb2Njb2xpfGVufDB8fDB8fHww",
    stock: 85,
    description: "Fresh broccoli packed with nutrition.",
  },
  {
    id: 18,
    name: "Ginger",
    category: "Vegetable",
    price: 4.0,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    stock: 70,
    description: "Aromatic ginger root.",
  },
  {
    id: 19,
    name: "Garlic",
    category: "Vegetable",
    price: 3.5,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1615477550927-6ec8445fcfe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdhcmxpY3xlbnwwfHwwfHx8MA%3D%3D",
    stock: 100,
    description: "Fresh garlic cloves with strong flavor.",
  },
];
