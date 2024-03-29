import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from "./article.model";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;

  constructor() {
    this.article = new Article(
    "Angular 4", "http://angular.io",
    10);
  }


  like() : boolean {
    this.article.likes += 1;
    return true;
  }

  dislike(): boolean {
    this.article.likes -=1;
    return true;
  }

  ngOnInit() {
  }

}
