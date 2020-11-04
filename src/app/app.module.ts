import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCardComponent } from './categories/category-card/category-card.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import {CardModule} from 'primeng/card';
import { CommonModule } from '@angular/common';
import { SubCategoryLvOneComponent } from './sub-category-lv-one/sub-category-lv-one.component';
import { SubCategoryLvTwoComponent } from './sub-category-lv-two/sub-category-lv-two.component';
import { SubCategoryLvThreeComponent } from './sub-category-lv-three/sub-category-lv-three.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryCardComponent,
    CategoryViewComponent,
    SubCategoryLvOneComponent,
    SubCategoryLvTwoComponent,
    SubCategoryLvThreeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
