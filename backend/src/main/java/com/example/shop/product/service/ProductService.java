package com.example.shop.product.service;

import com.example.shop.product.controller.request.ProductRequest;
import com.example.shop.product.controller.response.ProductResponse;
import com.example.shop.product.converter.ProductConverter;
import com.example.shop.product.exception.ProductNotFoundException;
import com.example.shop.product.model.Product;
import com.example.shop.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;

    private final ProductConverter productConverter;

    public ProductResponse createProduct(ProductRequest request) {
        Product product = productConverter.fromRequest(request);
        productRepository.save(product);
        return productConverter.toResponse(product);
    }

    public ProductResponse getProduct(UUID id) {
        Product product = productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
        return productConverter.toResponse(product);
    }

    public ProductResponse updateProduct(UUID id, ProductRequest request) {
        Product product = productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
        product.setName(request.getName());
        product.setPrice(request.getPrice());
        product.setDescription(request.getDescription());
        product.setImages(request.getImages());
        productRepository.save(product);
        return productConverter.toResponse(product);
    }

    public void deleteProduct(UUID id) {
        Product product = productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
        productRepository.delete(product);
    }

    public Page<ProductResponse> getProducts(final Integer page, final Integer size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return productRepository.findAll(pageRequest).map(productConverter::toResponse);
    }

    public Page<ProductResponse> getProducts(final Integer page, final Integer size, final String sortBy, final String sortDirection) {
        Set<String> sortableColumns = Set.of("name", "price");
        Sort sort = Sort.unsorted();
        if (sortBy != null && sortableColumns.contains(sortBy) && sortDirection != null) {
            sort = Sort.by("ASC".equals(sortDirection) ? Sort.Direction.ASC : Sort.Direction.DESC, sortBy);
        }
        PageRequest pageRequest = PageRequest.of(page, size, sort);
        return productRepository.findAll(pageRequest).map(productConverter::toResponse);
    }
}
