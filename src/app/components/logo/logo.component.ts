import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'es-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>()

  private readonly lightPath = 'assets/icons/icon.png'
  private readonly darkPath = 'assets/icons/icon-dark.png'
  logoPath = this.lightPath

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
      this.themeService.theme$
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            theme => {
              this.logoPath = theme === 'dark' ? this.darkPath : this.lightPath
            }
          )
  }

  ngOnDestroy(): void {
      this.destroy$.next()
      this.destroy$.complete()
  }

}
