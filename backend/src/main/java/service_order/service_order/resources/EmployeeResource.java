package service_order.service_order.resources;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import service_order.service_order.domain.Employee;
import service_order.service_order.dtos.EmployeeDTO;
import service_order.service_order.services.EmployeeService;

@RestController
@RequestMapping(value = "tecnicos")
public class EmployeeResource {
    
    @Autowired
	private EmployeeService employeeService;

	@GetMapping(value = "/{id}")
	public ResponseEntity<EmployeeDTO> findById(@PathVariable Integer id) {
		EmployeeDTO objDTO = new EmployeeDTO(employeeService.findById(id));
		return ResponseEntity.ok(objDTO);
	}

	@GetMapping
	public ResponseEntity<List<EmployeeDTO>> findAll() {
		List<EmployeeDTO> listaDTO = employeeService.findAll();
		return ResponseEntity.ok().body(listaDTO);
	}

	@PostMapping
	public ResponseEntity<EmployeeDTO> create(@Valid @RequestBody EmployeeDTO objDTO) {
		Employee newObj = employeeService.create(objDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<EmployeeDTO> update(@PathVariable Integer id, @Valid @RequestBody EmployeeDTO objDTO){
		EmployeeDTO newDTO = new EmployeeDTO(employeeService.update(id, objDTO));
		return ResponseEntity.ok().body(newDTO);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
		employeeService.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
