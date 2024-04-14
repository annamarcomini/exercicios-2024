import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardLoginComponent } from './components/header/card-login/card-login.component';
import { AvatarComponent } from './components/header/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardLoginComponent,
    AvatarComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
