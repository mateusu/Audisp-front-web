import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-aud-editor',
  templateUrl: './aud-editor.component.html',
  styleUrls: ['./aud-editor.component.css']
})
export class AudEditorComponent implements OnInit {

  @Input() aud: any;
  @Output() close = new EventEmitter();
  temasText: any = '';

  constructor(private backend: BackendService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.aud.temas.map(
      (tema) => {
        this.temasText += tema.nome + ', ';
      }
    );
    this.temasText = this.temasText.substring(0, this.temasText.length - 2);
  }

  save() {
    this.aud.temas = this.temasText.split(', ');
    this.backend.editAudiencia(this.aud).subscribe(
      (res) => {
        console.log(res);
        this.snackBar.open('Salvo com sucesso', 'Fechar', {
          duration: 2000,
        });

        this.closeModal();
      }
    );
  }
  closeModal() {
    this.close.emit(false);
  }

}
