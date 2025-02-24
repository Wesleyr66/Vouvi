package com.vouvi.api.repositories;

import com.vouvi.api.models.Annotation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnotationRepository extends JpaRepository<Annotation, Integer> {
}
