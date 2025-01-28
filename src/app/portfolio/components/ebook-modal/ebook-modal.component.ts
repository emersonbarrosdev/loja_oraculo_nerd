import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ebook-modal',
  templateUrl: './ebook-modal.component.html',
  styleUrls: ['./ebook-modal.component.scss']
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
