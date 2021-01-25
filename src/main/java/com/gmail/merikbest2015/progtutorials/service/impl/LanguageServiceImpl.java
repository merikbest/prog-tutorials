package com.gmail.merikbest2015.progtutorials.service.impl;

import com.gmail.merikbest2015.progtutorials.domain.Language;
import com.gmail.merikbest2015.progtutorials.repository.LanguageRepository;
import com.gmail.merikbest2015.progtutorials.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageServiceImpl implements LanguageService {
    private final LanguageRepository languageRepository;

    @Autowired
    public LanguageServiceImpl(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    @Override
    public List<Language> getAllLanguages() {
        return languageRepository.findAll();
    }

    @Override
    public Language getLanguage(String programmingLanguage) {
        return languageRepository.findByProgrammingLanguage(programmingLanguage);
    }

    @Override
    public void addLanguage(Language language) {
        languageRepository.save(language);
    }
}
