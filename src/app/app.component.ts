import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EbookModalComponent } from './portfolio/components/ebook-modal/ebook-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'oraculo-nerd';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.openEbookModal();
  }

  openEbookModal(): void {
    this.dialog.open(EbookModalComponent, {
      // width: '650px',
      disableClose: false, // Permite o fechamento ao clicar no botão "X"
    });
  }
}
