import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  private cars = [
    'Ford','Chevrolet','Buick'
  ];

  private message: string = 'This is my data, man!';


  myData(): string {
    return this.message;
  }

}
