package com.example.shop.cart.model.discounts;

import com.example.shop.cart.model.Discount;

import java.math.BigDecimal;

public class FixedAmountDiscount extends Discount {

    private final BigDecimal amount;

    public FixedAmountDiscount(String description, BigDecimal amount) {
        super(description);
        this.amount = amount;
    }

    @Override
    public BigDecimal apply(BigDecimal baseAmount, int quantity) {
        return amount;
    }
}
