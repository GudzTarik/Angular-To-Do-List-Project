import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: {title: string},
              public readonly dialogRef: MatDialogRef<unknown>) {
  }

  public confirm(): void {
    this.dialogRef.close(true);
  }

  public reject(): void {
    this.dialogRef.close();
  }
}
