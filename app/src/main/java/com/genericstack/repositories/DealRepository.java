package com.genericstack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.genericstack.models.Deal;

public interface DealRepository extends JpaRepository<Deal, Long> {

}
