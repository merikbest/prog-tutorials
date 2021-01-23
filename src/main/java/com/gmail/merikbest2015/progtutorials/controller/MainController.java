package com.gmail.merikbest2015.progtutorials.controller;

import com.gmail.merikbest2015.progtutorials.domain.Language;
import com.gmail.merikbest2015.progtutorials.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/language")
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {
    private final LanguageService languageService;

    @Autowired
    public MainController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @GetMapping
    public ResponseEntity<?> getAllLanguages() {
        List<Language> languages = languageService.getAllLanguages();

        return new ResponseEntity<>(languages, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addLanguage(@RequestBody Language language) {
        if (language.getProgrammingLanguage() == null) {
            return new ResponseEntity<>("missed title", HttpStatus.NOT_ACCEPTABLE);
        }

        languageService.addLanguage(language);

        return new ResponseEntity<>("all OK", HttpStatus.OK);
    }
}
