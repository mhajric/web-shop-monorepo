package com.example.shop.cart.controller;

import com.example.shop.cart.model.Cart;
import com.example.shop.cart.model.Discount;
import com.example.shop.cart.service.DiscountService;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import java.math.BigDecimal;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/cart")
@SessionAttributes("cart")
public class CartController {

    private final DiscountService discountService;

    @ModelAttribute("cart")
    public Cart initializeCart(HttpServletRequest request) {
        HttpSession session = request.getSession(); // Ensures session is created before response commit
        Cart cart = (Cart) session.getAttribute("cart");
        if (cart == null) {
            cart = new Cart(); // Initialize the cart if it doesn't exist
            session.setAttribute("cart", cart);
        }
        return cart;
    }

    @PostMapping("/add")
    @ResponseBody
    public void addToCart(@Parameter(hidden = true) @ModelAttribute("cart") Cart cart,
                            @RequestParam UUID productId,
                            @RequestParam String name,
                            @RequestParam BigDecimal price,
                            @RequestParam int quantity) {
        final Discount discount = discountService.getDiscount(productId, quantity);
        cart.addItem(productId, name, price, quantity, discount);
    }

    @PostMapping("/remove")
    @ResponseBody
    public void removeFromCart(@Parameter(hidden = true) @ModelAttribute("cart") Cart cart, @RequestParam UUID productId, @RequestParam int quantity) {
        cart.removeItem(productId, quantity);
    }

    @GetMapping
    @ResponseBody
    public Cart viewCart(@Parameter(hidden = true) @ModelAttribute("cart") Cart cart) {
        return cart;
    }

    @PostMapping("/clear")
    @ResponseBody
    public void clearCart(@Parameter(hidden = true) @ModelAttribute("cart") Cart cart) {
        cart.clearCart();
    }
}
