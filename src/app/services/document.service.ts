import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  // Our created Data can be accessed here at API/documents
  apiUrl: string = 'API/documents';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(
    //Injecting HTTP service to communicate with the data
    private http: HttpClient
    ) { }

  
  private handleError(error: any) {
    //Created a function to handle and log errors, in case
    console.error(error);                                       
    return throwError(error);
  }
  
  getDocuments(): Observable<Document[]> {
    // Get all documents in database
    return this.http.get<Document[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getDocumentById(id: number): Observable<Document> {
    // Get single document 
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Document>(url).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteDocumentById(id: number): Observable<Document> {
    // Delete single document
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Document>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}