import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
   getCurrentYear(): string {
    const currentDate: Date = new Date();
    const currentYear: string = currentDate.getFullYear().toString();
    return currentYear;
  }
  
 
}
