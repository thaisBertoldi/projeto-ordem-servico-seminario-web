package service_order.service_order.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import service_order.service_order.domain.Person;
import service_order.service_order.services.PersonService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "person")
public class PersonResource {

    @Autowired
	private PersonService personService;

	@GetMapping(value = "/cpf/{cpf}")
	public ResponseEntity<Person> findByCPF(@PathVariable String cpf) {
		Person objDTO = personService.findByCPFOnly(cpf);
		return ResponseEntity.ok(objDTO);
	}

}
