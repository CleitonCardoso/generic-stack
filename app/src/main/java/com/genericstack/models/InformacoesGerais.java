package com.genericstack.models;

import java.math.BigDecimal;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class InformacoesGerais {

	@Id
	@GeneratedValue(generator = "system-uuid", strategy = GenerationType.AUTO)
	@Column(columnDefinition = "uuid", updatable = false)
	private UUID CodigoEmpresa;

	private String RazaoSocial;
	private String Cnpj;
	private String Endereco;
	private String Bairro;
	private String UF;
	private String Cidade;
	private int Numero;
	private BigDecimal percJuros;
	private BigDecimal percMulta;
	private BigDecimal percDesconto;

}
