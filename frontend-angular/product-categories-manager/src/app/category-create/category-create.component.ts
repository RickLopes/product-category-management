import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApi } from "../shared/rest-api";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  @Input() categoryDetails = { category: '', description: '' };

  constructor(
    public restApi: RestApi, 
    public router: Router
  ){};

  ngOnInit() {};

  addCategory(dataCategory) {
    this.restApi.createCategory(this.categoryDetails).subscribe((data: {}) => {
    this.router.navigate(['/category-list'])
    })
  }

}
