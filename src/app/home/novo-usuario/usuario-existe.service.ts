import { Injectable, Pipe } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { switchMap, map, first } from 'rxjs/operators';
import { NovoUsuarioService} from './novo-usuario.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService : NovoUsuarioService ) { }

  usuarioJaExiste() {
    return (control:AbstractControl) => {
      return control.valueChanges.pipe(
          switchMap((nomeUsuario) => 
             this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
          ),
          map((nomeUsuario) => 
             (nomeUsuario ? {usuarioExistente:true} : null)
          ),
          first()

      )
    }
  }
}
