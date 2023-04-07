package service_order.service_order.resources;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import service_order.service_order.dtos.ServiceOrderDTO;
import service_order.service_order.services.ServiceOrderService;

@CrossOrigin("*")
@RestController
@RequestMapping(value= "/ordemservicos")
public class ServiceOrderResource {
    
    @Autowired
	private ServiceOrderService serviceOrderService;

	@GetMapping(value = "/{id}")
	public ResponseEntity<ServiceOrderDTO> findById(@PathVariable Integer id){
		ServiceOrderDTO objDTO = new ServiceOrderDTO(serviceOrderService.findById(id));
		return ResponseEntity.ok().body(objDTO);
	}

    @GetMapping
	public ResponseEntity<List<ServiceOrderDTO>> findAll(){
		List<ServiceOrderDTO> listaDTO = serviceOrderService.findAll().stream().map(obj -> new ServiceOrderDTO(obj))
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listaDTO);
	}

    @PostMapping
	public ResponseEntity<ServiceOrderDTO> create(@Valid @RequestBody ServiceOrderDTO obj) {
		obj = new ServiceOrderDTO(serviceOrderService.created(obj));
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

    @PutMapping
	public ResponseEntity<ServiceOrderDTO> update(@Valid @RequestBody ServiceOrderDTO obj){
		obj = new ServiceOrderDTO(serviceOrderService.update(obj));
		return ResponseEntity.ok().body(obj);
	}

}
