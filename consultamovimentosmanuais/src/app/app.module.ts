import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MovimentoComponent } from './movimento/movimento.component';
import { MovimentoListComponent } from './movimento/movimento-list.component';
import { Error404Component } from './error-404/error-404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MovimentoComponent,
    MovimentoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'movimentos', pathMatch: 'full'
      },
      {
        path: 'movimentos', component: MovimentoComponent
      },
      {
        path: '**', component: Error404Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
