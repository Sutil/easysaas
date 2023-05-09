import { AfterViewInit, Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { LocalStorageKey } from './services/local-storage/local-storage-key.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public static default = 'light';
  private theme: string = 'light';
  private readonly style: HTMLLinkElement;

  constructor(private localStorageService: LocalStorageService) {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);
    this.initialTheme()
  }

  private initialTheme() {
    // user preference
    const theme = this.localStorageService.getItem(LocalStorageKey.THEME)
    if(theme) {
      this.theme = theme
      this.loadTheme(theme)
      return;
    }

    // check OS
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.theme = darkTheme ? 'dark' : 'light'
    this.loadTheme(this.theme)
  }

  toggleTheme(theme: string) {
    this.theme = theme
    this.localStorageService.setItem(LocalStorageKey.THEME, theme)
    this.loadTheme(this.theme)
  }

  loadTheme(theme: string) {
    this.style.href = `${theme}.css`
  }
}
