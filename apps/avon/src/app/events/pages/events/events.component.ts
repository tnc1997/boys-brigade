import { Component } from '@angular/core';
import { ICard } from '@boys-brigade/shared';

@Component({
  selector: 'app-events',
  styleUrls: [ './events.component.scss' ],
  templateUrl: './events.component.html',
})
export class EventsComponent {
  public cards: ICard[] = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ' +
      'semper lobortis nibh at suscipit. Duis.',
      title: 'Events',
    },
  ];
}
