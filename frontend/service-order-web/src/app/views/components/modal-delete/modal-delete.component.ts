import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';

export interface DialogData {
  id: Number,
  person: String
}

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css'],
})
export class ModalDeleteComponent {
  answer: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    private serviceEmployee : EmployeeService,
    private serviceCustomer: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  delete(id: Number): void {
    const service = this.data.person === 'employee' ? this.serviceEmployee : this.serviceCustomer;
    service.delete(id).subscribe(resposta => {
      service.message(`Usuário deletado com sucesso!`)
      setTimeout(() => {
        location.reload();
      }, 2000);
    }, err => {
      service.message(err.error.message);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.delete(this.data.id);
    this.answer = true;
    this.dialogRef.close();
  }
}
