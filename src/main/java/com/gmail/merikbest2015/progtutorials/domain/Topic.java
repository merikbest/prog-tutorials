package com.gmail.merikbest2015.progtutorials.domain;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private LocalDate creationDate;

    public Topic() {
        this.creationDate = LocalDate.now();
    }
}
