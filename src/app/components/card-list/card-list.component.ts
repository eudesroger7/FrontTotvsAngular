import {Component, Input} from '@angular/core';
import {Repository} from '../../interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() repository: Repository | undefined;

  public open = false;

}
