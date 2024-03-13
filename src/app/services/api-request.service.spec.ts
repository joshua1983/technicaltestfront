import { TestBed } from '@angular/core/testing';
import { ApiRequestService } from './api-request.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';

describe('ApiRequestService', () => {
  let service: ApiRequestService;
  let httpController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiRequestService, HttpClient],
    });
    service = TestBed.inject(ApiRequestService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 12339', () => {
    const expectedResponse = {
      result: 12339,
    };
    const x = 7;
    const y = 5;
    const n = 12345;

    service.getReminders(x, y, n).subscribe((data) => {
      expect(data).toEqual(expectedResponse);
    });

    httpController
      .expectOne('http://localhost:8080/required-remainder?x=7&y=5&n=12345')
      .flush(expectedResponse);
  });
});
