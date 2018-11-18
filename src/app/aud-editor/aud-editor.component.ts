import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aud-editor',
  templateUrl: './aud-editor.component.html',
  styleUrls: ['./aud-editor.component.css']
})
export class AudEditorComponent implements OnInit {

  @Input() aud: any;
  @Output() close = new EventEmitter();
  temasText: any = '';

  constructor() { }

  ngOnInit() {
    this.aud.temas.map(
      (tema) => {
        this.temasText += tema.nome + ', ';
      }
    );
  }

  closeModal() {
    this.close.emit(false);
  }

}
