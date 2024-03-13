import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-required-reminder',
  templateUrl: './required-reminder.component.html',
  styleUrls: ['./required-reminder.component.css'],
})
export class RequiredReminderComponent {
  resultado: any;
  xvalue = new FormControl('xvalue', [
    Validators.required,
    Validators.pattern('^[0-9]*$'),
  ]);
  yvalue = new FormControl('yvalue', [
    Validators.required,
    Validators.pattern('^[0-9]*$'),
  ]);
  nvalue = new FormControl('nvalue', [
    Validators.required,
    Validators.pattern('^[0-9]*$'),
  ]);
  formReminder = new FormGroup({
    xvalue: this.xvalue,
    yvalue: this.yvalue,
    nvalue: this.nvalue,
  });

  constructor(private apirequest: ApiRequestService) {}

  submit() {
    this.apirequest
      .getReminders(
        parseInt(this.xvalue.value ?? '0'),
        parseInt(this.yvalue.value ?? '0'),
        parseInt(this.nvalue.value ?? '0')
      )
      .subscribe((data: any) => {
        this.resultado = data.result;
      });
  }
}
