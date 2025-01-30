import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EbookModalComponent } from './shared/components/ebook-modal/ebook-modal.component';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './feature/components/project/project.component';
import { HomeComponent } from './feature/components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
      CommonModule,
      ProjectComponent,
      HomeComponent,
      MatDialogModule
    ],
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
