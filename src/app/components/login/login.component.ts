import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email!: string;
  senha!: string;


  constructor(private router: Router) {

  }


  entrar(): void {

    if (this.email == "admin@admin.com" && this.senha == "admin123") {
      this.router.navigate(["/cadastro"]);
    } else {
      alert("E-mail ou senha incorretos.")
    }

  }
}