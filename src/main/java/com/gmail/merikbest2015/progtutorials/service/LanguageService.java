package com.gmail.merikbest2015.progtutorials.service;

import com.gmail.merikbest2015.progtutorials.domain.Language;

import java.util.List;

public interface LanguageService {
    List<Language> getAllLanguages();
    void addLanguage(Language language);
}
