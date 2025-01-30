import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPositionCard]',
  standalone: true 
})
export class PositionCardDirective {

  private isDragging = false;
  private offsetX: number;
  private offsetY: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;

    this.offsetX = event.clientX;
    this.offsetY = event.clientY;

    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grabbing');
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.isDragging) {
      this.isDragging = false;
      this.renderer.removeStyle(this.el.nativeElement, 'cursor');
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const x = event.clientX - this.offsetX;
      const y = event.clientY - this.offsetY;

      // Define a nova posição do elemento para que o mouse fique no centro
      this.renderer.setStyle(this.el.nativeElement, 'left', x + 'px');
      this.renderer.setStyle(this.el.nativeElement, 'top', y + 'px');
    }
  }

}
