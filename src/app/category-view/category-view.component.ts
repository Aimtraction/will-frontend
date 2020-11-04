import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockServiceService } from '../services/mock-service.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  category$;

  constructor(private service: MockServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    //this.category$ = this.service.getCategory(this.route['_futureSnapshot'].params.id)
    console.log("param id", this.route['_futureSnapshot'].params.id);
    this.category$ = this.service.getCategory(this.route['_futureSnapshot'].params.id).pipe(
      switchMap((x: any) => {
        console.log(x.children); 
        return this.service.getCategoriesByIds(x.children)
  
      })
    )
  }
}
