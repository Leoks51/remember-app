import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
