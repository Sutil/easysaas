import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LocalStorageKey } from './local-storage-key.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  readonly prefix = environment.appPrefixKey

  constructor() { }

  getItem(key: LocalStorageKey): any {
    const value = localStorage.getItem(`${this.prefix}:${key}`)
    if(value) {
      return JSON.parse(value)
    }
    return null
  }

  setItem(key: LocalStorageKey, value: any) {
    if(value) {
      localStorage.setItem(`${this.prefix}:${key}`, JSON.stringify(value))
    } else {
      localStorage.removeItem(`${this.prefix}:${key}`)
    }
  }
}
