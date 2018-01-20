import { Component } from '@angular/core';
import { ICard } from '@boys-brigade/shared';

@Component({
  selector: 'app-info',
  styleUrls: [ './info.component.scss' ],
  templateUrl: './info.component.html',
})
export class InfoComponent {
  public cards: ICard[] = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ' +
      'semper lobortis nibh at suscipit. Duis.',
      title: 'Information',
    },
  ];
}
