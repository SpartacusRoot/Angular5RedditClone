export class Article {
  title: string;
  votes: number;
  link: string;

  constructor(title: string, votes: number, link: string) {
    this.title = title;
    this.votes = votes || 0;
    this.link = link;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  domain(): string {
    const domainAndPath: string = this.link.split('//')[1];
    return domainAndPath.split('/')[0];
  }
  catch(err) {
    return null;
  }
}
