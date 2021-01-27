package com.gmail.merikbest2015.progtutorials.controller;

import com.gmail.merikbest2015.progtutorials.domain.Language;
import com.gmail.merikbest2015.progtutorials.dto.LanguageDto;
import com.gmail.merikbest2015.progtutorials.service.LanguageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/language")
@CrossOrigin(origins = "http://localhost:3000")
public class LanguageController {

    private final LanguageService languageService;

    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @GetMapping
    public ResponseEntity<List<Language>> getAllLanguages() {
        List<Language> languages = languageService.getAllLanguages();

        return new ResponseEntity<>(languages, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Language> addLanguage(@RequestBody LanguageDto languageDto) {
        if (languageDto.getProgrammingLanguage() == null) {

            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }

        languageService.addLanguage(languageDto);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{language}")
    public ResponseEntity<Language> getLanguage(@PathVariable("language") String programmingLanguage) {
        Language language = languageService.getLanguage(programmingLanguage);

        return new ResponseEntity<>(language, HttpStatus.OK);
    }
}
