import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { ProjectComponent } from "../project/project.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    HeaderComponent,
    ProjectComponent,
    FooterComponent
],
})
export class HomeComponent {

  // constructor(private viewContainerRef: ViewContainerRef) {}

  // startDownload(spinnerTemplate: TemplateRef<any>): void {
  //   // Exibe o spinner
  //   const spinnerRef = this.viewContainerRef.createEmbeddedView(spinnerTemplate);

  //   // Inicia o download
  //   const downloadLink = document.createElement('a');
  //   downloadLink.href = 'https://drive.google.com/uc?export=download&id=1bBgi8DJnCRJ4ibr2ToH09i7Tg-UVp09Q';
  //   downloadLink.download = '';
  //   downloadLink.click();

  //   // Remove o spinner após um curto atraso
  //   setTimeout(() => {
  //     this.viewContainerRef.clear();
  //   }, 500); // 500ms é um tempo suficiente para o navegador processar o download
  // }
  
}
