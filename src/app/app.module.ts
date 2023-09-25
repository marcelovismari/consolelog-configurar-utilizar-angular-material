import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalFrequenciaNomeComponent } from './modal-frequencia-nome/modal-frequencia-nome.component';

// * ***************************************************
// * Registramos o esquema de formatação para o locale
// * ***************************************************
registerLocaleData(localePT);

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ModalFrequenciaNomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // * ***************************************************
    // * Componentes Angular:
    // * ***************************************************
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [
    // * ***************************************************
    // * Ajustamos o locale padrão da aplicação.
    // * ***************************************************
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class AppModule {}
