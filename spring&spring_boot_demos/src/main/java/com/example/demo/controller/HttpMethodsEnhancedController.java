package com.example.demo.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class HttpMethodsEnhancedController {

    @GetMapping
    public ResponseEntity<String> getProducts(){
        return ResponseEntity.ok( "GET :: product");
    }

    @PostMapping
    public ResponseEntity<String> addProduct(){
        return ResponseEntity.status(HttpStatus.CREATED).body("POST :: product");
    }

    @DeleteMapping 
    public String deleteProduct(){
        return "DELETE :: product";
    }

    @PatchMapping
    public String patchProduct(){
        return "PATCH :: product";
    }

    @PutMapping
    public String putProduct(){
        return "PUT :: product";
    }

}
