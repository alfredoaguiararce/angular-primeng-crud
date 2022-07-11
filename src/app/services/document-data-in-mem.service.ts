import { Injectable } from '@angular/core';
import { Document } from '../models/document.model';
import {InMemoryDbService} from 'angular-in-memory-web-api';

/**
 * This class implements logic to create the fakeAPI.
 * @returns Document[ ] Used as a JSON response for an API request.
 */

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
          title: "Report 0",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date(),
          languaje: "English",
      },
      {
          id: 1,
          isActive: true,
          title: "Report 1",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date('30-Oct-2017'),
          languaje: "English",
      },
      {
          id: 2,
          isActive: true,
          title: "Report 2",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date('30-Oct-2017'),
          languaje: "English",
      },
      {
          id: 3,
          isActive: true,
          title: "Report 3",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated:new Date('30-Oct-2017'),
          languaje: "English",
      },
      {
          id: 4,
          isActive: true,
          title: "Report 4",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date('30-Oct-2017'),
          languaje: "English",
      },
      {
          id: 5,
          isActive: false,
          title: "Report 5",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date('30-Oct-2017'),
          languaje: "English",
      },
      {
          id: 6,
          isActive: true,
          title: "Report 0",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date(),
          languaje: "English",
      },
      {
          id: 7,
          isActive: true,
          title: "Report 1",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date('30-Oct-2017'),
          languaje: "English",
      },
      {
          id: 8,
          isActive: true,
          title: "Report 2",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date('30-Oct-2017'),
          languaje: "English",
      },
      {
          id: 9,
          isActive: true,
          title: "Report 3",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated:new Date('30-Oct-2017'),
          languaje: "English",
      },
      {
          id: 10,
          isActive: true,
          title: "Report 4",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date('30-Oct-2017'),
          languaje: "English",
      },
      {
          id: 11,
          isActive: false,
          title: "Report 5",
          category: "Create Maker GB",
          author: "Alfredo Aguiar",
          dateCreated: new Date('30-Oct-2017'),
          languaje: "English",
      },

    ];

    // Return database
    return {
      documents
    };
  }
}
