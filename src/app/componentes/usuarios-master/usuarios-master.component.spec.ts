import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosMasterComponent } from './usuarios-master.component';

describe('UsuariosMasterComponent', () => {
  let component: UsuariosMasterComponent;
  let fixture: ComponentFixture<UsuariosMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
