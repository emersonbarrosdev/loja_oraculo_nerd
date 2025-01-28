import { Component, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { GoogleSheetsService } from 'src/app/core/service/google-sheets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private viewContainerRef: ViewContainerRef) {}

  startDownload(spinnerTemplate: TemplateRef<any>): void {
    // Exibe o spinner
    const spinnerRef = this.viewContainerRef.createEmbeddedView(spinnerTemplate);

    // Inicia o download
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=1bBgi8DJnCRJ4ibr2ToH09i7Tg-UVp09Q';
    downloadLink.download = '';
    downloadLink.click();

    // Remove o spinner após um curto atraso
    setTimeout(() => {
      this.viewContainerRef.clear();
    }, 500); // 500ms é um tempo suficiente para o navegador processar o download
  }
  
}
