import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHomePageComponent } from './private-home-page.component';

describe('PrivateHomePageComponent', () => {
  let component: PrivateHomePageComponent;
  let fixture: ComponentFixture<PrivateHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
