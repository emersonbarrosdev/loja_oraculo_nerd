import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
