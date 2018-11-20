import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { formatDate } from '@angular/common';

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
    if (!this.perDate) {
      this.backend.getListaAudiencas().subscribe((data: any) => {
        this.audiencias = data;
        this.audiencias.map((aud) => {
          aud.pauta = aud.pauta.toLowerCase();
          aud.local = aud.local.toLowerCase();
          aud.dia = formatDate(aud.data, 'dd/MM/yyyy', 'pt-br');
        });
      });
    } else {
      this.audiencias = this.audData;
      this.audiencias.map((aud) => {
        aud.pauta = aud.pauta.toLowerCase();
        aud.local = aud.local.toLowerCase();
        aud.dia = formatDate(aud.data, 'dd/MM/yyyy', 'pt-br');
      });
    }

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
