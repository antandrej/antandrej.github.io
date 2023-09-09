import { Component } from '@angular/core';
import aboutData from '../../assets/about.json'

interface About {
  image: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about: About = aboutData;
}
