import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoryComponent } from './bory.component';

describe('BoryComponent', () => {
  let component: BoryComponent;
  let fixture: ComponentFixture<BoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
