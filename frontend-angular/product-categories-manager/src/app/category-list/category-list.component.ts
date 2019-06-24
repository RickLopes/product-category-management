import { Component, OnInit } from "@angular/core";
import { RestApi } from "../shared/rest-api";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"]
})

export class CategoryListComponent implements OnInit {
  Category: any = [];

  constructor(public restApi: RestApi) {}

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    return this.restApi.getCategories().subscribe((data: {}) => {
      this.Category = data;
    });
  }

  deleteCategory(id) {
    if (window.confirm("Are you sure you want to delete this?")) {
      this.restApi.deleteCategory(id).subscribe(data => {
        this.loadCategory();
      });
    }
  }
}
