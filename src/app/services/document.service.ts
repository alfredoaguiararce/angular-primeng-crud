import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Document } from '../models/document.model';
import { GlobalVariables } from '../classes/global-variables';

/**
 * This class contains methods to access and modify data.
 * DocumentServices, contains CRUD methods.
 * 
 * @void handleError(), Log errors in case.
 * @void getDocuments(), READ all Documents in DataBase as an API.
 * @void getDocumentById(), READ single Document by whit Id.
 * @void deleteDocumentById(), DELETE a single Document whit id.
 */

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  // Our created Data can be accessed here at API/documents
  private apiUrl: string = GlobalVariables.FAKEAPIULR;
  // Define data formats
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private httpOptions = {
    headers: this.headers
  };

  constructor(
    //Injecting HTTP service to communicate with the data
    private http: HttpClient
    ) { }

  
  /**
   * Created a function to handle and log errors, in case
   * @param error, As any type of error.
   * @returns `throwError()`.
   */
  private handleError(error: any) {
    console.error(error);                                       
    return throwError(error);
  }

  /**
   * CREATE `Document` in database using API.
   * @param document, `Document` object created.
   * @returns `Document` object.
   */
  public addDocument (document: Document): Observable<Document> {
    document.id=null;
    return this.http.post<Document>(this.apiUrl, document, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  
  /**
   * READ/GET all `Documents` in database using API.
   * @returns `Document[]`
   */
  public getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  /**
   * READ/GET single `Document` in database using API.
   * @param id, as the id: number from a single `Document`.
   * @returns `Document`.
   */
  public getDocumentById(id: number): Observable<Document> {
    // Get single document 
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Document>(url).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  /**
   * DELETE single `Document` in database using API.
   * @param id, as the id: number from a single `Document`.
   * @returns `Document`.
   */
  public deleteDocumentById(id: number): Observable<Document> {
    // Delete single document.
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Document>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  public updateDocumentById(document: Document): Observable<Document>{
    // Update single document.
    const url = `${this.apiUrl}/${document.id}`;
    return this.http.put<Document>(this.apiUrl, document, this.httpOptions).pipe(
      map(() => document),
      catchError(this.handleError)
    );
  }
}