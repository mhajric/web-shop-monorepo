package com.example.shop.common;

import com.example.shop.product.model.Product;
import com.example.shop.product.repository.ProductRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;


@Slf4j
@RequiredArgsConstructor
@Component
public class DataInitializer {

    private final ProductRepository productRepository;

    List<Integer> imgSizes = List.of(400, 460, 510, 580, 700, 760);
    List<String> imgTextColor = List.of("blue", "red", "green", "black");
    List<String> imgBgColor = List.of("%23cecece", "%23f1b2c9", "%23fa99c9", "%23fcf1f9");

    @PostConstruct
    public void initialize() throws IOException {
        RestClient restClient = RestClient.create();

        for (int i = 1; i <= 1000; i++) {
            Product product = new Product();
            product.setId(UUID.randomUUID());
            product.setName("Product " + i);
            String description = restClient.get()
                    .uri("https://loripsum.net/api/3/short/ul/ol/dl/plaintext")
                    .retrieve()
                    .body(String.class);
            product.setDescription(description);
            product.setPrice(BigDecimal.valueOf(i));
            List<String> images = new ArrayList<>();
            String img1 = String.format("https://via.assets.so/img.jpg?w=%s&h=%s&tc=%s&bg=%s",
                    imgSizes.get((int) (Math.random() * imgSizes.size())),
                    imgSizes.get((int) (Math.random() * imgSizes.size())),
                    imgTextColor.get((int) (Math.random() * imgTextColor.size())),
                    imgBgColor.get((int) (Math.random() * imgBgColor.size())));
            String img2 = String.format("https://via.assets.so/img.jpg?w=%s&h=%s&tc=%s&bg=%s",
                    imgSizes.get((int) (Math.random() * imgSizes.size())),
                    imgSizes.get((int) (Math.random() * imgSizes.size())),
                    imgTextColor.get((int) (Math.random() * imgTextColor.size())),
                    imgBgColor.get((int) (Math.random() * imgBgColor.size())));
            String img3 = String.format("https://via.assets.so/img.jpg?w=%s&h=%s&tc=%s&bg=%s",
                    imgSizes.get((int) (Math.random() * imgSizes.size())),
                    imgSizes.get((int) (Math.random() * imgSizes.size())),
                    imgTextColor.get((int) (Math.random() * imgTextColor.size())),
                    imgBgColor.get((int) (Math.random() * imgBgColor.size())));
            images.add(img1);
            images.add(img2);
            images.add(img3);
            product.setImages(images);
            String category = "Category " + (int) (Math.random() * 10);
            product.setCategory(category);
            Set<String> tags = List.of("Tag " + (int) (Math.random() * 10), "Tag " + (int) (Math.random() * 10), "Tag " + (int) (Math.random() * 10)).stream().collect(Collectors.toSet());
            product.setTags(tags);

            productRepository.save(product);
        }
        log.info("Data initialized!");
    }
}
