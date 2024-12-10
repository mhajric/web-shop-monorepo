package com.example.shop.product.controller.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ProductRequest {

    private String name;

    private BigDecimal price;

    private String description;

    private List<String> images;

    private String category;

    private Set<String> tags;
}
