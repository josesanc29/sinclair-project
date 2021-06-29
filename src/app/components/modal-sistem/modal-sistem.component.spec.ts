import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSistemComponent } from './modal-sistem.component';

describe('ModalSistemComponent', () => {
  let component: ModalSistemComponent;
  let fixture: ComponentFixture<ModalSistemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSistemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSistemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
