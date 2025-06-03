package com.example.ETMDISS;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.example.ETMDISS.entity.Task;
import com.example.ETMDISS.repository.TaskRepository;

@DataJpaTest
public class TaskRepositoryTest {

    @Autowired
    private TaskRepository taskRepository;

    @Test
    void testFindAll() {
        List<Task> tasks = taskRepository.findAll();
        assertNotNull(tasks);
    }
}
