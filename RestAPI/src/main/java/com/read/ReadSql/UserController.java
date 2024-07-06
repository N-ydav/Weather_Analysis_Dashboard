package com.read.ReadSql;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
    private UserService service;
	
	@GetMapping("/home")
    public String home() {
        return "ok";
    }
	
	
    @GetMapping("/data")
    @CrossOrigin(origins = "*")
    public List<User> getAllEntities() {
        return service.getAllEntities();
    }

//    @GetMapping("/{id}")
//    public User getEntityById(@PathVariable Long id) {
//        return service.getEntityById(id);
//    }
}
