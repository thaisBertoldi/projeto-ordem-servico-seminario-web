package service_order.service_order.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Employee extends Person implements Serializable {

    private static final long serialVersionUID = 1L;

    @OneToMany(mappedBy = "employee")
    @JsonIgnore
	private List<ServiceOrder> serviceOrders = new ArrayList<>();

    public Employee() {
    }

    public Employee(Integer id, String name, String cpf, String phone , String type, String password) {
        super(id, name, cpf, phone, type, password);
    }

    public List<ServiceOrder> getServiceOrders() {
        return serviceOrders;
    }

    public void setServiceOrders(List<ServiceOrder> serviceOrders) {
        this.serviceOrders = serviceOrders;
    }
    
}
