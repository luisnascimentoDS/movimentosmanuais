import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MovimentoComponent } from './movimento/movimento.component';
import { MovimentoListComponent } from './movimento/movimento-list.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
