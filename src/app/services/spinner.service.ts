import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  loading = false;

  constructor() { }

  spinnerOn(): void {
    this.loading = true;
  }

  spinnerOf(): void {
    this.loading = false;
  }
}
