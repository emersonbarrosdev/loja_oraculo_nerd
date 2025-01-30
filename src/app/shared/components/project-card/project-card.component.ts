import { Component, Input } from '@angular/core';
import { Project } from '../../interface/project';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { TruncatePipe } from './truncate.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: true,
  imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      MatTooltipModule,
      MatCardModule,
      TruncatePipe,
      MatButtonModule
    ],
})
export class ProjectCardComponent {

  imageUrl: string;
  @Input() project: Project;
}
