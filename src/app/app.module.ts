import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './app/components/login/login.component';
import { ModalSistemComponent } from './components/modal-sistem/modal-sistem.component';
import { SistemasRetroComponent } from './services/sistemas-retro/sistemas-retro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalSistemComponent,
    SistemasRetroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
