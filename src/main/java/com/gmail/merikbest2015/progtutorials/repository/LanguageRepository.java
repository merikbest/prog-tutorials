package com.gmail.merikbest2015.progtutorials.repository;

import com.gmail.merikbest2015.progtutorials.domain.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository extends JpaRepository<Language, Long> {
}
