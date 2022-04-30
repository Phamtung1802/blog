import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeService } from 'src/services/theme.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './template/top-menu/top-menu.component';
import { MainBodyComponent } from './template/main-body/main-body.component';
import { LeftSideBarComponent } from './template/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './template/right-side-bar/right-side-bar.component';
import { FooterComponent } from './template/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    MainBodyComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
