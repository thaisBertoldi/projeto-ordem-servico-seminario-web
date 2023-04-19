package service_order.service_order.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import service_order.service_order.domain.Employee;
import service_order.service_order.domain.Person;
import service_order.service_order.dtos.EmployeeDTO;
import service_order.service_order.repository.EmployeeRepository;
import service_order.service_order.repository.PersonRepository;
import service_order.service_order.services.exceptions.DataIntegratyViolationException;
import service_order.service_order.services.exceptions.ObjectNotFoundException;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
	private PersonRepository personRepository;

    public Employee findById(Integer id) {
        Optional<Employee> obj = employeeRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
            "Objeto não encontrado ! Id: " + id + ", Tipo: " + Employee.class.getName())
        );
    }

    public List<EmployeeDTO> findAll() {
        List<EmployeeDTO> employeeList = employeeRepository.findAll().stream().map(obj -> new EmployeeDTO(obj)).collect(Collectors.toList());
		return employeeList;
	}

    public Employee create(EmployeeDTO objDTO) {
        if(findByCPF(objDTO) != null) {
			throw new DataIntegratyViolationException("CPF já cadastrado na base de dados!");
		}
		Employee newObj = new Employee(null, objDTO.getName(), objDTO.getCpf(), objDTO.getPhone(), objDTO.getType(), objDTO.getPassword());
		return employeeRepository.save(newObj);
	}

    private Person findByCPF(EmployeeDTO objDTO) {
		Person obj = personRepository.findByCPF(objDTO.getCpf());
		if(obj != null) {
			return obj;
		}
		return null;
	}

    public Employee update(Integer id, @Valid EmployeeDTO objDto) {
		Employee oldObj = findById(id);

		if(findByCPF(objDto) != null && findByCPF(objDto).getId() != id) {
			throw new DataIntegratyViolationException("CPF já cadastrado na base de dados!");
		}

		oldObj.setCpf(objDto.getCpf());
		oldObj.setName(objDto.getName());
		oldObj.setPhone(objDto.getPhone());

		return employeeRepository.save(oldObj);
	}

    public void deleteById(Integer id) {
		Employee obj = findById(id);
		if(obj.getServiceOrders().size() > 0) {
			throw new DataIntegratyViolationException("Técnico possui ordens de serviço, não pode ser deletado!");
		}
		employeeRepository.deleteById(id);
	}

}
