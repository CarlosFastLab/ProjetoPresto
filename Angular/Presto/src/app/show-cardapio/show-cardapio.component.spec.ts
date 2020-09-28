import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardapioComponent } from './show-cardapio.component';

describe('ShowCardapioComponent', () => {
  let component: ShowCardapioComponent;
  let fixture: ComponentFixture<ShowCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
