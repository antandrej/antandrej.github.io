import { Component } from '@angular/core';
import projectsData from '../../assets/projects.json'
import currentProjectsData from '../../assets/cprojects.json'

interface Project {
  image: string;
  name: string;
  description: string;
  link: string;
  screenshots: any;
  type: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  projects: Project[] = projectsData
  currentProjects: Project[] = currentProjectsData

  constructor() { }


  openModal(src: string) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img') as HTMLImageElement;

    if (modal && modalImg) {
      modal.style.display = "block";
      modalImg.src = src;
    }
  }

  closeModal() {
    const modal = document.getElementById('modal');

    if (modal)
      modal.style.display = "none";
  }
}
