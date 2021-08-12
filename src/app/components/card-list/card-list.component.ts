import {Component, Input} from '@angular/core';
import {Repository} from '../../interfaces/repository';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {ConfirmDialogData} from '../../interfaces/components';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() repository: Repository | undefined;

  public open = false;

  constructor(private dialog: MatDialog) { }

  public openDetails(): void {
    const data: ConfirmDialogData = {
      description: 'Tem certeza que deseja ir para a tela?',
      confirmButton: {
        label: 'Sim',
        action: (e) => console.log(e),
      },
      dismissButton: {
        label: 'Não',
        action: (e) => console.log(e),
      }
    };

    this.dialog.open(ConfirmDialogComponent, {
      data
    });
  }

}
