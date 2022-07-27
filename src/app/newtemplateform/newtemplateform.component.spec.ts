import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtemplateformComponent } from './newtemplateform.component';

describe('NewtemplateformComponent', () => {
  let component: NewtemplateformComponent;
  let fixture: ComponentFixture<NewtemplateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtemplateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
