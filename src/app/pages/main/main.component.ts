import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {Repository} from '../../interfaces/repository';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public repositories: Repository[] = [];

  constructor(private service: GithubService) { }

  getRepositories(username: string): void {
    this.service.getRepositoriesByUser(username).subscribe((response: any) => {
      this.repositories = response.items;
    });
  }

  public onSearch(data: {value: string}): void {
      this.getRepositories(data.value);
  }
}
