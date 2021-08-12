import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDialogData} from '../../interfaces/components';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}

  public onDismiss(): void {
    if (this.data?.dismissButton?.action) {
      this.data?.dismissButton?.action({action: 'dismiss'});
    }
    this.dialogRef.close();
  }

  public onConfirm(): void {
    if (this.data?.confirmButton?.action) {
      this.data?.confirmButton?.action({action: 'confirm'});
    }
    this.dialogRef.close();
  }

}
