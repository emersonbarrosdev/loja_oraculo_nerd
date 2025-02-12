import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project } from 'src/app/shared/interface/project';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  private apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1q0qmoTwnq5b6Uvei2Ue94C2NjdIpI3rU2KWFHqH0Igw/values/Sheet1?key=AIzaSyDyLyL_oNEewiBVkrqCX23v6jicbAnelVA';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        const rows = response.values;
        const headers = rows.shift(); // Retira os cabeçalhos
        return rows.map((row: string[]) => {
          return {
            image: row[1],         // Coluna Image
            title: row[2],         // Coluna Title
            description: row[3],   // Coluna Description
            link: row[4],           // Coluna Link
            categories: row[5] ? row[5].split(',').map(c => c.trim()) : []
          } as Project;
        });
      })
    );
  }
}
