package com.example.ETMDISS.repository;

import com.example.ETMDISS.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}