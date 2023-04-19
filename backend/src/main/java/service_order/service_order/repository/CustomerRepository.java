package service_order.service_order.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import service_order.service_order.domain.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    
    @Query("SELECT obj FROM Customer obj WHERE obj.cpf =:cpf")
	Customer findByCPF(@Param("cpf") String cpf);

}
