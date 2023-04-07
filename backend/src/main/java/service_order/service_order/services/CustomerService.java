package service_order.service_order.services;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import service_order.service_order.domain.Customer;
import service_order.service_order.domain.Person;
import service_order.service_order.dtos.CustomerDTO;
import service_order.service_order.repository.CustomerRepository;
import service_order.service_order.repository.PersonRepository;
import service_order.service_order.services.exceptions.DataIntegratyViolationException;
import service_order.service_order.services.exceptions.ObjectNotFoundException;

@Service
public class CustomerService {
    
	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private PersonRepository personRepository;

	public Customer findById(Integer id) {
		Optional<Customer> obj = customerRepository.findById(id);
		return obj.orElseThrow( () -> new ObjectNotFoundException(
			"Objeto não encontrado ! Id: " + id + ", Tipo: " + Customer.class.getName())
        );
	}

	public List<Customer> findAll() {
		return customerRepository.findAll();		
	}

	public Customer create(CustomerDTO objDTO) {
		if(findByCPF(objDTO) != null) {
			throw new DataIntegratyViolationException("CPF já cadastrado na base de dados!");
		}
		Customer newObj = new Customer(null, objDTO.getName(), objDTO.getCpf(), objDTO.getPhone());
		return customerRepository.save(newObj);
	}

	private Person findByCPF(CustomerDTO objDTO) {
		Person obj = personRepository.findByCPF(objDTO.getCpf());
		if(obj != null) {
			return obj;
		}
		return null;
	}

	public Customer update(Integer id, @Valid CustomerDTO objDto) {
		Customer oldObj = findById(id);

		if(findByCPF(objDto) != null && findByCPF(objDto).getId() != id) {
			throw new DataIntegratyViolationException("CPF já cadastrado na base de dados!");
		}

		oldObj.setCpf(objDto.getCpf());
		oldObj.setName(objDto.getName());
		oldObj.setPhone(objDto.getPhone());

		return customerRepository.save(oldObj);
	}

	public void deleteById(Integer id) {
		Customer obj = findById(id);
		if(obj.getServiceOrders().size() > 0) {
			throw new DataIntegratyViolationException("Customer possui ordens de serviço, não pode ser deletado!");
		}
		customerRepository.deleteById(id);
	}

}
