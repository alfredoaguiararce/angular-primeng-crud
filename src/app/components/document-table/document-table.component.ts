import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Document, fetchDocument } from 'src/app/models/document.model';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {

  public documents: Document[];
  public loading: boolean = true;
  public modifyDocument: fetchDocument;

  constructor(private documentService: DocumentService) {
  }

  ngOnInit(): void {
  }

  loadDocuments(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      this.documentService.getDocuments().subscribe(
        data => {
          this.documents = data,
          this.loading = false
        }
      );
    }, 500);
  }

  toggleActivate(id: fetchDocument){
    console.log("ddxsd");
  }

  updateDocument(document:fetchDocument) {
    this.modifyDocument = document;
    this.modifyDocument.isActive = !this.modifyDocument.isActive;
    this.documentService.updateDocument(this.modifyDocument).subscribe();
  }
}
