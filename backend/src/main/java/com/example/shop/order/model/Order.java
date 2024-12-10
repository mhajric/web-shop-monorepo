package com.example.shop.order.model;

import com.example.shop.customer.model.Address;
import com.example.shop.delivery.model.Delivery;
import org.hibernate.validator.constraints.UUID;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Order {
    private UUID id; // Unique identifier for the order
    private LocalDateTime createdAt; // Time when the order was created
    private UUID customerId; // Reference to the customer placing the order
    private final List<OrderItem> items = new ArrayList<>(); // List of items in the order
    private BigDecimal totalAmount; // Total cost of the order
    private BigDecimal discountAmount; // Total discount applied
    private BigDecimal finalAmount; // Final amount after discounts
    private String currency; // Currency code, e.g., "USD"
    private String paymentMethod; // Payment method used for the order
    private OrderStatus status; // Current status of the order
    private Address shippingAddress; // Shipping address for the order
    private Address billingAddress; // Billing address for the order
    private Delivery deliveryDetails; // Delivery details for the order
    private LocalDateTime updatedAt; // Last update time for the order
}
