package com.example.shop.delivery.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Delivery {
    private String deliveryMethod; // e.g., "Standard", "Express", "Overnight"
    private LocalDateTime initiatedDeliveryDate; // Time when the delivery was initiated
    private LocalDateTime estimatedDeliveryDate; // Estimated delivery time
    private String trackingNumber; // Tracking number for the delivery
    private DeliveryStatus status; // Status of the delivery
    private final List<DeliveryChange> deliveryHistory = new ArrayList<>(); // History of status changes

}
