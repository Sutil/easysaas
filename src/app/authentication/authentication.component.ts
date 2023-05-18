import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  constructor(private themeService: ThemeService) {}

  setTheme(theme: string) {
    this.themeService.toggleTheme(theme)
  }
}
