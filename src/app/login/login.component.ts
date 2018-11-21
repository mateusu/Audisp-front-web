import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Input() show;
  @Output() close = new EventEmitter();
  register: any;
  constructor(private backend: BackendService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(mail, pass) {
    this.backend.getAuthorization(mail, pass).subscribe(
      (data: { status: string, user: string }) => {
        if (data.status === 'ok') {
          localStorage.setItem('logged', 'true');
          localStorage.setItem('user', data.user);
          location.reload();
        } else {
          this.showMsg('Email ou senha inválidos', 'Fechar');
        }
      });
  }


  registrar(mail, pass, date, name) {
    this.backend.registerUser(
      {
        email: mail,
        senha: pass,
        nome: name,
        nascimento: date
      }).subscribe(
        (data: { status: string, text: string }) => {
          if (data.status === 'nok') {
            this.showMsg(data.text, 'Fechar');
          } else if (data.status === 'ok') {
            this.login(mail, pass);
            this.closeModal();
          }
        });
  }

  showMsg(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  closeModal() {
    this.show = false;
    this.close.emit(this.show);
  }

}
