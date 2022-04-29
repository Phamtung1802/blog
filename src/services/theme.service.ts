import { Inject, Injectable } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Theme } from 'src/interfaces/theme';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {
  blueTheme: Theme = {
    name: "blue",
    primary: "#1066f0",
    secondary: "#E67E6C",
    tertiary: "#B3E63E",
    black:"black",
    white: "white",
  }

  brownTheme: Theme = {
    name: "brown",
    primary: "#A3663E",
    secondary: "#94F08B",
    tertiary: "#F0A574",
    black:"black",
    white: "white",
  }

  theme: Theme = this.blueTheme;

  theme$ = new BehaviorSubject<Theme>(this.theme);


  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = this.brownTheme;
  }

  setBlueTheme(): void {
    this.theme = this.blueTheme;
  }

  setBrownTheme(): void {
    this.theme = this.brownTheme;
  }

  getTheme(): void {
    (this.theme.name == "blue") ? this.setBrownTheme() : this.setBlueTheme()
    const root = this.document.documentElement;
    root.style.setProperty('--primary', this.theme.primary);
    root.style.setProperty('--secondary', this.theme.secondary);
    root.style.setProperty('--tertiary', this.theme.tertiary);
    root.style.setProperty('--black', this.theme.black);
    root.style.setProperty('--white', this.theme.white);
    this.theme$.next(this.theme);
  }

}
