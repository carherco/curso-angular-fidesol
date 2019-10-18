import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurePipeComponent } from './impure-pipe.component';

describe('ImpurePipeComponent', () => {
  let component: ImpurePipeComponent;
  let fixture: ComponentFixture<ImpurePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpurePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpurePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
