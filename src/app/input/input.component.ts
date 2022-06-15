import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = 'Hello World'; 

  onClick(){
    console.log("Button has been clicked");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
