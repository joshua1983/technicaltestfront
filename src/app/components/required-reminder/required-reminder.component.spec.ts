import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RequiredReminderComponent } from './required-reminder.component';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { By } from '@angular/platform-browser';

describe('Validacion del formulario', () => {
  let formComponent: RequiredReminderComponent;
  let formComponentFixture: ComponentFixture<RequiredReminderComponent>;
  let service: ApiRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [RequiredReminderComponent],
      providers: [ApiRequestService],
    }).compileComponents();
  });

  beforeEach(() => {
    formComponentFixture = TestBed.createComponent(RequiredReminderComponent);
    formComponent = formComponentFixture.componentInstance;
    service = TestBed.inject(ApiRequestService);
    formComponentFixture.detectChanges();
  });

  it('El componente debe crearse', () => {
    expect(formComponent).toBeTruthy();
  });

  it('Con todos los valores el formulario debe ser valido', () => {
    const xvalue = formComponent.formReminder.controls.xvalue;
    const yvalue = formComponent.formReminder.controls.yvalue;
    const nvalue = formComponent.formReminder.controls.nvalue;
    xvalue.setValue('1');
    yvalue.setValue('2');
    nvalue.setValue('3');
    expect(formComponent.formReminder.valid).toBeTruthy();
  });

  it('si falta algun valor el formulario debe ser inválido', () => {
    const xvalue = formComponent.formReminder.controls.xvalue;
    const yvalue = formComponent.formReminder.controls.yvalue;
    const nvalue = formComponent.formReminder.controls.nvalue;
    xvalue.setValue('');
    yvalue.setValue('2');
    nvalue.setValue('3');
    expect(formComponent.formReminder.valid).toBeFalsy();
  });

  it('si se ingresan valores no numericos el formulario debe ser inválido', () => {
    const xvalue = formComponent.formReminder.controls.xvalue;
    const yvalue = formComponent.formReminder.controls.yvalue;
    const nvalue = formComponent.formReminder.controls.nvalue;
    xvalue.setValue('a');
    yvalue.setValue('2');
    nvalue.setValue('3');
    expect(formComponent.formReminder.valid).toBeFalsy();
  });

  it('si se ingresan valores negativos el formulario debe ser inválido', () => {
    const xvalue = formComponent.formReminder.controls.xvalue;
    const yvalue = formComponent.formReminder.controls.yvalue;
    const nvalue = formComponent.formReminder.controls.nvalue;
    xvalue.setValue('-1');
    yvalue.setValue('2');
    nvalue.setValue('3');
    expect(formComponent.formReminder.valid).toBeFalsy();
  });

  it('si se ingresan valores decimales el formulario debe ser inválido', () => {
    const xvalue = formComponent.formReminder.controls.xvalue;
    const yvalue = formComponent.formReminder.controls.yvalue;
    const nvalue = formComponent.formReminder.controls.nvalue;
    xvalue.setValue('1.5');
    yvalue.setValue('2');
    nvalue.setValue('3');
    expect(formComponent.formReminder.valid).toBeFalsy();
  });
});
