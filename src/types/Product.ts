// src/types/Product.ts
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
  }
  
  export interface ProductRow {
    id: number;
    unit: string;
    product: string;
    initial: number;
    entries: number;
    available: number;
    used: number;
    withdrawals: number;
    forSale: number;
    final: number;
    sold: number;
    pricePerUnit: number;
    cost: number;
  }
  