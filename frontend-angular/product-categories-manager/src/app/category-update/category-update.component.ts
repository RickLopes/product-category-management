import { Component, OnInit } from "@angular/core";
import { RestApi } from "../shared/rest-api";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-category-update",
  templateUrl: "./category-update.component.html",
  styleUrls: ["./category-update.component.css"]
})
export class CategoryUpdateComponent implements OnInit {
  
  id = this.actRoute.snapshot.params["id"];
  categoryData: any = [];

  constructor(
    public restApi: RestApi,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.restApi.getCategory(this.id).subscribe((data: {}) => {
      this.categoryData = data;
    });
  }

  updateCategory() {
    if (window.confirm("Are you sure, you want to update?")) {
      this.restApi
        .updateCategory(this.id, this.categoryData)
        .subscribe(data => {
          this.router.navigate(["/category-list"]);
        });
    }
  }
}
