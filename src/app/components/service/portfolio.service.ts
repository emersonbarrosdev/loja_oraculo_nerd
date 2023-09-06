import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private readonly backendApi = "https://backend-portfolio-fawn.vercel.app";
  private http = inject(HttpClient)

  getProjects() {
    return this.http.get(this.backendApi);
  }

}
