import { Component, OnInit } from '@angular/core';
import { DocumentService } from './services/document.service';
import { Document } from './models/document.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  // Global variable to manage the loaded data.
  documents: Document[] = [];
  title: string = 'tabla';
  singleDocument: Document;

  constructor(
    // Use service to load Data
    private documentService: DocumentService
  ){}

  ngOnInit(): void {
      this.loadDocuments()
      console.log('init app module');
      console.log(this.documents);
      this.getSingleDocument();
      this.delete();
  }

  loadDocuments(): void{
    this.documentService.getDocuments().subscribe(data => {
      this.documents = data;
    });
  }

  getSingleDocument() {
    this.documentService.getDocumentById(2).subscribe(data => {
      this.singleDocument = data;
    });
  }

  delete() {
    this.documentService.deleteDocumentById(5).subscribe(data => {
      this.loadDocuments()
    });
  }



}
