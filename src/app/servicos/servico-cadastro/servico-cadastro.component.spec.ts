import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCadastroComponent } from './servico-cadastro.component';

describe('ServicoCadastroComponent', () => {
  let component: ServicoCadastroComponent;
  let fixture: ComponentFixture<ServicoCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicoCadastroComponent]
    });
    fixture = TestBed.createComponent(ServicoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
