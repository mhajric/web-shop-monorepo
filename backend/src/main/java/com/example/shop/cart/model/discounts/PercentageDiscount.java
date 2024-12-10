package com.example.shop.cart.model.discounts;

import com.example.shop.cart.model.Discount;

import java.math.BigDecimal;

public class PercentageDiscount extends Discount {
    private final BigDecimal percentage;

    public PercentageDiscount(String description, BigDecimal percentage) {
        super(description);
        this.percentage = percentage;
    }

    @Override
    public BigDecimal apply(BigDecimal baseAmount, int quantity) {
        return baseAmount.multiply(percentage);
    }
}
