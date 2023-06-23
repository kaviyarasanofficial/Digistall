import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  xOffset: number = 0;
  isMouseIn: boolean = false;

  translate() {
    const offsetIncrementor: number = this.isMouseIn ? 0.05 : 0.2;
    if (this.xOffset >= 258 * 7) {
      this.xOffset = 0;
    } else {
      this.xOffset += offsetIncrementor;
    }
    const slides = document.getElementById('slides');
    if (slides) {
      slides.style.transform = `translateX(-${this.xOffset}px)`;
    }
  }

  onMouseOver() {
    this.isMouseIn = true;
  }

  onMouseOut() {
    this.isMouseIn = false;
  }

  ngAfterViewInit() {
    setInterval(() => this.translate(), 0);
  }
}
