package com.vouvi.api.controllers;

import com.vouvi.api.models.Annotation;
import com.vouvi.api.services.AnnotationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/annotation")
public class AnnotationController {

    @Autowired
    private AnnotationService annotationService;

    @GetMapping
    public List<Annotation> getAnnotation(){return annotationService.getAllAnnotation();}

    @PostMapping
    public ResponseEntity<Annotation> createAnnotation(@RequestBody Annotation annotation) {
        Annotation savedAnnotation = annotationService.createAnnotation(annotation);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAnnotation);
    }

}
