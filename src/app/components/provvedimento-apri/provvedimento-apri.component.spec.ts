import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvvedimentoApriComponent } from './provvedimento-apri.component';

describe('ProvvedimentoApriComponent', () => {
  let component: ProvvedimentoApriComponent;
  let fixture: ComponentFixture<ProvvedimentoApriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvvedimentoApriComponent]
    });
    fixture = TestBed.createComponent(ProvvedimentoApriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
