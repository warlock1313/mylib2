import { NgModule } from '@angular/core';
import { Mylib2Component } from './mylib2.component';
import { BrowserModule } from '@angular/platform-browser';
import { BotonComponent } from '../lib/boton/boton.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormularioComponent } from '../lib/formulario/formulario.component';




@NgModule({
  declarations: [
    Mylib2Component,
    BotonComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  exports: [
    Mylib2Component
  ]
})
export class Mylib2Module { }
