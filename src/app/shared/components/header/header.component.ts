import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

type StoreTheme = 'dark' | 'light';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  showSpinner = false;
  theme: StoreTheme = 'dark';

  ngOnInit(): void {
    this.checkScreenSize();
    this.initializeTheme();
  }

  get themeLabel(): string {
    return this.theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro';
  }

  toggleTheme(): void {
    this.applyTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  startDownload(): void {
    this.showSpinner = true;

    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=1bBgi8DJnCRJ4ibr2ToH09i7Tg-UVp09Q';
    downloadLink.download = '';
    downloadLink.click();

    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('oraculo-theme') as StoreTheme | null;
    const preferredTheme: StoreTheme = window.matchMedia?.('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';

    this.applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferredTheme, false);
  }

  private applyTheme(theme: StoreTheme, persist = true): void {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);

    if (persist) {
      localStorage.setItem('oraculo-theme', theme);
    }
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }
}
