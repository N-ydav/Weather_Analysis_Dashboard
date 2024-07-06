package com.read.ReadSql;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.qos.logback.classic.Logger;

@Service
public class UserService {
	
	private static final Logger logger = (Logger) LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository repository;

    public List<User> getAllEntities() {
        List<User> entities = repository.findAll();
        logger.info("Retrieved {} entities from the database", entities.size());
        for (User entity : entities) {
            logger.debug("Entity details: {}", entity);
        }
        return entities;
    }
	
//	@Autowired
//    private UserRepository repository;
//
//    public List<User> getAllEntities() {
//        return repository.findAll();
//    }
//
//    public User getEntityById(Long id) {
//        return repository.findById(id).orElse(null);
//    }

}
