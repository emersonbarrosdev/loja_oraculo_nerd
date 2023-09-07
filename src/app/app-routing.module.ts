import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { AboutComponent } from './portfolio/components/about/about.component';
import { ContactComponent } from './portfolio/components/contact/contact.component';
import { HomeComponent } from './portfolio/components/home/home.component';
import { ProjectComponent } from './portfolio/components/project/project.component';
import { ProjectCardComponent } from './portfolio/components/project-card/project-card.component';
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
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  } ,
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
