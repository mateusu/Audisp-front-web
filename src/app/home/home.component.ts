import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  audiencias: any[] = [];

  constructor(private backend: BackendService) {
    const user = localStorage.getItem('user');
    backend.getAudienciasSugeridas(user).subscribe(
      (data: any) => {
        data.map(
          (aud: any) => {
            aud.clicked = false;
            this.audiencias.push(aud);
          }
        );
      }
    );
  }

  ngOnInit() {
  }

  likeAudiencia(temas) {
    const userId = localStorage.getItem('user');
    this.backend.likeAudiencia({ userId: userId, temas: temas }).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
