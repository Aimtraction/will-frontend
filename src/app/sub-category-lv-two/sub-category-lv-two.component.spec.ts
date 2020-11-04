import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryLvTwoComponent } from './sub-category-lv-two.component';

describe('SubCategoryLvTwoComponent', () => {
  let component: SubCategoryLvTwoComponent;
  let fixture: ComponentFixture<SubCategoryLvTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryLvTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryLvTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
