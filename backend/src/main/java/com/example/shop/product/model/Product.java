package com.example.shop.product.model;

import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

@NoArgsConstructor
@Getter
@Setter
@ToString(of = {"id", "name", "price"})
@Document
public class Product {

    @Id
    private UUID id;

    @NotBlank(message = "product.name_blank")
    private String name;

    @Min(value = 0, message = "product.price_negative")
    private BigDecimal price;

    private String description;

    private List<String> images;

    private String category;

    private Set<String> tags;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
