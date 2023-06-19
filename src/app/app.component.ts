import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DigiStall';
  
  ngOnInit() {
    const loader = document.getElementById("preloader") as HTMLElement;
    window.addEventListener("load", () => {
      loader.style.display = "none";
    });
  }
  
}
