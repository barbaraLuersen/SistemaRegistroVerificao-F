import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEdicaoComponent } from './usuario-edicao.component';

describe('UsuarioEdicaoComponent', () => {
  let component: UsuarioEdicaoComponent;
  let fixture: ComponentFixture<UsuarioEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioEdicaoComponent]
    });
    fixture = TestBed.createComponent(UsuarioEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
