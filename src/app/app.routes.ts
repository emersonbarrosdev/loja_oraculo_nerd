import { Routes } from '@angular/router';
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';
import { HomeComponent } from './feature/components/home/home.component';
import { ProjectComponent } from './feature/components/project/project.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'project-card',
    component: ProjectCardComponent
  }
];
