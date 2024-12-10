package com.example.shop.home.controller;

import com.example.shop.home.model.Layout;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/home")
public class HomeController {

    @GetMapping("/index-layout")
    public List<Layout> getDynamicLayout(HttpServletRequest request) {

        return List.of(new Layout("featured-products", List.of()));
    }
}
