import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  private readonly backendApi = "https://backend-portfolio-fawn.vercel.app/project";
  // private readonly backendApi = "http://localhost:3000/project";

  private http = inject(HttpClient)

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.backendApi)
      .pipe(
        map((obj) => obj),
        catchError(error => this.errorHandler(error))
      );
  }

  errorHandler(error: any): Observable<any> {
    console.log('Ocorreu um erro!');
    return EMPTY;
  }
}
