package com.gmail.merikbest2015.progtutorials.dto;

import com.gmail.merikbest2015.progtutorials.domain.Topic;
import lombok.Data;

import java.util.List;

@Data
public class LanguageDto {
    private Long id;
    private String programmingLanguage;
    private List<Topic> topics;
}
