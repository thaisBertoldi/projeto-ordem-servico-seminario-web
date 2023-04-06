package service_order.service_order.services.exceptions;

public class DataIntegratyViolationException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public DataIntegratyViolationException() {
		super();
	}

	public DataIntegratyViolationException(String message, Throwable cause) {
		super(message, cause);
	}

	public DataIntegratyViolationException(String message) {
		super(message);
	}

}