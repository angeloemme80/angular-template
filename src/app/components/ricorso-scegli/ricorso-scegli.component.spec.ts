import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicorsoScegliComponent } from './ricorso-scegli.component';

describe('RicorsoScegliComponent', () => {
  let component: RicorsoScegliComponent;
  let fixture: ComponentFixture<RicorsoScegliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RicorsoScegliComponent]
    });
    fixture = TestBed.createComponent(RicorsoScegliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
