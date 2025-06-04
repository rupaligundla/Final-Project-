package com.example.demo.adminController.adminRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.adminModel.adminModel;

public interface adminRepository extends JpaRepository<adminModel, Long> {
    adminModel findByEmailAndPassword(String email, String password);
}
