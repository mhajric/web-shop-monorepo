package com.example.shop.cart.converter;

import com.example.shop.cart.controller.response.CartItemResponse;
import com.example.shop.cart.controller.response.CartResponse;
import com.example.shop.cart.model.Cart;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class CartConverter {

    public CartResponse toResponse(Cart cart) {
        List<CartItemResponse> cartItemResponses = cart.getItems().stream().map(item -> CartItemResponse.builder()
                        .productId(item.getProductId())
                        .name(item.getName())
                        .imageUrl(item.getImageUrl())
                        .unitPrice(item.getUnitPrice())
                        .quantity(item.getQuantity())
                        .totalPrice(item.getTotalPrice())
                        .discountDescription(item.getDiscountDescription())
                        .build())
                .collect(Collectors.toList());
        return CartResponse.builder()
                .cartId(cart.getCartId())
                .items(cartItemResponses)
                .totalPrice(cart.getTotalPrice())
                .build();
    }
}
