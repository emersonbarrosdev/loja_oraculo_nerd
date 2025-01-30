import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ebook-modal',
  templateUrl: './ebook-modal.component.html',
  styleUrls: ['./ebook-modal.component.scss'],
  standalone: true,
  imports: [
      CommonModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule
    ],
})
export class EbookModalComponent {
  
  constructor(private dialogRef: MatDialogRef<EbookModalComponent>) {}

  downloadEbook() {
    const downloadLink = document.createElement('a');
    downloadLink.href =
      'https://drive.google.com/uc?export=download&id=1bBgi8DJnCRJ4ibr2ToH09i7Tg-UVp09Q';
    downloadLink.download = '';
    downloadLink.click();

    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
