import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodol } from './list/model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //add Employee
  addemployee(data: datamodol) {
    return this.http.post<datamodol>("http://localhost:3000/empData", data)

  }
  //getData
  getemployee() {
    return this.http.get<datamodol[]>("http://localhost:3000/empData");
  }
  //delete data
  deleteemployee(id: number) {
    return this.http.delete<datamodol>("http://localhost:3000/empData/" + id);
  }
  //fatch data
  fetchdata(id: number) {
    return this.http.get<datamodol>("http://localhost:3000/empData/" + id);
  }
  //update data
  updateemployee(data: datamodol, id: number) {
    return this.http.put<datamodol>("http://localhost:3000/empData/" + id, data);
  }
}


