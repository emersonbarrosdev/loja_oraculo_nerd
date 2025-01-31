import { Component, OnInit, Renderer2 } from '@angular/core';
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

  constructor(private dialog: MatDialog, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.openEbookModal();
    this.disableDarkMode();
  }

  openEbookModal(): void {
    this.dialog.open(EbookModalComponent, {
      width: '700px',
      disableClose: false,
    });
  }


  private disableDarkMode(): void {
    // Remove o comportamento automático do modo escuro
    this.renderer.setAttribute(document.body, 'style', 'background-color: white; color: black;');
  }
}
