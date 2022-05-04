import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlisttestingComponent } from './hostlisttesting.component';

describe('HostlisttestingComponent', () => {
  let component: HostlisttestingComponent;
  let fixture: ComponentFixture<HostlisttestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostlisttestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlisttestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
