import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { MinusculoValidator } from './minusculo.validator';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup; //!: indica que pode ser nulo ou não

  constructor(private formBuilder : FormBuilder,
              private novoUsuarioService : NovoUsuarioService,
              private usuarioExisteService: UsuarioExisteService) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      fullName: ['',[
        Validators.required, Validators.minLength(4), 
      ]],
      userName: ['',[MinusculoValidator],[this.usuarioExisteService.usuarioJaExiste()]],
      password: ['']
    })
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
