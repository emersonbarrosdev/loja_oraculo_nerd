import { Component, OnInit, inject } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { Project } from '../../models/project';
import { GoogleSheetsService } from 'src/app/core/service/google-sheets.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  showLoading: boolean;
  public projectData: Project[] = [];
  public project!: Project;
  
  constructor(private googleSheetsService: GoogleSheetsService) {}


  ngOnInit(): void {
    this.getProject();
    this.googleSheetsService.getProjects().subscribe(response => {
      console.log('Dados da API do Google Sheets:', response);
      this.project = response[0];
      console.log(this.project.image)
    });
  }

  getProject() {
    this.showLoading = true;
    setTimeout(() => {
      this.googleSheetsService.getProjects().subscribe({
        next: (resp) => {
          if (resp) {
            this.showLoading = false;
            this.projectData = resp.reverse();
          }
        },
        error: err => {
          this.showLoading = false;
          console.error(err)
        },
      });
    }, 1000);
  }

}
