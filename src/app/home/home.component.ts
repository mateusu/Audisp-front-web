import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  audiencias: any[] = [];
  logged: boolean;

  constructor(private backend: BackendService) {
    const user = localStorage.getItem('user');
    if (user === 'none') {
      this.logged = false;
    } else {
      this.logged = true;
      backend.getAudienciasSugeridas(user).subscribe(
        (data: any) => {
          data.map(
            (aud: any) => {
              aud.clicked = false;
              aud.pauta = aud.pauta.toLowerCase();
              aud.local = aud.local.toLowerCase();
              this.audiencias.push(aud);
            }
          );
        }
      );
    }
    console.log(this.audiencias);
  }

  ngOnInit() {
  }

  openAudUrl(id) {
    this.backend.getAudUrl(id).subscribe(
      (res: any) => {
        window.open(res.url, '_blank');
      }
    );
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
