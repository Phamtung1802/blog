import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { LeftSideComponent } from './template/left-side/left-side.component';
import { RightSideComponent } from './template/right-side/right-side.component';
import { MainBodyComponent } from './template/main-body/main-body.component';
import { FooterComponent } from './template/footer/footer.component';
import { LogoComponent } from './utilities/logo/logo.component';
import { MenuLayoutComponent } from './utilities/top-menu/menu-layout/menu-layout.component';
import { MenuButtonComponent } from './utilities/top-menu/menu-button/menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSideComponent,
    RightSideComponent,
    MainBodyComponent,
    FooterComponent,
    LogoComponent,
    MenuLayoutComponent,
    MenuButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
