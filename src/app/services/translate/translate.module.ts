import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslateLanguageLoader } from './translate-language-loader';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt-BR',
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader,
      }
    }),
  ],
  providers: [
    TranslateService,
  ],
  exports: [
    TranslatePipe
  ]
})
export class ESTranslateModule { }
