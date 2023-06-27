import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceMenuComponent } from './voce-menu.component';

describe('VoceMenuComponent', () => {
  let component: VoceMenuComponent;
  let fixture: ComponentFixture<VoceMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceMenuComponent]
    });
    fixture = TestBed.createComponent(VoceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
