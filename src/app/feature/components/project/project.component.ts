import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../shared/interface/project';
import { GoogleSheetsService } from 'src/app/core/service/google-sheets.service';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ScrollButtonComponent } from 'src/app/shared/components/scroll-button/scroll-button.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProjectCardComponent,
    ScrollButtonComponent
  ],
})
export class ProjectComponent implements OnInit {
  showLoading: boolean;
  public projectData: Project[] = [];
  public project!: Project;
  public searchControl = new FormControl('');
  public filteredProjectData: Project[] = [];

  constructor(private googleSheetsService: GoogleSheetsService) {}

  ngOnInit(): void {
    this.getProject();

    this.searchControl.valueChanges.subscribe((query: string) => {
      const normalizedQuery = query?.toLowerCase().trim() || '';
      this.filteredProjectData = this.projectData.filter(
        (project) =>
          project.title.toLowerCase().includes(normalizedQuery) ||
          project.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }

  getProject() {
    this.showLoading = true;
    this.googleSheetsService.getProjects().subscribe({
      next: (resp) => {
        if (resp) {
          this.showLoading = false;
          this.projectData = resp.reverse();
          console.log(this.projectData);
          this.filteredProjectData = [...this.projectData];
        }
      },
      error: (err) => {
        this.showLoading = false;
        console.error(err);
      },
    });
  }
}
