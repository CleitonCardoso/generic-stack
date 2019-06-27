package com.genericstack.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.genericstack.models.InformacoesGerais;
import com.genericstack.repositories.InformacoesGeraisRepository;

@CrossOrigin
@RestController
@RequestMapping("informacoes-gerais")
public class InformacoesGeraisController {

	@Autowired
	private InformacoesGeraisRepository repository;

	@PostMapping
	public InformacoesGerais save(@RequestBody InformacoesGerais informacoesGerais) {
		return repository.save(informacoesGerais);
	}

	@GetMapping
	public List<InformacoesGerais> findAll() {
		return repository.findAll();
	}
	
	@DeleteMapping
	public void delete(UUID id) {
		repository.deleteById(id);
	}

}
