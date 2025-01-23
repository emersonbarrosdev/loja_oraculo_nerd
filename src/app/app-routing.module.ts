import { NgModule } from '@angular/core';
import { HomeComponent } from './portfolio/components/home/home.component';
import { ProjectComponent } from './portfolio/components/project/project.component';
import { ProjectCardComponent } from './portfolio/components/project-card/project-card.component';
import { RouterModule, Routes } from '@angular/router';
;

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
