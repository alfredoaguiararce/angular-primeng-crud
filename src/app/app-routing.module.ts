import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { EditorComponent } from './components/editor/editor.component';


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
        path:'editor/:id',
        component:EditorComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
