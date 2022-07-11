import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVariables } from 'src/app/classes/global-variables';
import { DocumentService } from 'src/app/services/document.service';
import { Document, fetchDocument } from 'src/app/models/document.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public documentId: string;
  public editableDocument: fetchDocument;

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService) { 
      
    this.documentId = this.route.snapshot.paramMap.get('id');    
    this.documentService.getDocumentById(Number(this.documentId)).subscribe(document =>
      this.editableDocument = document
      );
    }

  ngOnInit(): void {
    console.log(this.editableDocument)
    console.log(this.documentId)
  }

}
