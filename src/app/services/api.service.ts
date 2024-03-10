import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseurl:string = "http://localhost:3000/enquiry"
  constructor(private http: HttpClient) { }

  postRegistration (registerObj: User): Observable<User>{
    return this.http.post<User>(`${this.baseurl}`,registerObj)
  }

  getRegisterUser(): Observable<User[]>{
    return this.http.get<User[]> (`${this.baseurl}`)
  }

  updateRegisterUser(registerObj: User, id: number): Observable<User>{
    return this.http.put<User>(`${this.baseurl}/${id}`,registerObj)
  }

  deleteRegisterUser(id: number): Observable<User>{
    return this.http.delete<User>(`${this.baseurl}/${id}`)
  }

  getRegisteredUserId(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseurl}/${id}`)
  }
}
