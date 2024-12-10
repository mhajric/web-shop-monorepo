package com.example.shop.cart.model.discounts;

import com.example.shop.cart.model.Discount;

import java.math.BigDecimal;

public class BulkDiscount extends Discount {

    private final int quantity;
    private final BigDecimal amount;

    public BulkDiscount(String description, int quantity, BigDecimal amount) {
        super(description);
        this.quantity = quantity;
        this.amount = amount;
    }

    @Override
    public BigDecimal apply(final BigDecimal baseAmount, final int quantity) {
        return quantity >= this.quantity ? amount : BigDecimal.ZERO;
    }
}
