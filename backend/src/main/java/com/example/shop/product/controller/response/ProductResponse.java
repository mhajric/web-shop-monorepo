package com.example.shop.product.controller.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonSerialize
public class ProductResponse {
    private UUID id;
    private String productUrl; // SEO-friendly URL for each product
    private String name;
    private BigDecimal price;
    private BigDecimal discountedPrice;
    private Set<String> promotionIds;
    private String promotionDescription; // e.g., "10% off" or "Buy one, get one free"
    private String currency;
    private Integer stockQuantity;
    private List<String> availableRegions;
    private Boolean isAvailable;
    private String description;
    private List<String> imageUrls;
    private List<String> videoUrls;
    private String category;
    private String productType; // configurations of products (like "physical", "digital", "service", etc.).
    private Set<String> tags;
    private String brand;
    private String model;
    private String sku;
    private BigDecimal rating;
    private Integer reviewCount;
    private BigDecimal weight;
    private BigDecimal length;
    private BigDecimal width;
    private BigDecimal height;
    private String packaging;
    private String color;
    private LocalDate expirationDate;
    private Integer soldCount;
    private Integer wishlistCount;
    private Map<String, String> customAttributes;
    private String preferredLayout;
}
