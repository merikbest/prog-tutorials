package com.gmail.merikbest2015.progtutorials.dto;

import lombok.Data;

@Data
public class TopicDto {
    private Long id;
    private String title;
    private String content;
    private Long languageId;
}
