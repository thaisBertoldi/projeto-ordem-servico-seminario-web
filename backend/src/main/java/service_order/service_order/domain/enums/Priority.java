package service_order.service_order.domain.enums;

public enum Priority {
    BAIXA(0, "BAIXA"), MEDIA(1, "MEDIA"), ALTA(2, "ALTA");

	private Integer cod;
	private String description;

	private Priority(Integer cod, String description) {
		this.cod = cod;
		this.description = description;
	}

	public Integer getCod() {
		return cod;
	}

	public String getDescription() {
		return description;
	}

	public static Priority toEnum(Integer cod) {
		if (cod == null) {
			return null;
		}

		for (Priority x : Priority.values()) {
			if (cod.equals(x.getCod())) {
				return x;
			}
		}
		throw new IllegalArgumentException("Prioridade inválida! " + cod);

	}
}
