import { Component, OnInit } from '@angular/core';
import { DocumentService } from './services/document.service';
import { Document, fetchDocument, updateDocument } from './models/document.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  // Global variable to manage the loaded data.
  documents: Document[] = [];
  title: string = 'tabla';
  singleDocument: updateDocument;
  
  documentTemplate: updateDocument = {
    isActive: false,
    title: "Reporte template",
    category: "Create Maker GB",
    author: "template",
    dateCreated: "Template",
    languaje: "English",
  };

  documentTUpdated: updateDocument = {
    isActive: false,
    title: "Reporte template updated",
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
      this.deleteDocument();
      this.addDocument();
      this.addDocument();
      this.addDocument();
      this.updateDocument();
      // this.documentService.updateDocumentById(0, this.documentTUpdated).subscribe();
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

  deleteDocument() {
    this.documentService.deleteDocumentById(5).subscribe(data => {
      this.loadDocuments()
    });
  }

  idtoUpdate = 2;
  updateDocument() {
    this.documentService.getDocumentById(this.idtoUpdate).subscribe(data => {
      this.singleDocument = data;
      this.singleDocument.title = 'Updated u.u'
      this.documentService.updateDocument(this.singleDocument).subscribe(data1 => {
        this.loadDocuments();
      });
    });
  }

  addDocument() {
    const fetchDocument: fetchDocument ={
      isActive: false,
      title: "Add template",
      category: "Create Maker GB",
      author: "template",
      dateCreated: "Template",
      languaje: "English",
    }
    this.documentService.addDocument(fetchDocument).subscribe(data => {
      console.log("New document id: " + fetchDocument);
    });
    this.loadDocuments();
  }


}
