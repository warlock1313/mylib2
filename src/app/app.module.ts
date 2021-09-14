import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonComponent } from '../../projects/mylib2/src/lib/boton/boton.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormularioComponent } from '../../projects/mylib2/src/lib/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
