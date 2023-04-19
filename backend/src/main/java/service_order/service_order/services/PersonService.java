package service_order.service_order.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import service_order.service_order.domain.Person;
import service_order.service_order.repository.PersonRepository;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public Person findByCPFOnly(String cpf) {
        Person obj = personRepository.findByCPF(cpf);
        if (obj != null) {
            return obj;
        }
        return null;
    }
}
