import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../modal-delete/modal-delete.component';
import { ServiceOrderService } from 'src/app/services/serviceorder.service';
import { OS } from 'src/app/models/Interfaces';
import { formatDate } from '@angular/common';
import { format } from 'path';

@Component({
  selector: 'app-modal-encerrar',
  templateUrl: './modal-encerrar.component.html',
  styleUrls: ['./modal-encerrar.component.css']
})
export class ModalEncerrarComponent {

  answer: Boolean = false;
  os: OS = {
    employee: '',
    customer: '',
    observations: '',
    status: '',
    priority: ''
  }

  constructor(
    public dialogRef: MatDialogRef<ModalEncerrarComponent>,
    private osService: ServiceOrderService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.findById();
  }

  encerrar(): void {
    this.osService.update(this.os).subscribe(resposta => {
      this.osService.message("Ordem de serviço atualizada com  sucesso !");
      setTimeout(() => {
        location.reload();
      }, 2000);
    })
  }

  findById() {
    this.osService.findById(this.data.id).subscribe(resposta => {
      this.os = resposta;
      this.converteDados();
    });
  }

  converteDados(): void {
    this.os.status = 2;
    if(this.os.priority == 'BAIXA') {
      this.os.priority = 0;
    } else if(this.os.priority == 'MEDIA') {
      this.os.priority = 1;
    } else {
      this.os.priority = 2;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.encerrar();
    this.answer = true;
    this.dialogRef.close();
  }

}
