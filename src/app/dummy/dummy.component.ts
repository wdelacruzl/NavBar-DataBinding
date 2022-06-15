import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  movies: Movie[] = [
   {title: "The Invisible Guest", director:"Oriol Paulo", releaseDate:"January 6, 2017" },
   {title:'Knives Out', director:'Rian Johnson', releaseDate:'September 7, 2019'},
   {title: 'Everything Everywhere All at Once', director:' Daniel Kwan, Daniel Scheinert', releaseDate:'March 25, 2022 '}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index:any, item:any) {
    return item.title;
}

}

class Movie{
  title: string | undefined;
  director: string | undefined;
  releaseDate: string | undefined;
}
