import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }

  getData(): Observable<any[]> {
    return of([
      {
        name: 'melvin'
      },
      {
        name: 'jimmy'
      },
      {
        name: 'nicole'
      }
    ])
  }
}