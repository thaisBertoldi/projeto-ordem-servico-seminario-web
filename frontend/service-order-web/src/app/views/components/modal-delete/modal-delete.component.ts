import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

export interface DialogData {
  id: Number
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
    private service : EmployeeService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  delete(id: Number): void {
    this.service.delete(id).subscribe(resposta => {
      this.service.message('Tecnico deletado com sucesso!')
    }, err => {
      this.service.message(err.error.message);
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
