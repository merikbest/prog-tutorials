package com.gmail.merikbest2015.progtutorials.service;

import com.gmail.merikbest2015.progtutorials.domain.Topic;
import com.gmail.merikbest2015.progtutorials.dto.TopicDto;

public interface TopicService {
    Topic getTopic(Long id);
    void addTopic(TopicDto topic);
    void editTopic(Topic topic);
}
