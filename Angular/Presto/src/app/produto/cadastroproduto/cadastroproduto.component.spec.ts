import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroprodutoComponent } from './cadastroproduto.component';

describe('CadastroprodutoComponent', () => {
  let component: CadastroprodutoComponent;
  let fixture: ComponentFixture<CadastroprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
