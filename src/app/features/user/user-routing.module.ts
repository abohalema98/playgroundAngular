import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditPorfileComponent } from './profile/edit-porfile/edit-porfile.component';


const routes: Routes = [
  {path:"",component:ProfileComponent,children:[
    // {path:"add",component:AdddepartmentComponent},
    // {path:"details",component:DetailsdepartmentComponent},

  ]},
  {path:"EditProfile",component:EditPorfileComponent}
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
