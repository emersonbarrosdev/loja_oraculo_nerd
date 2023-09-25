import { Component, OnInit, inject } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  showLoading: boolean;
  public projectData: Project[] = [];
  private service = inject(PortfolioService);

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    this.showLoading = true;
    setTimeout(() => {
      this.service.getProjects().subscribe({
        next: (resp) => {
          if (resp) {
            this.showLoading = false;
            this.projectData = resp;
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
