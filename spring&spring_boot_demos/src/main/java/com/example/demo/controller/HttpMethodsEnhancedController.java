package com.example.demo.controller;


import com.example.demo.model.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/products")
public class HttpMethodsEnhancedController {

    private final List<Product> products = new ArrayList<>();

    @GetMapping
    public ResponseEntity<List<Product>> getProducts(){
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{product_id}")
    public  ResponseEntity<Product> getProductById(@PathVariable("product_id") int productId){
         return  products
                 .stream()
                 .filter(product -> product.getId() == productId)
                 .findFirst()
                 .map(ResponseEntity::ok)
                 .orElse(ResponseEntity.notFound().build());

    }

    @PostMapping
    public ResponseEntity<String> addProduct(@RequestBody Product product){
        products.add(product);
        return ResponseEntity.status(HttpStatus.CREATED).body("Product added with ID ::" + product.getId());
    }

    @DeleteMapping("/{product_id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("product_id") int productId){
        boolean removed = products.removeIf(product -> product.getId() == productId);

        if (removed) {
            return ResponseEntity.ok("DELETE :: product deleted");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
    }

    @PatchMapping("/{product_id}")
    public ResponseEntity<String> changeProductPrice(@PathVariable("product_id") int productId, double price){
        return ResponseEntity.ok("PATCH :: product");
    }

    @PutMapping
    public ResponseEntity<String> updateProduct(@RequestBody Product product){
        products.stream()
                .filter(p -> p.getId() == product.getId())
                .findFirst().ifPresent(existing -> {
            existing.setName(product.getName());
            existing.setPrice(product.getPrice());
        });
        return ResponseEntity.ok("Product updated with ID ::" + product.getId());
    }

}
