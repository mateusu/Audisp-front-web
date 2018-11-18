import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { BackendService } from '../services/backend.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  view = 'month';
  showDayModal: boolean;
  audData: any[];
  viewDate: Date = new Date();
  dia: any;
  events: CalendarEvent[] = [
  ];

  clickedDate: Date;

  constructor(private backend: BackendService) {
    backend.getListaAudiencas().subscribe(
      (lista: any) => {
        lista.map((aud) => {

          this.events.push({
            title: aud.nome + ' ' + aud.pauta,
            color: { primary: '#ad2121', secondary: '#FAE3E3' },
            start: new Date(aud.data + 'T12:00:00')
          });
        });
      }
    );
  }

  ngOnInit() {
  }

  showModal() {
    const d = new Date(this.clickedDate);
    this.backend.getListaAudiencasPorData({ data: formatDate(d, 'yyyy-MM-dd', 'en-US') }).subscribe(
      (lista: any) => {
        this.dia = formatDate(d, 'dd/MM/yyyy', 'pt-br');
        this.showDayModal = true;
        this.audData = lista;
      }
    );
  }

}
