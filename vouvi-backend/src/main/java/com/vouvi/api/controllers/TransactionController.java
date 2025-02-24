package com.vouvi.api.controllers;

import com.vouvi.api.models.Transaction;
import com.vouvi.api.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<Transaction> getTransaction(){return transactionService.getAllTransaction();}

    @PostMapping("/add")
    public Transaction createTransaction(@RequestBody Transaction newTransaction) {
        return transactionService.createTransaction(newTransaction);
    }
}
