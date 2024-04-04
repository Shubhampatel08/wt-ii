import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailStudentComponent } from './Components/detail-student/detail-student.component';
import { EmployeeComponent } from './Components/employee/employee.component';


const routes: Routes = [
  {path:'',component:EmployeeComponent},
  {path:'student/:id',component:DetailStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
