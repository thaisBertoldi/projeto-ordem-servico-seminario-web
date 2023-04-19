package service_order.service_order.dtos;

import java.io.Serializable;

import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.br.CPF;

import service_order.service_order.domain.Customer;

public class CustomerDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;

	@NotEmpty( message = "O campo Nome é requerido" )
	private String name;

	@CPF
	@NotEmpty( message = "O campo CPF é requerido" )
	private String cpf;

	@NotEmpty( message = "O campo Telefone é requerido" )
	private String phone;

	private String type;

	private String password;

	public CustomerDTO() {
		super();
	}

	public CustomerDTO(Customer obj) {
		super();
		this.id = obj.getId();
		this.name = obj.getName();
		this.cpf = obj.getCpf();
		this.phone = obj.getPhone();
		this.type = obj.getType();
        this.password = obj.getPassword();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
