import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CorpoComponent } from './components/corpo/corpo.component';
import { MenuComponent } from './components/menu/menu.component';
import { VoceMenuComponent } from './components/voce-menu/voce-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { RicorsoScegliComponent } from './components/ricorso-scegli/ricorso-scegli.component';
import { ProvvedimentoApriComponent } from './components/provvedimento-apri/provvedimento-apri.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: "", component: RicorsoScegliComponent},
  {path: "ricorso-scegli", component: RicorsoScegliComponent},
  {path: "provvedimento-apri", component: ProvvedimentoApriComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CorpoComponent,
    MenuComponent,
    VoceMenuComponent,
    RicorsoScegliComponent,
    ProvvedimentoApriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
