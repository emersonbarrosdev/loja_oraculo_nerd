import { Component, OnInit, inject } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public projectData: Project[] = [];
  private service = inject(PortfolioService);

  ngOnInit(): void {
    this.service.getProjects().subscribe({
      next: (resp) => {
        if (resp) {
          this.projectData = resp;
        }
      },
      error: err => console.error(err),
    });
  }

  getProject() {
    this.service.getProjects().subscribe({
      next: (resp) => {
        if (resp) {
          this.projectData = resp;
        }
      },
      error: err => console.error(err),
    });
  }

}
