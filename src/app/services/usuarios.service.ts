import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios_mabarak:string;
  constructor(private http: HttpClient) {
    console.log('servicios usuarios listo')
  }
  getQuery( query:string){
    const url = "http://10.1.1.9:5001/api/v1/";
    return this.http.get(url + query)
  }
  // getUsuarios(){
  //   return this.getQuery('usuarios')
  // }

}
