package com.gmail.merikbest2015.progtutorials.service.impl;

import com.gmail.merikbest2015.progtutorials.domain.Topic;
import com.gmail.merikbest2015.progtutorials.repository.TopicRepository;
import com.gmail.merikbest2015.progtutorials.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicServiceImpl implements TopicService {
    private final TopicRepository topicRepository;

    @Autowired
    public TopicServiceImpl(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    @Override
    public void addTopic(Topic topic) {
        topicRepository.save(topic);
    }
}
