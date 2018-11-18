import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-lista-aud',
  templateUrl: './lista-aud.component.html',
  styleUrls: ['./lista-aud.component.css']
})
export class ListaAudComponent implements OnInit {

  audiencias: any[];
  @Input() perDate: boolean;
  @Input() audData: any[];

  constructor(private backend: BackendService) {

  }

  ngOnInit() {
    console.log(this.audData);

    if (!this.perDate) {
      this.backend.getListaAudiencas().subscribe((data: any) => {
        this.audiencias = data;
      });
    } else {
      this.audiencias = this.audData;
    }
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
