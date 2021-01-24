package com.gmail.merikbest2015.progtutorials.dto;

import com.gmail.merikbest2015.progtutorials.domain.Language;
import lombok.Data;

import java.time.LocalDate;

@Data
public class TopicDto {
    private String title;
    private String content;
    private Language language;
    private LocalDate date = LocalDate.now();
}
