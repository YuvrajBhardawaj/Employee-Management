import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/admin/employees');
  }
  getTasks(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/admin/tasks');
  }
  getEmpTasks(id : string): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/admin/employee/${id}`)
  }
}
