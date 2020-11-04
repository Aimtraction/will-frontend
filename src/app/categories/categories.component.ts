import { Component, OnInit } from '@angular/core';
import uuid from 'uuid';
import { MockServiceService } from '../services/mock-service.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories;
  constructor(private service: MockServiceService) { }

  ngOnInit(): void {
    this.categories = this.service.getCategories();
    console.log(JSON.stringify(this.categories));
  }

}
