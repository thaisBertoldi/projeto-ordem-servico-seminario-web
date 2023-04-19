import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from '../views/components/modal-delete/modal-delete.component';
import { ModalEncerrarComponent } from '../views/components/modal-encerrar/modal-encerrar.component';
import { ModalAtualizarComponent } from '../views/components/modal-atualizar/modal-atualizar.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public dialog: MatDialog
  ) { }

  open(id: Number, person: String) {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '350px',
      data: { id: id, person: person }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  encerrar(id: Number) {
    const dialogRef = this.dialog.open(ModalEncerrarComponent, {
      width: '350px',
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  atualizar(id: Number) {
    const dialogRef = this.dialog.open(ModalAtualizarComponent, {
      width: '350px',
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
