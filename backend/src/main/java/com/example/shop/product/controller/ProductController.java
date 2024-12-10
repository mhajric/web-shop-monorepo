package com.example.shop.product.controller;


import com.example.shop.product.controller.request.ProductRequest;
import com.example.shop.product.controller.response.ProductResponse;
import com.example.shop.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    @PostMapping
    public ResponseEntity<ProductResponse> createProduct(@RequestBody ProductRequest request) {
        return ResponseEntity.ok(productService.createProduct(request));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<ProductResponse> getProduct(@PathVariable UUID id) {
        return ResponseEntity.ok(productService.getProduct(id));
    }

    @GetMapping
    public ResponseEntity<Page<ProductResponse>> getProducts(@RequestParam( defaultValue = "0") Integer page,
                                                             @RequestParam(defaultValue = "10") Integer size,
                                                             @RequestParam(required = false) String sortBy,
                                                             @RequestParam(defaultValue = "asc") String sortDirection) {
        return ResponseEntity.ok(productService.getProducts(page, size, sortBy, sortDirection));
    }
}
