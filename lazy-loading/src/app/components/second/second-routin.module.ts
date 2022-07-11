import { NgModule } from '@angular/core';
import { SecondComponent } from './second.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: SecondComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutinModule { }
