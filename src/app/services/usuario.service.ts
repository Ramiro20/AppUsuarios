import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public-api/users';
  token = '80e7c7c78a46ad1702b62cb0ee4552154a5a488bed8636a707bf0a524cadd133';
  constructor(private http: HttpClient) { }

getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
}

getUsuario(id: number): Observable<any>{
  return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token);
}

}
