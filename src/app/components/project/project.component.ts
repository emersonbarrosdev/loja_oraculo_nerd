import { Component, inject } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  private service = inject(PortfolioService);

  getProjetc() {
    this.service.getProjects().subscribe(
      project => console.log(project)
    );
  }
}
