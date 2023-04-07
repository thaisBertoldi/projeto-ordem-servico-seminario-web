package service_order.service_order.resources;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import service_order.service_order.domain.Customer;
import service_order.service_order.dtos.CustomerDTO;
import service_order.service_order.services.CustomerService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "clientes")
public class CustomerResource {
    
	@Autowired
	private CustomerService customerService;

	@GetMapping(value = "/{id}")
	public ResponseEntity<CustomerDTO> findById(@PathVariable Integer id) {
		CustomerDTO objDTO = new CustomerDTO(customerService.findById(id));
		return ResponseEntity.ok(objDTO);
	}

	@GetMapping
	public ResponseEntity<List<CustomerDTO>> findAll() {
		List<CustomerDTO> listaDTO = customerService.findAll().stream().map(obj -> new CustomerDTO(obj))
				.collect(Collectors.toList());

		return ResponseEntity.ok().body(listaDTO);
	}

	@PostMapping
	public ResponseEntity<CustomerDTO> create(@Valid @RequestBody CustomerDTO objDTO) {
		Customer newObj = customerService.create(objDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<CustomerDTO> update(@PathVariable Integer id, @Valid @RequestBody CustomerDTO objDTO){
		CustomerDTO newDTO = new CustomerDTO(customerService.update(id, objDTO));
		return ResponseEntity.ok().body(newDTO);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
		customerService.deleteById(id);
		return ResponseEntity.noContent().build(); 
	}

}
