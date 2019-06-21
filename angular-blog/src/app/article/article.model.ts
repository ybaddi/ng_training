export class Article{
  title : string;
  link: string;
  likes: number;


  constructor(title: string, link: string, likes?: number){
    this.title = title;
    this.link = link;
    this.likes = likes || 0;
  }

}
