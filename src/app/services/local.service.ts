import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  setLocal(key: string, value: any) {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    }
    else {
      localStorage.setItem(key, value);
    }
  }

  getLocal(key: string): any | null {
    let value = localStorage?.getItem(key)!;
    return value;
  }
}
