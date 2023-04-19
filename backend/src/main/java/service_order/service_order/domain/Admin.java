package service_order.service_order.domain;

import java.io.Serializable;

import javax.persistence.Entity;

@Entity
public class Admin extends Person implements Serializable {

    private static final long serialVersionUID = 1L;

    public Admin() {
    }

    public Admin(Integer id, String name, String cpf, String phone, String type, String password) {
        super(id, name, cpf, phone, type, password);
    }
    
}