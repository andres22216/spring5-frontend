import { Component, OnInit } from "@angular/core";
import { Usuario } from './usuario';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  titulo: string = "Por favor Sing In!";
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() { }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      swal.fire('Error login', 'Username o password vacias!', 'error');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);
      this.router.navigate(['/clientes']);
      swal.fire('Login', `Hola ${response.username}, has iniciado sesion con exito!`, 'success');
    });

  }
}
