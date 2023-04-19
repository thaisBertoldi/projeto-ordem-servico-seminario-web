package service_order.service_order.services;

import org.springframework.beans.factory.annotation.Autowired;

import service_order.service_order.domain.Admin;
import service_order.service_order.dtos.AdminDTO;
import service_order.service_order.repository.AdminRepository;
import service_order.service_order.services.exceptions.DataIntegratyViolationException;

public class AdminService {

    @Autowired
	private AdminRepository adminRepository;
    
    public Admin create(AdminDTO objDTO) {
		if(findByCPF(objDTO.getCpf()) != null) {
			throw new DataIntegratyViolationException("CPF já cadastrado na base de dados!");
		}
		Admin newObj = new Admin(null, objDTO.getName(), objDTO.getCpf(), objDTO.getPhone(), objDTO.getType(), objDTO.getPassword());
		return adminRepository.save(newObj);
	}

    public Admin findByCPF(String cpf) {
        Admin obj = adminRepository.findByCPF(cpf);
        if (obj != null) {
            return obj;
        }
        return null;
    }


}
