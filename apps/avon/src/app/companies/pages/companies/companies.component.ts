import { Component } from '@angular/core';
import { ICard } from '@boys-brigade/shared';

@Component({
  selector: 'app-companies',
  styleUrls: [ './companies.component.scss' ],
  templateUrl: './companies.component.html',
})
export class CompaniesComponent {
  public cards: ICard[] = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ' +
      'semper lobortis nibh at suscipit. Duis.',
      title: 'Companies',
    },
  ];
}
