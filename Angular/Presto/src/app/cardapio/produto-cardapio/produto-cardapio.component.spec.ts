import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCardapioComponent } from './produto-cardapio.component';

describe('ProdutoCardapioComponent', () => {
  let component: ProdutoCardapioComponent;
  let fixture: ComponentFixture<ProdutoCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
