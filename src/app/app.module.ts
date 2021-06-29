import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ModalSistemComponent } from './components/modal-sistem/modal-sistem.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { APP_ROUTES } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    ModalSistemComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
