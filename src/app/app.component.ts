import {
  Component,
  OnInit
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { IconRegistry } from './core/classes/icon-registry';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer) {
    this.getCommonElementIndex([1, 2, 1, 3, 1]);
  }

  public ngOnInit(): void {
    IconRegistry.register(this.matIconRegistry, this.domSanitizer);
  }

  // Create a function that takes an iterable (for example [1, 2, 1, 3, 1]) and then returns the index of the most common element. If the count of multiple elements is the same, return the index of the first one.

  public getCommonElementIndex(array: number[]) {
    if (array.length === 0) {
      return null;
    }

    let index;
    let amount = 0;

    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      console.log('first iteration element', element);

      for (let j = i + 1; j < array.length; j++) {
        if (element === array[j]) {
          console.log('elements are equal');

        } else {
          console.log('elements are not equal');
        }
        console.log(amount);
      }
    }
  }
}
