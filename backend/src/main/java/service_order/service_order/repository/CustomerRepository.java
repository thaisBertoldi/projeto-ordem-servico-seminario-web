package service_order.service_order.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import service_order.service_order.domain.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    
}
