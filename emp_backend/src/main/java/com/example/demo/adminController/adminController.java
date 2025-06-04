package com.example.demo.adminController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.adminController.adminRepository.adminRepository;
import com.example.demo.adminModel.adminModel;

@CrossOrigin(origins = "http://localhost:4200")  // allow Angular frontend
@RestController
@RequestMapping("/api/v1/")
public class adminController {

    @Autowired
    private adminRepository repo;

    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody adminModel loginData) {
        String email = loginData.getEmail();
        String password = loginData.getPassword();

        adminModel admin = repo.findByEmailAndPassword(email, password);

        if (admin != null) {
            return ResponseEntity.ok(admin);  // success
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
