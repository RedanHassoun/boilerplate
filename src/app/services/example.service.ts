import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private url : string = '/api/'; 

  constructor(private http: Http) { }

  getAllPeople(){
    return this.http.get(this.url+'getAllPeople')
  }
  
}
