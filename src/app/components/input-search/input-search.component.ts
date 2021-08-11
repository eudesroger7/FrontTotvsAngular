import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {GithubService} from '../../services/github.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {
  @Output() onSearch = new EventEmitter();

  private searchDelay: any;
  public options: any[] = [];
  public inputFocused = false;
  public optionsOvered = false;
  public value = '';

  constructor(private service: GithubService) { }

  private getUsers(term: string): void {
    this.service.searchUsers(term).subscribe((response: any) => {
      this.options = response.items;
    });
  }

  private hideOptions(): void {
    this.optionsOvered = false;
    this.inputFocused = false;
  }

  public onValueChange(event: any): void {
    clearTimeout(this.searchDelay);
    this.searchDelay = setTimeout(() => {
      const {value} = event.target;
      this.getUsers(value);
    }, 1000);
  }

  public onSelectOption(option: any): void {
    this.hideOptions();
    this.value = option.login;
    this.emitSearch();
  }

  public emitSearch(): void {
    this.hideOptions();
    this.onSearch.emit({value: this.value});
  }
}
