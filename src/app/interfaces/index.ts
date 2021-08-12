export interface RepositoryOwner {
  avatar_url: string;
  login: string;
}

export interface Repository {
  name: string;
  full_name: string;
  url: string;
  description: string;
  owner: RepositoryOwner;
}
