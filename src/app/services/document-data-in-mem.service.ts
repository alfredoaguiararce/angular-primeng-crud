import { Injectable } from '@angular/core';
import { Document } from '../models/document.model';
import {InMemoryDbService} from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})

export class DocumentDataInMemService implements InMemoryDbService{
  createDb(){
    // Define Db as an array of Document[] model
    // IMPORTANT the name of the variable defines the url api
    // in this case API/documents
    const documents: Document[]=[
      {
          id: 0,
          isActive: true,
          title: "Report 1",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: "17/10/2022",
          languaje: "English",
      },
      {
          id: 1,
          isActive: true,
          title: "Report 1",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: "17/10/2022",
          languaje: "English",
      },
      {
          id: 2,
          isActive: true,
          title: "Report 1",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: "17/10/2022",
          languaje: "English",
      },
      {
          id: 3,
          isActive: true,
          title: "Report 1",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: "17/10/2022",
          languaje: "English",
      },
      {
          id: 4,
          isActive: true,
          title: "Report 1",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: "17/10/2022",
          languaje: "English",
      },
      {
          id: 5,
          isActive: true,
          title: "Report 5",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: "17/10/2022",
          languaje: "English",
      },

    ];

    // Return database
    return {
      documents
    };
  }
}
