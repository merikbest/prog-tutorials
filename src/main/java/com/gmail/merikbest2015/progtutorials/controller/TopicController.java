package com.gmail.merikbest2015.progtutorials.controller;

import com.gmail.merikbest2015.progtutorials.domain.Topic;
import com.gmail.merikbest2015.progtutorials.dto.TopicDto;
import com.gmail.merikbest2015.progtutorials.service.TopicService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/topic")
@CrossOrigin(origins = "http://localhost:3000")
public class TopicController {

    private final TopicService topicService;

    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Topic> getTopic(@PathVariable Long id) {
        Topic topic = topicService.getTopic(id);

        return new ResponseEntity<>(topic, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Topic> addTopic(@RequestBody TopicDto topicDto) {
        topicService.addTopic(topicDto);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/edit")
    public ResponseEntity<Topic> editTopic(@RequestBody TopicDto topicDto) {
        topicService.editTopic(topicDto);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
