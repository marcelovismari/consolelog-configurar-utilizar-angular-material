import { Component, Input } from '@angular/core';
import { FrequenciaNomePeriodo } from '../frequencia-nome.model';

@Component({
  selector: 'app-modal-frequencia-nome',
  templateUrl: './modal-frequencia-nome.component.html',
  styleUrls: ['./modal-frequencia-nome.component.scss'],
})
export class ModalFrequenciaNomeComponent {
  @Input() nome: string = '';
  @Input() dados: FrequenciaNomePeriodo = {
    periodo: '',
    frequencia: 0,
  };
}
