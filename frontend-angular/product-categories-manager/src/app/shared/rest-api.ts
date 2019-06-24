import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../shared/category';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})

export class RestApi {
    apiURL = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    }
    
    // HttpClient API get() method => Fetch category list
    getCategories(): Observable<Category> {
        return this.http.get<Category>(this.apiURL + '/product_category')
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }
    
    // HttpClient API get() method => Fetch Category
    getCategory(id): Observable<Category> {
        return this.http.get<Category>(this.apiURL + '/product_category/' + id)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }  
    
    // HttpClient API post() method => Create category
    createCategory(category): Observable<Category> {
        return this.http.post<Category>(this.apiURL + '/product_category/', JSON.stringify(category), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }  
    
    // HttpClient API put() method => Update category
    updateCategory(id, category): Observable<Category> {
        return this.http.put<Category>(this.apiURL + '/product_category/' + id, JSON.stringify(category), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }
    
    // HttpClient API delete() method => Delete category
    deleteCategory(id){
        return this.http.delete<Category>(this.apiURL + '/product_category/' + id, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }


    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    };

}
