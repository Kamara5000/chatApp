import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public img;
  ngOnInit(): void {
  }

submit(){
//const [file]= this.img
let k = this.img.replace("C:\\fakepath\\", "");
 //this.img = this.img.slice();
  console.log(k)
}

}
