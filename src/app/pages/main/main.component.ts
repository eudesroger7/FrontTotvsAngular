import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public repositories: any[] = [];

  constructor(private service: GithubService) { }

  ngOnInit(): void {
  }

  getRepositories(username: string): void {
    this.service.getRepositoriesByUser(username).subscribe((response: any) => {
      this.repositories = response.items;
    });
  }

  public onSearch(data: {value: string}): void {
      this.getRepositories(data.value);
  }
}
