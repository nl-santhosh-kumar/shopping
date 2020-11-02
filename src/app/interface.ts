export interface User {
  name: string;
  userId: string;
  password: string;
}
export interface UserLogin {
  userId: string;
  password: string;
}
export interface Category {
  cName: string;
}
export interface Product {
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  inventory: number;
  pName: string;
  rating: number;
  image: string;
}
export interface AppState {
  products: Product[];
  categories: Category[];
  total: number;
  userId: string;
  cart: Cart;
}
export interface Cart {
  userId: string;
  totalValue: number;
  product: CartProduct[];
}

export interface CartProduct {
  name: string;
  price: number;
  quantity: number;
}