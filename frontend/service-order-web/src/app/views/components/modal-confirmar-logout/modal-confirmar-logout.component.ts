import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-confirmar-logout',
  templateUrl: './modal-confirmar-logout.component.html',
  styleUrls: ['./modal-confirmar-logout.component.css']
})
export class ModalConfirmarLogoutComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmarLogoutComponent>,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.router.navigate(['/redirect-logout']);
    this.dialogRef.close();
  }
}
