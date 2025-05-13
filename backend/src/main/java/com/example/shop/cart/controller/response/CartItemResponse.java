package com.example.shop.cart.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class CartItemResponse {
    private UUID productId;           // Unique identifier for the product
    private String name;              // Name of the product
    private String imageUrl;
    private BigDecimal unitPrice;     // Price per unit of the product
    private int quantity;             // Quantity of the product
    private BigDecimal totalPrice;    // Total price of the product
    private String discountDescription; // Description of the discount applied
    private BigDecimal discountAmount; // Amount of the discount
}
