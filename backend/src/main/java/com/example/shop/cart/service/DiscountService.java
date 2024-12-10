package com.example.shop.cart.service;

import com.example.shop.cart.model.Discount;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Service
public class DiscountService {

    public Discount getDiscount(final UUID productId, final int quantity) {
        return new NullDiscount();
    }

    private static class NullDiscount extends Discount {

        public NullDiscount() {
            super( null);
        }

        @Override
        public BigDecimal apply(BigDecimal baseAmount, int quantity) {
            return BigDecimal.ZERO;
        }
    }
}
