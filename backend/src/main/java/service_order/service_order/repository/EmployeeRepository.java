package service_order.service_order.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import service_order.service_order.domain.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query("SELECT obj FROM Employee obj WHERE obj.cpf =:cpf")
	Employee findByCPF(@Param("cpf") String cpf);

}
