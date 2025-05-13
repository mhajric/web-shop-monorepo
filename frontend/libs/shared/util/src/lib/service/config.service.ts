import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config: { [key: string]: string } = {};

  constructor(private http: HttpClient) {}

  async loadConfig() {
    const config = await lastValueFrom(this.http.get('/assets/config.json'));
    this.config = config as { [key: string]: string };
  }

  get(key: string): string {
    return this.config[key];
  }
}
