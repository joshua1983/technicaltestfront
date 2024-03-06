import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequiredReminderComponent } from './components/required-reminder/required-reminder.component';

const routes: Routes = [
  {
    path: 'reminder',
    component: RequiredReminderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
