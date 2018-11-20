import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { MatSnackBar } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-aud-editor',
  templateUrl: './aud-editor.component.html',
  styleUrls: ['./aud-editor.component.css']
})
export class AudEditorComponent implements OnInit {

  @Input() aud: any;
  @Output() close = new EventEmitter();
  temasText: any[] = [];
  temasRemove: any[] = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private backend: BackendService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.aud.temas.map(
      (tema) => {
        this.temasText.push(tema.nome);
      }
    );
  }

  save() {

    this.aud.temas = this.temasText;
    this.backend.editAudiencia(this.aud).subscribe(
      (res) => {
        this.backend.rmvTemaAudiencia({ audId: this.aud.id, temas: this.temasRemove }).subscribe(
          (resp) => { console.log(resp); }
        );
        this.snackBar.open('Salvo com sucesso', 'Fechar', {
          duration: 2000,
        });
        // location.reload();
        this.closeModal();
      }
    );
  }

  closeModal() {
    this.close.emit(false);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.temasText.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tema): void {
    const index = this.temasText.indexOf(tema);
    this.temasRemove.push(tema);
    if (index >= 0) {
      this.temasText.splice(index, 1);
    }
  }

}
