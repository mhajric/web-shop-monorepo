package com.example.shop.cart.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;

@RequiredArgsConstructor
@Getter
@ToString
public abstract class Discount {
        private final String description;

        public abstract BigDecimal apply(BigDecimal baseAmount, int quantity);

}
