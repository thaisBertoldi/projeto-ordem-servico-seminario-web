export interface Person {
  id: any;
  name: String;
  cpf: String;
  phone: String;
  type: String;
  password?: String;
}

export interface OS {
  id?: any;
  openingDate?: any;
  closingDate?: any;
  priority: any;
  observations: String;
  status: any;
  employee: any;
  customer: any;
}
