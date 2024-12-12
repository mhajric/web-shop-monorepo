package com.example.shop.cart.service;

import com.example.shop.cart.controller.response.CartResponse;
import com.example.shop.cart.converter.CartConverter;
import com.example.shop.cart.model.Cart;
import com.example.shop.cart.model.Discount;
import com.example.shop.product.controller.response.ProductResponse;
import com.example.shop.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Service
public class CartService {

    private final ProductService productService;

   private final DiscountService discountService;

   private final CartConverter cartConverter;

   public CartResponse addItemToCart(Cart cart, UUID productId,  int quantity) {
       final Discount discount = discountService.getDiscount(productId, quantity);
       ProductResponse productResponse = productService.getProduct(productId);
       cart.addItem(productId, productResponse.getName(), productResponse.getImageUrls().get(0), productResponse.getPrice(), quantity, discount);
       return cartConverter.toResponse(cart);
   }

   public CartResponse removeItemFromCart(Cart cart, UUID productId, int quantity) {
       cart.removeItem(productId, quantity);
       return cartConverter.toResponse(cart);
   }

    public CartResponse getCart(final Cart cart) {
       //TODO: validate cart
        return cartConverter.toResponse(cart);
    }

    public CartResponse clearCart(final Cart cart) {
       cart.clearCart();
        return cartConverter.toResponse(cart);
    }
}
