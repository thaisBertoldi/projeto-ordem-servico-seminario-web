package service_order.service_order.resources.exceptions;

import java.io.Serializable;

public class StandartError implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long timestamp;
	private Integer status;
	private String message;

	public StandartError() {
		super();
	}

	public StandartError(Long timestamp, Integer status, String message) {
		super();
		this.timestamp = timestamp;
		this.status = status;
		this.message = message;
	}

	public Long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Long timestamp) {
		this.timestamp = timestamp;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
