import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryLvOneComponent } from './sub-category-lv-one.component';

describe('SubCategoryLvOneComponent', () => {
  let component: SubCategoryLvOneComponent;
  let fixture: ComponentFixture<SubCategoryLvOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryLvOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryLvOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
