package com.example.shop.cart.controller;

import com.example.shop.cart.controller.response.CartResponse;
import com.example.shop.cart.model.Cart;
import com.example.shop.cart.model.Discount;
import com.example.shop.cart.service.CartService;
import com.example.shop.cart.service.DiscountService;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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

    private final CartService cartService;

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
    public ResponseEntity<CartResponse> addToCart(@Parameter(hidden = true) @ModelAttribute("cart") Cart cart,
                                                  @RequestParam UUID productId,
                                                  @RequestParam int quantity) {
        return ResponseEntity.ok(cartService.addItemToCart(cart, productId, quantity));
    }

    @DeleteMapping("/remove")
    @ResponseBody
    public ResponseEntity<CartResponse> removeFromCart(@Parameter(hidden = true) @ModelAttribute("cart") Cart cart, @RequestParam UUID productId, @RequestParam int quantity) {
        return ResponseEntity.ok(cartService.removeItemFromCart(cart, productId, quantity));
    }

    @GetMapping
    @ResponseBody
    public ResponseEntity<CartResponse>  getCart(@Parameter(hidden = true) @ModelAttribute("cart") Cart cart) {
        return ResponseEntity.ok(cartService.getCart(cart));
    }

    @DeleteMapping("/clear")
    @ResponseBody
    public  ResponseEntity<CartResponse>  clearCart(@Parameter(hidden = true) @ModelAttribute("cart") Cart cart) {
        return ResponseEntity.ok(cartService.clearCart(cart));
    }
}
