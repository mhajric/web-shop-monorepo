export interface Product {
  id: string; // UUID
  productUrl: string; // SEO-friendly URL for each product
  name: string;
  price: number;
  discountedPrice?: number;
  promotionIds?: Set<string>;
  promotionDescription?: string; // e.g., "10% off" or "Buy one, get one free"
  currency: string;
  stockQuantity?: number;
  availableRegions?: string[];
  isAvailable?: boolean;
  description: string;
  imageUrls: string[];
  videoUrls: string[];
  category: string;
  productType?: string; // configurations of products (like "physical", "digital", "service", etc.)
  tags: Set<string>;
  brand?: string;
  model?: string;
  sku?: string;
  rating?: number;
  reviewCount?: number;
  weight?: number;
  length?: number;
  width?: number;
  height?: number;
  color?: string;
  packaging?: string;
  expirationDate?: string;
  soldCount?: number;
  wishlistCount?: number;
  customAttributes?: Record<string, string>;
  preferredLayout?: string;
}
