package service_order.service_order.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import service_order.service_order.domain.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
    
    @Query("SELECT obj FROM Person obj WHERE obj.cpf =:cpf")
	Admin findByCPF(@Param("cpf") String cpf);

}
