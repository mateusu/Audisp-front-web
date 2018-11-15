import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-lista-aud',
  templateUrl: './lista-aud.component.html',
  styleUrls: ['./lista-aud.component.css']
})
export class ListaAudComponent implements OnInit {

  audiencias: any[];
  constructor(private backend: BackendService) {
    backend.getListaAudiencas().subscribe((data: any) => {
      this.audiencias = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
