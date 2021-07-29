import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario

  confirmaSenha: string
  tipoUsuario1: string


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmeSenha(event: any){
    this.confirmaSenha = event.target.value

  }

  tipoUsuario(event: any){
    this.tipoUsuario1 = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuario1

    if(this.usuario.senha != this.confirmaSenha){
      alert('A senha estão incorretas. ')

    } else {
     this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
     this.usuario = resp
     this.router.navigate(['/entrar'])
       alert('Parabéns Cadastrado com sucesso!')
        })

    }

  }

}
