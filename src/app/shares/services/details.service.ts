import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }
  items = new Subject();
  setInfo(item){
    console.log(item)
    this.items.next(item)
  }
}
