package service_order.service_order.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import service_order.service_order.domain.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {
    
	@Query("SELECT obj FROM Pessoa obj WHERE obj.cpf =:cpf")
	Person findByCPF(@Param("cpf") String cpf);
    
}
