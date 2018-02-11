import { Component, OnInit} from '@angular/core';
import { Causes } from './landing-page-causes.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {
  titles: Causes[];

  constructor() {
    const card1: Causes = {title: 'Disaster Relief', img: 'https://openclipart.org/image/2400px/svg_to_png/224271/9va-Cartoon_Tornado.png',
      content: 'Earthquakes, hurricanes, etc.'};
    const card2: Causes = {title: 'Medical Diseases',
      img: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Sick_Emoji_Icon_2.png?13752525173949329807',
      content: 'Cancer, heart disease, etc.'};
    const card3: Causes = {title: 'Social Justice', img: 'http://www.sunnyhill.org/wp-content/uploads/2017/10/one-world-logo.png',
      content: 'Human right, environmentalism, etc.'};
    const card4: Causes = {title: 'Education', img: 'http://unothegateway.com/wp-content/uploads/2015/10/education.jpg',
      content: 'Adult learning programs, STEM programs, etc.'};
    this.titles = [card1, card2, card3, card4];

  }
}
