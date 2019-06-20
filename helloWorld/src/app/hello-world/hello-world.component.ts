import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  @Input() name: string;  // add name property

  constructor() {
    // removed setting the name
  }

  ngOnInit() {
  }

}
