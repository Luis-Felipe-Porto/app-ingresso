import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './ApiService';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class TicketService{
    public reg_url = " http://localhost:8080";

    constructor(private http:HttpClient, private apiService:ApiService) { }

    getTickets():Observable<any>{
        return this.apiService.get(this.reg_url + '/v1/rave/?page=0&size=10&sort=id');
    }

}