package com.vouvi.api.services;

import com.vouvi.api.models.Annotation;
import com.vouvi.api.repositories.AnnotationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnotationService {

    @Autowired
    private AnnotationRepository annotationRepository;

    public List<Annotation> getAllAnnotation() {
        return annotationRepository.findAll();
    }

    public Annotation createAnnotation(Annotation annotation) {
        return annotationRepository.save(annotation);
    }
}
