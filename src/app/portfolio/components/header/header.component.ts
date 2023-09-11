import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private router = inject(Router)

  isButtonActive(route: string): boolean {
    return this.router.url.split('?')[0] === route.split('?')[0];
  }

}
