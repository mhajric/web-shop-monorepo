package com.example.shop.product.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class ProductResponse {

    private UUID id;
    private String name;
    private BigDecimal price;
    private String description;
    private List<String> images;
    private String category;
    private Set<String> tags;
}
