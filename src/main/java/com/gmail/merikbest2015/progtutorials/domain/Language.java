package com.gmail.merikbest2015.progtutorials.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String programmingLanguage;
    @OneToMany
    private List<Topic> topicList;
}
