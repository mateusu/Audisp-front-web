import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  @Output() close = new EventEmitter();
  userId: number;
  likesList: any;
  logged: boolean;

  constructor(private backend: BackendService, public snackBar: MatSnackBar) {
    this.userId = parseInt(localStorage.getItem('user'), 10);

    if (this.userId.toString() !== 'none') {
      this.logged = true;
      backend.getUserLikes({ userId: this.userId }).subscribe((data: any[]) => {
        this.likesList = data;
        this.likesList.map(row => {
          row.nome = row.nome.charAt(0).toUpperCase() + row.nome.slice(1);
          row.score = row.score;
        });
      });

    } else {
      this.logged = false;
    }
  }

  ngOnInit() {
  }

  salvar() {
    const body = { userId: 0, temas: [] };
    body.userId = this.userId;
    this.likesList.map(
      (tema) => {
        body.temas.push({
          id: tema.id,
          score: tema.score
        });
      }
    );
    this.backend.updateUserLikes(body).subscribe((data: any) => {
      if (data.status === 'ok') {
        this.showMsg(data.text, 'Fechar');
      } else {
        this.showMsg('Algo deu errado :(', 'Fechar');
      }
    });
  }

  showMsg(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  closeConfig() {
    this.close.emit(this.close);
  }

}
