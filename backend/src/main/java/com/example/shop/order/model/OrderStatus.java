package com.example.shop.order.model;

public enum OrderStatus {
    PENDING,    // Order created but not processed
    PROCESSING, // Order is being prepared
    SHIPPED,    // Order shipped to the customer
    DELIVERED,  // Order delivered to the customer
    CANCELED    // Order canceled
}