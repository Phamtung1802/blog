import { Component } from '@angular/core';
import { Theme } from 'src/interfaces/theme';
import { ThemeService } from 'src/services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog'
  text: string | null = 'text'
  constructor(private themeService: ThemeService) {

  }

  ngOnInit() {
    this.text = this.themeService.theme.black;
  }

  changeTheme() {
    console.log("theme Changed")
    this.themeService.getTheme()
  }
  
}
