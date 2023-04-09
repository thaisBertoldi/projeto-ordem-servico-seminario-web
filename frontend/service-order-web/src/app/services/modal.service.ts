import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from '../views/components/modal-delete/modal-delete.component';

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
}