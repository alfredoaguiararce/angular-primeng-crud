import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
import { Document, fetchDocument } from 'src/app/models/document.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public loading: boolean = false;
  public title: string;
  public author: string;
  public languaje: string;

  public documentId: string;
  public editableDocument: fetchDocument = {
    isActive: true,
    title: "",
    category: "",
    author: "",
    dateCreated: "",
    languaje: "",
  }

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private router: Router) { 
      
    this.documentId = this.route.snapshot.paramMap.get('id');    
    this.documentService.getDocumentById(Number(this.documentId)).subscribe(document =>
      {
        this.editableDocument = document;      
        this.title = this.editableDocument.title;
        this.author = this.editableDocument.author;
        this.languaje = this.editableDocument.languaje;
      }
    );
    }

  ngOnInit(): void {
    console.log(this.editableDocument)
    console.log(this.documentId)
  }

  updateDocument() {
    // deactivate the inputs
    this.loading = !this.loading;
    this.editableDocument.title = this.title;
    this.editableDocument.author = this.author;
    this.editableDocument.languaje = this.languaje;
    console.log(this.title)
    console.log(this.author)
    console.log(this.languaje)
    this.documentService.updateDocument(this.editableDocument).subscribe(()=>{
      // reactivate the inputs
      this.loading = !this.loading;
      // send back to /documents
      this.router.navigate(['/documents']);
    });
  }


}
