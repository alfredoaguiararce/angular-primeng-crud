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
    return this.http.get<Document[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
}