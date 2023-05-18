import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { LocalStorageKey } from '../local-storage/local-storage-key.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public readonly theme$ = new BehaviorSubject<string>('light')
  
  private theme: string = 'light';
  private readonly style: HTMLLinkElement;
  private readonly metaThemeColor: HTMLMetaElement;

  constructor(private localStorageService: LocalStorageService) {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);
    this.metaThemeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
  }

  public initialTheme() {
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
    this.theme$.next(theme)
    setTimeout(
      () => {
        const color = getComputedStyle(document.body)
          .backgroundColor
        this.metaThemeColor.content = color
      },
      100)
  }
}
