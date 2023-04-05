package service_order.service_order.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class Customer extends Person implements Serializable {

    private static final long serialVersionUID = 1L;

    @OneToMany( mappedBy = "customer" )
	private List<ServiceOrder> serviceOrders = new ArrayList<>();

    public Customer() {
    }

    public Customer(Integer id, String name, String cpf, String phone) {
        super(id, name, cpf, phone);
    }

    public List<ServiceOrder> getServiceOrders() {
		return serviceOrders;
	}

    public void setServiceOrders(List<ServiceOrder> serviceOrders) {
        this.serviceOrders = serviceOrders;
    }
    
}
