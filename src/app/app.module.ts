import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { BarraPesguisaComponent } from './barra-pesguisa/barra-pesguisa.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradaComponent,
    BarraPesguisaComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }