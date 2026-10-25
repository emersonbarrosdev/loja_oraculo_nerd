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
        const rows = response.values || [];
        rows.shift();

        return rows
          .filter((row: string[]) => row?.length)
          .map((row: string[]) => ({
            id: Number(row[0]),
            image: row[1],
            title: row[2],
            description: row[3],
            link: row[4],
            categories: row[5] ? row[5].split(',').map(c => c.trim()) : []
          } as Project));
      })
    );
  }
}
