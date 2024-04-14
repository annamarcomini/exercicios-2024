import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardLoginComponent } from './components/header/card-login/card-login.component';
import { AvatarComponent } from './components/header/avatar/avatar.component';
import { SelectComponent } from './components/header/select/select.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardLoginComponent,
    AvatarComponent,
    SelectComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
