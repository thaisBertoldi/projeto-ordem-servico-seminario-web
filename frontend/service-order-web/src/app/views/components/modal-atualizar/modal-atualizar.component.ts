import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OS } from 'src/app/models/Interfaces';
import { ServiceOrderService } from 'src/app/services/serviceorder.service';
import { DialogData } from '../modal-delete/modal-delete.component';

@Component({
  selector: 'app-modal-atualizar',
  templateUrl: './modal-atualizar.component.html',
  styleUrls: ['./modal-atualizar.component.css']
})
export class ModalAtualizarComponent {

  answer: Boolean = false;
  os: OS = {
    employee: '',
    customer: '',
    observations: '',
    status: '',
    priority: ''
  }

  constructor(
    public dialogRef: MatDialogRef<ModalAtualizarComponent>,
    private osService: ServiceOrderService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.findById();
  }

  updateStatus(): void {
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
    this.os.status = 1;
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
    this.updateStatus();
    this.answer = true;
    this.dialogRef.close();
  }

}

