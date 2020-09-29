import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioDetailComponent } from './cardapio-detail.component';

describe('CardapioDetailComponent', () => {
  let component: CardapioDetailComponent;
  let fixture: ComponentFixture<CardapioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
