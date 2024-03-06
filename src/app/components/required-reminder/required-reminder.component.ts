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
    xvalue: '' || 0,
    yvalue: '' || 0,
    nvalue: '' || 0,
  });

  constructor(
    private formBuilder: FormBuilder,
    private apirequest: ApiRequestService
  ) {}

  submit() {
    this.apirequest
      .getReminders(
        this.formReminder.value.xvalue ?? 0,
        this.formReminder.value.yvalue ?? 0,
        this.formReminder.value.nvalue ?? 0
      )
      .subscribe((data: any) => {
        this.resultado = data.result;
      });
  }
}
