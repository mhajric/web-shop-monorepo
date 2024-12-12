package com.example.shop.cart.controller.response;

import com.example.shop.cart.model.CartItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class CartResponse {
    private UUID cartId;
    private List<CartItemResponse> items = new ArrayList<>();
    private BigDecimal totalPrice;
}
