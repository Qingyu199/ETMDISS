package com.example.ETMDISS;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/message")
    public Map<String, String> getMessage() {
    	Map<String, String> result = new HashMap<>();
    	result.put("message", "这是来自 Spring Boot 的数据");
    	return result;
    }
}