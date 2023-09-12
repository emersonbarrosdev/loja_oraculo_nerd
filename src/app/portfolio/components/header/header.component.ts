import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mobileQuery: MediaQueryList;
  constructor(
    private router: Router,
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 650px)');
    this.mobileQuery.addListener(() => changeDetectorRef.detectChanges());
  }

  ngOnInit() {

  }

  get isMobile(): boolean {
    return this.mobileQuery.matches;
  }

  isButtonActive(route: string): boolean {
    return this.router.url.split('?')[0] === route.split('?')[0];
  }

}
