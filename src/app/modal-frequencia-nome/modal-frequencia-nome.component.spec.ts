import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFrequenciaNomeComponent } from './modal-frequencia-nome.component';

describe('ModalFrequenciaNomeComponent', () => {
  let component: ModalFrequenciaNomeComponent;
  let fixture: ComponentFixture<ModalFrequenciaNomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFrequenciaNomeComponent]
    });
    fixture = TestBed.createComponent(ModalFrequenciaNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
