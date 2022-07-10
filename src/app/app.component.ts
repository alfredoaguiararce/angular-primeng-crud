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
  singleDocument: Document = {
    id: 0,
    isActive: false,
    title: "Reporte template",
    category: "Create Maker GB",
    author: "template",
    dateCreated: "Template",
    languaje: "English",
  };
  
  documentTemplate: Document = {
    id: 0,
    isActive: false,
    title: "Reporte template",
    category: "Create Maker GB",
    author: "template",
    dateCreated: "Template",
    languaje: "English",
  };

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
      this.updateUser();
      this.addUser();
      this.addUser();
      this.addUser();
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
    this.documentService.deleteDocumentById(3).subscribe(data => {
      this.loadDocuments()
    });
  }

  idtoUpdate = 5;
  updateUser() {
    this.documentService.getDocumentById(this.idtoUpdate).subscribe(data => {
      this.singleDocument = data;
      this.singleDocument.title = 'Updated title';
      this.documentService.updateDocumentById(this.singleDocument).subscribe(data1 => {
        this.loadDocuments();
      });
    });
  }

  addUser() {

    this.documentService.addDocument(this.documentTemplate).subscribe(data => {
      this.singleDocument = data;
      console.log("New document id: " + this.singleDocument.id);
    });
    this.loadDocuments();
  }


}
