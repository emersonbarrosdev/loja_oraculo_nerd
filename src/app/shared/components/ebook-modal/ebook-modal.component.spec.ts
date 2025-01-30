import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookModalComponent } from './ebook-modal.component';

describe('EbookModalComponent', () => {
  let component: EbookModalComponent;
  let fixture: ComponentFixture<EbookModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EbookModalComponent]
    });
    fixture = TestBed.createComponent(EbookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
