export interface CartItem {
  productId: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  discountDescription: string;
  discountAmount: number;
}

export interface Cart {
  cartId: string;
  items: CartItem[];
  totalPrice: number;
}
