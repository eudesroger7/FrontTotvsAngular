import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {Repository} from '../../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public repositories: Repository[] = [
    {
      full_name: 'eudesroger7/angular-maps',
      url: 'https://api.github.com/repos/eudesroger7/angular-maps',
      name: 'angular-maps',
      description: 'descrição do coisa',
      owner: {
        login: 'eudesroger7',
        avatar_url: 'https://avatars.githubusercontent.com/u/38676727?v=4',
      },
    }, {
      full_name: 'eudesroger7/angular-maps',
      url: 'https://api.github.com/repos/eudesroger7/angular-maps',
      name: 'angular-maps',
      description: 'descrição do coisa',
      owner: {
        login: 'eudesroger7',
        avatar_url: 'https://avatars.githubusercontent.com/u/38676727?v=4',
      },
    }
  ];

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
