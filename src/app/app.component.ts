import { Component } from '@angular/core';
import { HeaderComponent } from './template/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./_var.scss'],
})
export class AppComponent {
  title = 'blog';
}
