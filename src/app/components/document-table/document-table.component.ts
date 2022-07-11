import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from 'src/app/models/document.model';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {

  public documents: Document[];
  public loading: boolean = true;

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

}
