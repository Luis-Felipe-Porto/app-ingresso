import { HttpClient, HttpHeaders, HttpParams,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions ={
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Accept":"*/*"
    })
  }
  constructor( private http:HttpClient) { }

  get(path:string, params:HttpParams =new HttpParams()):Observable<any>{
    return this.http.get(path,{params}).pipe(catchError(this.formatErrors))
  }
  put(path:string, body:Object ={}):Observable<any>{
    return this.http.put(path,JSON.stringify(body), this.httpOptions).pipe(catchError(this.formatErrors))
  }
  post(path:string, body:Object ={}):Observable<any>{
    return this.http.post(path,JSON.stringify(body),this.httpOptions).pipe(catchError(this.formatErrors))
  }
  delete(path:string):Observable<any>{
    return this.http.delete(path).pipe(catchError(this.formatErrors))
  }
  private formatErrors(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Um erro de rede aconteceu.
      console.error('Um erro ocorreu:', error.message);
      return throwError(() => new Error('Erro de rede, tente novamente mais tarde.'));
    } else {
      // Um erro HTTP retornou
      const errorMessage = error.message || error.message || 'Erro desconhecido';
      return throwError(() => error);
    }
  }
}
