package service_order.service_order.domain;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

import service_order.service_order.domain.enums.Priority;
import service_order.service_order.domain.enums.Status;

@Entity
public class ServiceOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime dataAbertura;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime dataFechamento;

	private Integer priority;
	private String observations;
	private Integer status;

	@ManyToOne
	@JoinColumn(name = "employee_id")
	private Employee employee;	

	@ManyToOne
	@JoinColumn(name = "customer_id")
    private Customer customer;

	public ServiceOrder() {
		this.setDataAbertura(LocalDateTime.now());
		this.setPriority(Priority.BAIXA);
		this.setStatus(Status.ABERTO);
	}

	public ServiceOrder(Integer id, Priority Priority, String observations, Status status, Employee employee,
			Customer customer) {
		this.id = id;
		this.setDataAbertura(LocalDateTime.now());
		this.priority = (Priority == null) ? 0 : Priority.getCod();
		this.observations = observations;
		this.status = (status == null) ? 0 : status.getCod();
		this.employee = employee;
		this.customer = customer;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDateTime getDataAbertura() {
		return dataAbertura;
	}

	public void setDataAbertura(LocalDateTime dataAbertura) {
		this.dataAbertura = dataAbertura;
	}

	public LocalDateTime getDataFechamento() {
		return dataFechamento;
	}

	public void setDataFechamento(LocalDateTime dataFechamento) {
		this.dataFechamento = dataFechamento;
	}

	public Priority getPriority() {
		return Priority.toEnum(this.priority);
	}

	public void setPriority(Priority Priority) {
		this.priority = Priority.getCod();
	}

	public String getObservations() {
		return observations;
	}

	public void setObservations(String observations) {
		this.observations = observations;
	}

	public Status getStatus() {
		return Status.toEnum(this.status);
	}

	public void setStatus(Status status) {
		this.status = status.getCod();
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ServiceOrder other = (ServiceOrder) obj;
		return Objects.equals(id, other.id);
	}
}
