import { TranslateLoader } from "@ngx-translate/core";
import { Observable, of } from "rxjs";
import ptBr from "./pt-br";

export class TranslateLanguageLoader implements TranslateLoader {

  private readonly langs = {
    'pt-BR': ptBr,
    'en-US': {}
  }

  getTranslation(lang: 'pt-BR' | 'en-US'): Observable<any> {
    const keys = this.langs[lang]
    return of(keys)
  }
}
