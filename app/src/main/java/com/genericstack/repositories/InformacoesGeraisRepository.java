package com.genericstack.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.genericstack.models.InformacoesGerais;

public interface InformacoesGeraisRepository extends JpaRepository<InformacoesGerais, UUID> {

}
