import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './ApiService';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';

@Injectable({
    providedIn: 'root'
  })
export class TicketService{
    public reg_url = " http://localhost:8080";

    constructor(private auth:AuthService,private http:HttpClient, private apiService:ApiService) { }

    getTickets():Observable<any>{
        return this.apiService.get(this.reg_url + '/v1/rave/?page=0&size=10&sort=id');
    }
    getTicketsByPeople():Observable<any>{
        const id = this.auth.getPid();
        return this.apiService.get(this.reg_url + '/v1/management/'+id+'/tickets');
    }
    getTicketById(idTicket:string) :Observable<any>{
        return this.apiService.get(this.reg_url + '/v1/ticket-sale/'+idTicket);
    }
    createTicket(ticket_dto:any):Observable<any>{
        return this.apiService.postTicket(this.reg_url + '/v1/ticket-sale/'+this.auth.getPid()+'/create-announcement',ticket_dto);
    }
    publishTicket(idTicket:number):Observable<any>{
        return this.apiService.publish(this.reg_url + '/v1/ticket-sale/'+idTicket+'/publish');
    }
    disableTicket(idTicket:number):Observable<any>{
        return this.apiService.disabled(this.reg_url + '/v1/ticket-sale/'+idTicket+'/disabled');
    }

}