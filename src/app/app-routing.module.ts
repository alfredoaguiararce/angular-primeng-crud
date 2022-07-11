import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { EditorComponent } from './components/editor/editor.component';
import { CreateeditorComponent } from './createeditor/createeditor.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'documents',
    pathMatch:'full',
  },
  {
    path:'documents',
    children:[
      {
        path:'',
        component: DocumentTableComponent
      },
      {
        path:'edit/:id',
        component:EditorComponent,
      },
      {
        path:'add',
        component: CreateeditorComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
