import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { ApiService } from './ApiService';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public login_url = " http://localhost:8080";
  public reg_url = " http://localhost:8080";

  constructor(private http:HttpClient, private apiService:ApiService) { }
  authLogin(user_name:any, password:any):Observable<any>{
    return this.apiService.get(this.login_url+'/user?email='+user_name+'&password='+password);
  }

  userRegister(user_dto:any):Observable<any>{
    return this.apiService.post(this.reg_url+'/v1/signIn',user_dto);
  }

  adminLogin(user_name:any, password:any):Observable<any>{
    return this.apiService.get(this.login_url+'/user?email='+user_name+'&password='+password+'&role=admin');
  }
 
}
