import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  addArticle(title: HTMLInputElement,link: HTMLInputElement): boolean{
    console.log(`add article title is ${title.value} 
    and link is ${link.value}`);

    return true;
  }
}
