import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { NoticiaComponent } from './noticia.component';
import { AlertaComponent } from '../alerta/alerta.component';
import { PrimeiroExmploComponent } from '../primeiro-exmplo/primeiro-exmplo.component';
import { SegundoExemploComponent } from '../segundo-exemplo/segundo-exemplo.component';
import { TerceiroExemploComponent } from '../terceiro-exemplo/terceiro-exemplo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NoticiaComponent,
    AlertaComponent,
    PrimeiroExmploComponent,
    SegundoExemploComponent,
    TerceiroExemploComponent
  ],
  exports: [
NoticiaComponent,

  ]
})
export class NoticiaModule { }
