package com.example.shop.order.model;

import java.math.BigDecimal;
import java.util.UUID;

public class OrderItem {
    private UUID productId;
    private String productName;
    private int quantity;
    private BigDecimal unitPrice;
    private BigDecimal discountAmount;

    private BigDecimal totalPrice;
}
