"use client";

import { CartProvider } from "@/contexts/cartContext";


export function Providers({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
