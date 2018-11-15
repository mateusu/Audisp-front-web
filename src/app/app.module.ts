import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { HomeComponent } from './home/home.component';
import { ListaAudComponent } from './lista-aud/lista-aud.component';
import { LoginComponent } from './login/login.component';

import { BackendService } from './services/backend.service'
@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    CalendarioComponent,
    HomeComponent,
    ListaAudComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatSliderModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
