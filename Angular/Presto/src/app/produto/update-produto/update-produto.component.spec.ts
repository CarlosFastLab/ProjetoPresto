import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProdutoComponent } from './update-produto.component';

describe('UpdateProdutoComponent', () => {
  let component: UpdateProdutoComponent;
  let fixture: ComponentFixture<UpdateProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
