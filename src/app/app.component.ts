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

  constructor(
    // Use service to load Data
    private documentService: DocumentService
  ){}

  ngOnInit(): void {
      this.loadDocuments()
      console.log('init app module');
      console.log(this.documents)
  }

  loadDocuments(): void{
    this.documentService.getDocuments().subscribe(data => {
      this.documents = data;
    });
  }

}
