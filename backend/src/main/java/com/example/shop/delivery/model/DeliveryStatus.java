package com.example.shop.delivery.model;

public enum DeliveryStatus {
    PENDING,    // Delivery is yet to be dispatched
    IN_TRANSIT, // Delivery is on its way
    DELIVERED,  // Delivery has been completed
    RETURNED,    // Delivery has been returned
    CANCELLED,    // Delivery has been cancelled
    LOST         // Delivery has been lost
}
