package com.gmail.merikbest2015.progtutorials.service.impl;

import com.gmail.merikbest2015.progtutorials.domain.Language;
import com.gmail.merikbest2015.progtutorials.domain.Topic;
import com.gmail.merikbest2015.progtutorials.dto.TopicDto;
import com.gmail.merikbest2015.progtutorials.repository.LanguageRepository;
import com.gmail.merikbest2015.progtutorials.repository.TopicRepository;
import com.gmail.merikbest2015.progtutorials.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicServiceImpl implements TopicService {

    private final TopicRepository topicRepository;
    private final LanguageRepository languageRepository;

    @Autowired
    public TopicServiceImpl(TopicRepository topicRepository, LanguageRepository languageRepository) {
        this.topicRepository = topicRepository;
        this.languageRepository = languageRepository;
    }

    @Override
    public Topic getTopic(Long id) {
        return topicRepository.findById(id).get();
    }

    @Override
    public void addTopic(TopicDto topicDto) {
        Language language = languageRepository.getOne(topicDto.getLanguageId());
        Topic topic = new Topic();
        topic.setTitle(topicDto.getTitle());
        topic.setContent(topicDto.getContent());
        language.getTopics().add(topic);

        topicRepository.save(topic);
    }

    @Override
    public void editTopic(Topic topic) {
        topicRepository.save(topic);
    }
}
