package com.example.shop.product.converter;

import com.example.shop.product.controller.request.ProductRequest;
import com.example.shop.product.controller.response.ProductResponse;
import com.example.shop.product.model.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductConverter {

    public ProductResponse toResponse(Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .price(product.getPrice())
                .description(product.getDescription())
                .imageUrls(product.getImages())
                .category(product.getCategory())
                .tags(product.getTags())
                .build();
    }

    public Product fromRequest(ProductRequest request) {
        Product product = new Product();
        product.setName(request.getName());
        product.setPrice(request.getPrice());
        product.setDescription(request.getDescription());
        product.setImages(request.getImages());
        product.setCategory(request.getCategory());
        product.setTags(request.getTags());
        return product;
    }
}
