// src/types.ts

export interface User {
    id: number;
    username: string;
    email: string;
    // Add any other fields you need for the User
  }
  
  export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image?: string; // Add this line if the image property is optional
  }
  
 // types.ts or a similar file
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

  
  export interface RootState {
    user: UserState;
    products: ProductsState;
        cart: CartState;
  }
  
  interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
  }
  interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
  }
  interface CartState {
    cartItems: CartItem[];
  }
  
  