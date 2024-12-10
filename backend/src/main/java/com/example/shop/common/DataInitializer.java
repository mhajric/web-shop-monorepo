package com.example.shop.common;

import com.example.shop.product.model.Product;
import com.example.shop.product.repository.ProductRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;


@Slf4j
@RequiredArgsConstructor
@Component
public class DataInitializer {

    private final ProductRepository productRepository;

    @PostConstruct
    public void initialize() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        List<Product> products = objectMapper.readValue(
                new ClassPathResource("/data/products.json").getFile(),
                new TypeReference<>() {
                });
        productRepository.saveAll(products);
    }
}
