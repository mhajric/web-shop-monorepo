package com.example.shop.cart.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter(value = AccessLevel.PRIVATE)
@ToString
public class CartItem  implements Serializable {
    private UUID productId;           // Unique identifier for the product
    private String name;              // Name of the product
    private BigDecimal unitPrice;     // Price per unit of the product
    private int quantity;             // Quantity of the product

    @JsonIgnore
    private Discount discount;        // Discount applied to this item

    public BigDecimal getTotalPrice() {
        BigDecimal discountAmount = (discount != null)
                ? discount.apply(unitPrice, quantity)
                : BigDecimal.ZERO;
        // Total price for this item (unitPrice * quantity)
        return unitPrice.subtract(discountAmount).multiply(BigDecimal.valueOf(quantity));
    }

    @JsonInclude(JsonInclude.Include.NON_NULL)
    public String getDiscountDescription() {
        return discount != null ? discount.getDescription() : null;
    }

    public void setQuantity(final int quantity) {
        this.quantity = quantity;
    }
}
