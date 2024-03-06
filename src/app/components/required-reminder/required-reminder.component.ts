import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-required-reminder',
  templateUrl: './required-reminder.component.html',
  styleUrls: ['./required-reminder.component.css'],
})
export class RequiredReminderComponent {
  resultado: any;
  formReminder = this.formBuilder.group({
    xvalue: '',
    yvalue: '',
    nvalue: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private apirequest: ApiRequestService
  ) {}

  submit() {
    this.apirequest
      .getReminders(
        this.formReminder.value.xvalue,
        this.formReminder.value.yvalue,
        this.formReminder.value.nvalue
      )
      .subscribe((data: any) => {
        this.resultado = data.result;
        console.log('Data from the server : ', data);
      });
  }
}
