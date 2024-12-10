package com.example.shop.delivery.model;

import java.time.LocalDateTime;

public class DeliveryChange {
    private LocalDateTime timestamp; // Time of the change
    private DeliveryStatus newStatus; // Updated status
    private String remarks; // Contextual remarks or comments
}
