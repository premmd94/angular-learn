import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
private url: string = '../assets/json/employee.json'
  constructor(private http: Http) { }

  getCompany() {
    return this.http.get(this.url)
    .map((res: Response) => res.json());
  }
}
