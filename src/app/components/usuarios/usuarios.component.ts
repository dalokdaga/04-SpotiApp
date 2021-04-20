import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios:any;
  error:boolean = false;
  mensajeError:string;
  constructor(private serviceUsuarios: UsuariosService) {
    this.getUsuarios()
  }
  getUsuarios(){
    this.serviceUsuarios.getQuery("usuarios")
         .subscribe(data => {
          console.log(data);
          this.usuarios = data;
         },(errorUsuario)=>{
          this.error = true;
          this.mensajeError = errorUsuario.message;
          console.log(errorUsuario.message);
        });
  }

}
