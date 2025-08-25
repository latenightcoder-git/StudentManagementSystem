package com.example.student;

import com.example.student.entity.Student;
import com.example.student.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendSpringbootApplication.class, args);
    }

    @Bean
    CommandLineRunner seed(StudentRepository repo, StudentRepository studentRepository) {
        return args -> {
            studentRepository.save(new Student(null, "Alice", 20, 85.5));
            studentRepository.save(new Student(null, "Bob", 22, 78.0));
            studentRepository.save(new Student(null, "Charlie", 19, 92.3));
            studentRepository.save(new Student(null, "David", 21, 66.8));
            studentRepository.save(new Student(null, "Eva", 23, 74.1));
            studentRepository.save(new Student(null, "Frank", 20, 88.7));
        };
    }
}
