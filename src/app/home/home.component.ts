import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  audiencias: any[];
  constructor(private backend: BackendService) {
    const user = localStorage.getItem('user');
    backend.getAudienciasSugeridas(user).subscribe(
      (data: any) => {
        this.audiencias = data;
      }
    );
  }

  ngOnInit() {
  }

}
