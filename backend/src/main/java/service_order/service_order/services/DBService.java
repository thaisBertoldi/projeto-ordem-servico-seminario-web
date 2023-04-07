package service_order.service_order.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import service_order.service_order.domain.Customer;
import service_order.service_order.domain.Employee;
import service_order.service_order.domain.ServiceOrder;
import service_order.service_order.domain.enums.Priority;
import service_order.service_order.domain.enums.Status;
import service_order.service_order.repository.CustomerRepository;
import service_order.service_order.repository.EmployeeRepository;
import service_order.service_order.repository.ServiceOrderRepository;

@Service
public class DBService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private ServiceOrderRepository serviceOrderRepository;

	public void instanciaDB() {

		Employee t1 = new Employee(null, "Barney Brown", "65483653050", "(51) 9986-4444");
        Employee t2 = new Employee(null, "Elvis Marley", "88757163073", "(51) 9988-3333");
		Customer c1 = new Customer(null, "Betina Campos", "78923408077", "(49) 9879-5555");
        Customer c2 = new Customer(null, "Sprint Marshmallow", "63455643035", "(49) 9975-1234");
        Customer c3 = new Customer(null, "Aelin Marshmallow", "79668163036", "(49) 88888-1234");
		ServiceOrder os1 = new ServiceOrder(null, Priority.BAIXA, "teste criar ordem", Status.ANDAMENTO, t1, c1);

		t1.getServiceOrders().add(os1);
		c1.getServiceOrders().add(os1);

		employeeRepository.saveAll(Arrays.asList(t1, t2));
		customerRepository.saveAll(Arrays.asList(c1, c2, c3));
		serviceOrderRepository.saveAll(Arrays.asList(os1));

	}

}