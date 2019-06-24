import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'category-list' },
{ path: 'create-category', component: CategoryCreateComponent },
{ path: 'update-category/:id', component: CategoryUpdateComponent },
{ path: 'category-list', component: CategoryListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
