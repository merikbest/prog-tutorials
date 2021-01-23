package com.gmail.merikbest2015.progtutorials.repository;

import com.gmail.merikbest2015.progtutorials.domain.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Long> {
}
