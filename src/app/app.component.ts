import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { finalize } from 'rxjs';

import { FrequenciaNome, FrequenciaNomePeriodo } from './frequencia-nome.model';
import { IBGEService } from './ibge.service';
import { ModalFrequenciaNomeComponent } from './modal-frequencia-nome/modal-frequencia-nome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dadosFrequenciaNome: FrequenciaNome | null = null;
  mostrarCarregando = false;
  colunasDaTabela: string[] = ['periodo', 'frequencia'];

  formularioPesquisa: FormGroup = new FormGroup({
    nome: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  @ViewChild('inputNome')
  inputNome: ElementRef<HTMLInputElement> | null = null;

  get nomeFormularioPesquisa() {
    return this.formularioPesquisa.get('nome')!;
  }

  constructor(
    private dialog: MatDialog,
    private ibgeService: IBGEService,
    private snackBar: MatSnackBar
  ) {}

  pesquisar() {
    if (this.formularioPesquisa.invalid) {
      return;
    }

    this.mostrarCarregando = true;

    const { nome } = this.formularioPesquisa.value;
    this.ibgeService
      .get(nome)
      // Quando o Observable dá erro ou retorna seu valor, o
      // "finalize" é executado e escondemos o loading
      .pipe(finalize(() => (this.mostrarCarregando = false)))
      .subscribe({
        next: (dados) => (this.dadosFrequenciaNome = dados),
        error: (error) => {
          this.reiniciarFormulario();
          this.snackBar.open(error);
        },
      });
  }

  reiniciarFormulario() {
    this.dadosFrequenciaNome = null;
    this.formularioPesquisa.reset();
    this.inputNome?.nativeElement.focus();
  }

  mostrarModal(nome: string, dados: FrequenciaNomePeriodo) {
    const refModal = this.dialog.open(ModalFrequenciaNomeComponent);

    const modal = refModal.componentInstance;
    modal.nome = nome;
    modal.dados = dados;
  }
}
