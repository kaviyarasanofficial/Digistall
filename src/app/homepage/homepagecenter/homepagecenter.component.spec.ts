import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagecenterComponent } from './homepagecenter.component';

describe('HomepagecenterComponent', () => {
  let component: HomepagecenterComponent;
  let fixture: ComponentFixture<HomepagecenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepagecenterComponent]
    });
    fixture = TestBed.createComponent(HomepagecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
