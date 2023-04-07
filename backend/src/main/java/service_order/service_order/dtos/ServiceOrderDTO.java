package service_order.service_order.dtos;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

import service_order.service_order.domain.ServiceOrder;
import service_order.service_order.domain.enums.Priority;
import service_order.service_order.domain.enums.Status;

public class ServiceOrderDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;

	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime openingDate;

	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime closingDate;

	private Integer priority;

	@NotEmpty(message = "O campo Observacoes é requerido")
	private String Observations;
	private Integer status;
	private Integer employee;
	private Integer customer;

	public ServiceOrderDTO() {
		super();
	}

	public ServiceOrderDTO(ServiceOrder obj) {
		super();
		this.id = obj.getId();
		this.openingDate = obj.getOpeningDate();
		this.closingDate = obj.getClosingDate();
		this.priority = obj.getPriority().getCod();
		this.Observations = obj.getObservations();
		this.status = obj.getStatus().getCod();
		this.employee = obj.getEmployee().getId();
		this.customer = obj.getCustomer().getId();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDateTime getOpeningDate() {
		return openingDate;
	}

	public void setOpeningDate(LocalDateTime openingDate) {
		this.openingDate = openingDate;
	}

	public LocalDateTime getClosingDate() {
		return closingDate;
	}

	public void setClosingDate(LocalDateTime closingDate) {
		this.closingDate = closingDate;
	}

	public Priority getPriority() {
		return Priority.toEnum(this.priority);
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	public String getObservations() {
		return Observations;
	}

	public void setObservations(String Observations) {
		this.Observations = Observations;
	}

	public Status getStatus() {
		return Status.toEnum(this.status);
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getEmployee() {
		return employee;
	}

	public void setEmployee(Integer employee) {
		this.employee = employee;
	}

	public Integer getCustomer() {
		return customer;
	}

	public void setCustomer(Integer customer) {
		this.customer = customer;
	}

}
