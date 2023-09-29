import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './portfolio/components/about/about.component';
import { HomeComponent } from './portfolio/components/home/home.component';
import { ProjectComponent } from './portfolio/components/project/project.component';
import { ProjectCardComponent } from './portfolio/components/project-card/project-card.component';
import {MatMenuModule} from '@angular/material/menu';
import { PositionCardDirective } from './portfolio/directive/position-card.directive';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ScrollButtonComponent } from './portfolio/components/scroll-button/scroll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    AboutComponent,
    ProjectCardComponent,
    PositionCardDirective,
    ScrollButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
