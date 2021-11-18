import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroupName, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public senha: any;

  public mostrarCadastro = false;

  constructor() { }

  ngOnInit(): void {

  }

  liberarCasdastro() {
    this.mostrarCadastro = !this.mostrarCadastro
  }

  fazerLogin() {
    console.log("meu login")
    console.log(this.email, "login")
    console.log(this.senha, "senha")

  }
}
