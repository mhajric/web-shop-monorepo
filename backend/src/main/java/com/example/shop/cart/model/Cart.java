package com.example.shop.cart.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Cart  implements Serializable {
    private UUID cartId = UUID.randomUUID();                 // Unique identifier for the cart
    private List<CartItem> items = new ArrayList<>();        // List of cart items
    private BigDecimal totalPrice = BigDecimal.ZERO;       // Total price of all items in the cart

    public void addItem(final CartItem cartItem) {
        items.add(cartItem);
        totalPrice = totalPrice.add(cartItem.getTotalPrice());
    }

    public void removeItem(final UUID productId, final int quantity) {
        items.stream().filter(item -> item.getProductId().equals(productId))
                .findFirst().ifPresent(cartItem -> {
                    cartItem.setQuantity(cartItem.getQuantity() - quantity);
                    totalPrice = totalPrice.subtract(cartItem.getUnitPrice().multiply(BigDecimal.valueOf(quantity)));
                });

    }

    public void addItem(final UUID productId, final String name, final BigDecimal price, final int quantity, final Discount discount) {
        items.stream().filter(item -> item.getProductId().equals(productId))
                .findFirst().ifPresentOrElse(cartItem -> {
                    cartItem.setQuantity(cartItem.getQuantity() + quantity);
                    totalPrice = totalPrice.add(cartItem.getUnitPrice().multiply(BigDecimal.valueOf(quantity)));
                }, () -> {
                    items.add(new CartItem(productId, name, price, quantity, discount));
                    totalPrice = totalPrice.add(price.multiply(BigDecimal.valueOf(quantity)));
                });
    }

    public void clearCart() {
        items.clear();
        totalPrice = BigDecimal.ZERO;
    }
}
