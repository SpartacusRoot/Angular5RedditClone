import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 articles: Article[];

 constructor() {
this.articles = [
 new Article('Angular', 3, 'http://angular.io'),
 new Article('Facebook', 3, 'http://facebook.com'),
 new Article('Google', 3, 'http://google.com'),
];
 }

addArticle(newtitle: HTMLInputElement, newlink: HTMLInputElement) {
console.log(`adding article title: ${newtitle.value} and link: ${newlink.value}`);
this.articles.push(new Article(newtitle.value, 0, newlink.value));
newtitle.value = '';
newlink.value = '';
return false;
}
sortedArticles(): Article[] {
  return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
}
}


