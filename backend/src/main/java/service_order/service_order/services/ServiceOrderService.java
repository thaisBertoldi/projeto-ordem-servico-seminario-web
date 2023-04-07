package service_order.service_order.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import service_order.service_order.domain.Customer;
import service_order.service_order.domain.Employee;
import service_order.service_order.domain.ServiceOrder;
import service_order.service_order.dtos.ServiceOrderDTO;
import service_order.service_order.repository.ServiceOrderRepository;
import service_order.service_order.services.exceptions.ObjectNotFoundException;

@Service
public class ServiceOrderService {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private ServiceOrderRepository serviceOrderRepository;

    public ServiceOrder findById(Integer id) {
        Optional<ServiceOrder> obj = serviceOrderRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado ! id: " + id
                + ", Tipo: " + ServiceOrder.class.getName()));
    }

    public List<ServiceOrder> findAll(){
		return serviceOrderRepository.findAll();
	}

    public ServiceOrder created(@Valid ServiceOrderDTO obj) {
		return fromDTO(obj);
	}

    public ServiceOrder update(@Valid ServiceOrderDTO obj) {
		findById(obj.getId());
		return fromDTO(obj);
	}

	public ServiceOrder fromDTO(ServiceOrderDTO obj) {
		ServiceOrder newObj = new ServiceOrder();
		newObj.setId(obj.getId());
		newObj.setObservations(obj.getObservations());
		newObj.setPriority(obj.getPriority());
		newObj.setStatus(obj.getStatus());

		Employee tec = employeeService.findById(obj.getEmployee());
		Customer cli = customerService.findById(obj.getCustomer());

		newObj.setEmployee(tec);
		newObj.setCustomer(cli);

        if(newObj.getStatus().getCod() == 2) {
			newObj.setClosingDate(LocalDateTime.now());
		}

		return serviceOrderRepository.save(newObj);
	}

}
